import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import Header from '../../components/Header';
import Title from '../../components/Title';
import PageHeader from '../../components/Layout/PageHeader';
import PageContent from '../../components/Layout/PageContent';
import AlertError from '../../components/common/AlertError';
import AlertWarning from '../../components/common/AlertWarning';

import { InformationCircleIcon } from '@heroicons/react/solid';

import '@rainbow-me/rainbowkit/styles.css';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useSigner } from 'wagmi';
import { useRouter } from 'next/router';

const Ideas = () => {
  const [title, setTitle] = useState<string>('');
  const [tldr, setTldr] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isPreview, setIsPreview] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>(undefined);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitText, setSubmitText] = useState<string>('Sign and Submit');

  const router = useRouter();

  const { data: accountData } = useAccount();
  const { data: signer } = useSigner();

  useEffect(() => {
    if (!accountData?.address) {
      setAuthError('Please connect your wallet to submit an idea');
    } else {
      setAuthError(undefined);
    }
  }, [accountData]);

  const handlePreviewBtn = async (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const tldr = event.target.tldr.value;
    const description = event.target.description.value;

    if (title.length && tldr.length && description.length) {
      setTitle(title);
      setTldr(tldr);
      setDescription(description);

      setIsPreview(true);
    }
  };

  const handleSubmitIdea = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitText('Submitting...');

    // verify auth
    try {
      const authResp = await fetch('/api/me');
      const authData = await authResp.json();
      const eoa = authData?.address;
      if (!eoa) {
        //
        const address = accountData?.address;

        if (!address) return;

        const message = `${new Date().toDateString()} Nouns.Center`;
        const signature = await signer.signMessage(message);

        // verify signature
        const loginResp = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message, signature, address }),
        });
        const data = await loginResp.json();
        if (!data?.ok) {
          setAuthError('There was an error during authentication');
          return;
        }
        setIsSubmitting(false);
        setSubmitText('Sign and Submit');
      }
    } catch (error) {
      // set error
      console.log({ error });
      setIsSubmitting(false);
      setSubmitText('Sign and Submit');
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
      const respData = await response.json();
      console.log({ respData });
      setIsSubmitting(false);
      setSubmitText('Sign and Submit');
      router.push('/ideas');
    } catch (err) {
      console.log({ err });
      setIsSubmitting(false);
      setSubmitText('Sign and Submit');
    }
  };

  const togglePreviewMode = () => {
    setIsPreview(!isPreview);
  };

  const validateForm = () => {
    if (title?.length > 5 && tldr?.length > 5 && description?.length > 5) {
      setIsFormValid(true);
    }
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    validateForm();
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    validateForm();
  };
  const handleTldrChange = (event) => {
    setTldr(event.target.value);
    validateForm();
  };

  const renderPreview = () => {
    return (
      <div className="mt-5">
        {/* <ReactMarkdown className="text-2xl">{title}</ReactMarkdown>
        <ReactMarkdown className="mt-5 text-2xl">{tldr}</ReactMarkdown> */}
        <div className="pb-3 border-b border-gray-200 sm:items-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Title</h3>
          <div className="text-xl text-gray-700">{title}</div>
        </div>
        <div className="mt-3 pb-3 border-b border-gray-200 sm:items-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">tldr</h3>
          <div className="text-xl text-gray-700">{tldr}</div>
        </div>
        <div className="mt-3 pb-3 border-b border-gray-200 sm:items-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Description
          </h3>
          <ReactMarkdown className="mt-5 text-2xl">{description}</ReactMarkdown>
        </div>

        <div className="flex">
          <div className="py-3 bg-gray-50">
            <button
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 disabled:bg-sky-300 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              onClick={togglePreviewMode}
            >
              Go Back
            </button>
          </div>
          <div className="py-3 bg-gray-50">
            <button
              className="inline-flex justify-center ml-3 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 disabled:bg-sky-300 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              onClick={handleSubmitIdea}
              disabled={isSubmitting}
            >
              {submitText}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <div className="mt-5">
        <form onSubmit={handlePreviewBtn}>
          <label
            htmlFor="title"
            className="block text-xl font-md text-gray-700"
          >
            Title
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="title"
              className="p-6 text-2xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full placeholder:text-xl border-gray-300 rounded-xl"
              placeholder="Give your idea a name..."
              aria-describedby="title-description"
              onChange={handleTitleChange}
              value={title}
            />
          </div>

          <label
            htmlFor="tldr"
            className="mt-6 block text-xl font-md text-gray-700"
          >
            tl;dr
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="tldr"
              className="p-6 text-2xl placeholder:text-2xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-xl"
              onChange={handleTldrChange}
              placeholder="simply explain your idea in one sentence..."
              aria-describedby="tldr-description"
              value={tldr}
            />
          </div>

          <div className="rounded-md bg-blue-50 p-4 mt-6">
            <div className="flex">
              <div className="flex-shrink-0 self-center">
                <InformationCircleIcon
                  className="h-5 w-5 text-blue-400"
                  aria-hidden="true"
                />
              </div>
              <div className="ml-3 flex-1 md:flex md:justify-between">
                <p className="text-md text-blue-700">
                  <strong>Tip:</strong> Use markdown to style your idea
                  properly!
                </p>
                <p className="mt-3 text-sm md:mt-0 md:ml-6">
                  <a
                    href="#"
                    className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
                  >
                    Link to syntax <span aria-hidden="true">&rarr;</span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="Idea Description"
              className="block text-xl font-md text-gray-700"
            >
              Idea Description
            </label>
            <div className="mt-1">
              <textarea
                rows={15}
                name="description"
                className="whitespace-pre-line text-2xl placeholder:text-2xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-xl"
                onChange={handleDescriptionChange}
                value={description}
              />
            </div>
          </div>

          <div className="py-3 bg-gray-50">
            <button
              disabled={!isFormValid}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 disabled:bg-sky-300 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              onClick={togglePreviewMode}
            >
              Preview
            </button>
          </div>

          {/* <p className="mt-2 text-sm text-gray-500">
          We will only use this for spam.
        </p> */}
        </form>
      </div>
    );
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
            {/* <h3 className="text-2xl pt-2 pb-4 text-nouns sm:text-center leading-6 font-medium text-black dark:xs:text-white dark:sm:text-black">
              The Idea Garden
            </h3> */}
            <div className="flex justify-between">
              <div className="self-end">
                <ConnectButton showBalance={false} />
              </div>
            </div>

            {authError && <AlertWarning text={authError} />}

            <div className="border-t-4 border-grey-500 mt-3"></div>
            <div className="flex-1 min-w-0 mt-4">
              <h2 className="text-2xl font-bold leading-7 text-gray-500 sm:text-3xl sm:truncate">
                Create an Idea!
              </h2>
            </div>

            {isPreview ? renderPreview() : renderForm()}
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default Ideas;
