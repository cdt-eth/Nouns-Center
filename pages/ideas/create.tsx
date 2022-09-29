import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Title from '../../components/Title';
import PageHeader from '../../components/Layout/PageHeader';
import PageContent from '../../components/Layout/PageContent';
import AlertWarning from '../../components/common/AlertWarning';
import WalletButton from '../../components/WalletButton/WalletButton';
import IdeaForm from '../../components/ideas/IdeaForm';
import IdeaPreview from '../../components/ideas/IdeaPreview';

import { useAccount, useSigner } from 'wagmi';
import { useRouter } from 'next/router';
import Subheader from '../../components/Subheader';
import Link from 'next/link';

export const DESCRIPTION_MIN_LENGTH = 35;
export const TITLE_MIN_LENGTH = 8;

const Ideas = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>(undefined);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const router = useRouter();

  const { address } = useAccount();
  const { data: signer } = useSigner();

  const isFormValid = () => {
    return description?.length >= DESCRIPTION_MIN_LENGTH && title?.length >= TITLE_MIN_LENGTH;
  };

  useEffect(() => {
    if (!address) {
      setAuthError('Please connect your wallet to submit an idea');
    } else {
      setAuthError(undefined);
    }
  }, [address]);

  const handleSubmitIdea = async evt => {
    evt.preventDefault();
    setIsSubmitting(true);

    // verify auth
    try {
      if (!address?.length) {
        setAuthError('Please connect wallet to submit an idea');
        setIsSubmitting(false);
        return;
      }

      const message = `${new Date().toDateString()} Nouns.Center`;
      const signature = await signer.signMessage(message);

      // verify signature
      const loginResp = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, signature, address: address }),
      });
      const data = await loginResp.json();
      if (!data?.success) {
        setIsSubmitting(false);
        setAuthError('There was an error during authentication');
        return;
      }
    } catch (error) {
      // set error
      setAuthError(error.message);
      setIsSubmitting(false);

      return;
    }

    try {
      const response = await fetch('/api/ideas', {
        method: 'POST',
        body: JSON.stringify({
          title,
          description,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      await response.json();
      setIsSubmitting(false);
      router.push('/ideas');
    } catch (err) {
      console.log({ err });
      setIsSubmitting(false);
    }
  };

  const togglePreviewMode = evt => {
    evt.preventDefault();

    if (isFormValid()) setIsPreview(!isPreview);
  };

  const handleTitleChange = evt => {
    evt.preventDefault();
    setTitle(evt.target.value);
  };

  const handleDescriptionChange = evt => {
    evt.preventDefault();
    setDescription(evt.target.value);
  };

  return (
    <>
      <PageHeader>
        <Header title="Ideas | Nouns Center" />
        <Title title="Ideas" />
        <Subheader
          title="Grab an idea, get to building"
          body="A place to capture thoughts, share Nounish ideas, and collaborate with other builders."
        />
      </PageHeader>

      <PageContent>
        <div>
          <div>
            <div className="flex mb-5">
              {!isPreview && (
                <Link href={`/ideas`}>
                  <a className="inline-flex cursor-pointer items-center font-medium transition rounded-md text-blue-500 hover:text-gray-700 underline mr-10">
                    Go back
                  </a>
                </Link>
              )}

              <WalletButton showBalance={false} />
            </div>

            {authError && <AlertWarning text={authError} />}

            {/* <div className="border-t-4 border-grey-500 my-8"></div> */}
            {/* <div className="flex-1 min-w-0 mt-4">
              <h2 className="text-2xl text-nouns font-bold leading-7 text-gray-500 sm:text-3xl sm:truncate">
                Create an Idea!
              </h2>
            </div> */}

            {isPreview ? (
              <IdeaPreview
                title={title}
                description={description}
                handlePreviewToggle={togglePreviewMode}
                handleSubmitIdea={handleSubmitIdea}
                isSubmitting={isSubmitting}
              />
            ) : (
              <IdeaForm
                title={title}
                description={description}
                handlePreviewToggle={togglePreviewMode}
                onTitleChange={handleTitleChange}
                onDescriptionChange={handleDescriptionChange}
              />
            )}
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default Ideas;
