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

const Ideas = () => {
  const [title, setTitle] = useState<string>('');
  const [tldr, setTldr] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>(undefined);
  const [formErrors, setFormErrors] = useState({
    title: false,
    tldr: false,
    description: false,
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const router = useRouter();

  const { address } = useAccount();
  const { data: signer } = useSigner();

  useEffect(() => {
    if (!address) {
      setAuthError('Please connect your wallet to submit an idea');
    } else {
      setAuthError(undefined);
    }
  }, [address]);

  const handleSubmitIdea = async (evt) => {
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
          tldr,
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

  const togglePreviewMode = (evt) => {
    evt.preventDefault();

    if (validateForm()) {
      setIsPreview(!isPreview);
    }
  };

  const validateForm = () => {
    let isValid = true;

    let newFormErrors = { ...formErrors };

    if (title?.length <= 8) {
      newFormErrors.title = true;
      isValid = false;
    } else {
      newFormErrors.title = false;
    }
    if (tldr?.length <= 8) {
      newFormErrors.tldr = true;
      isValid = false;
    } else {
      newFormErrors.tldr = false;
    }
    if (description?.length <= 50) {
      newFormErrors.description = true;
      isValid = false;
    } else {
      newFormErrors.description = false;
    }

    setFormErrors(newFormErrors);

    return isValid;
  };

  const handleTitleChange = (evt) => {
    evt.preventDefault();
    setTitle(evt.target.value);
  };

  const handleTldrChange = (evt) => {
    evt.preventDefault();
    setTldr(evt.target.value);
  };

  const handleDescriptionChange = (evt) => {
    evt.preventDefault();
    setDescription(evt.target.value);
  };

  return (
    <>
      <PageHeader>
        <Header title="Ideas | Nouns Center" />
        <Title title="Ideas" />
      </PageHeader>

      <PageContent>
        <div>
          <div>
            <div className="flex justify-between">
              <div className="self-end">
                <WalletButton showBalance={false} />
              </div>
            </div>

            {authError && <AlertWarning text={authError} />}

            <div className="border-t-4 border-grey-500 mt-3"></div>
            <div className="flex-1 min-w-0 mt-4">
              <h2 className="text-2xl font-bold leading-7 text-gray-500 sm:text-3xl sm:truncate">
                Create an Idea!
              </h2>
            </div>

            {isPreview ? (
              <IdeaPreview
                handlePreviewToggle={togglePreviewMode}
                handleSubmitIdea={handleSubmitIdea}
                title={title}
                tldr={tldr}
                description={description}
                isSubmitting={isSubmitting}
              />
            ) : (
              <IdeaForm
                title={title}
                tldr={tldr}
                description={description}
                handlePreviewToggle={togglePreviewMode}
                onTitleChange={handleTitleChange}
                onTldrChange={handleTldrChange}
                onDescriptionChange={handleDescriptionChange}
                formErrors={formErrors}
              />
            )}
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default Ideas;
