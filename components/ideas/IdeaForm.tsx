import { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import clsx from 'classnames';

const IdeaForm = ({
  title,
  tldr,
  description,
  handlePreviewToggle,
  onTitleChange,
  onTldrChange,
  onDescriptionChange,
  isFormValid,
}) => {
  const formNoErrorCls =
    'focus:ring-indigo-500 focus:border-indigo-500 border-gray-300';
  const formErrorCls =
    'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500';

  const [titleError, setTitleError] = useState<string>('');
  const [tldrError, setTldrError] = useState<string>('');
  const [descriptionError, setDescriptionError] = useState<string>('');

  const onTitleBlur = () => {
    if (title?.length < 8) {
      setTitleError('title should be at least 8 characters');
    } else if (title?.length > 80) {
      setTitleError('title should be no longer than 80 characters');
    } else {
      setTitleError('');
    }
  };

  const onTldrBlur = () => {
    if (tldr?.length < 8) {
      setTldrError('tldr should be at least 8 characters');
    } else if (tldr?.length > 120) {
      setTldrError('tldr should be no longer than 120 characters');
    } else {
      setTldrError('');
    }
  };

  const onDescriptionBlur = () => {
    if (description?.length < 50) {
      setDescriptionError('description should be at least 50 charcters');
    } else {
      setDescriptionError('');
    }
  };

  return (
    <div className="mt-5">
      <form>
        <div className="flex justify-between">
          <label
            htmlFor="title"
            className="text-nouns block text-xl font-md text-gray-700"
          >
            Title
          </label>
          <span>{title.length}/80</span>
        </div>
        <div className="mt-1">
          <input
            type="text"
            name="title"
            className={clsx(
              'text-nouns p-6 text-2xl shadow-sm block w-full placeholder:text-xl rounded-xl',
              titleError?.length ? formErrorCls : formNoErrorCls
            )}
            placeholder="Give your idea a name..."
            aria-describedby="title-description"
            onChange={(evt) => onTitleChange(evt)}
            onBlur={onTitleBlur}
            value={title}
          />
          {titleError?.length ? (
            <p className="mt-2 text-sm text-red-600" id="title-error">
              {titleError}
            </p>
          ) : null}
        </div>

        <div className="flex justify-between mt-6">
          <label
            htmlFor="tldr"
            className="text-nouns block text-xl font-md text-gray-700"
          >
            tl;dr
          </label>
          <span>{tldr.length}/120</span>
        </div>
        <div className="mt-1">
          <input
            type="text"
            name="tldr"
            className={clsx(
              'text-nouns p-6 text-2xl placeholder:text-xl shadow-sm block w-full rounded-xl',
              tldrError?.length ? formErrorCls : formNoErrorCls
            )}
            onChange={(evt) => onTldrChange(evt)}
            onBlur={onTldrBlur}
            placeholder="simply explain your idea in one sentence..."
            aria-describedby="tldr-description"
            value={tldr}
          />
          {tldrError?.length ? (
            <p className="mt-2 text-sm text-red-600" id="tldr-error">
              {tldrError}
            </p>
          ) : null}
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
                <strong>Tip:</strong> Use markdown to style your idea properly!
              </p>
              <p className="mt-3 text-sm md:mt-0 md:ml-6">
                <Link href="https://www.markdownguide.org/basic-syntax/">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
                  >
                    Link to syntax <span aria-hidden="true">&rarr;</span>
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between">
            <label
              htmlFor="Idea Description"
              className="text-nouns block text-xl font-md text-gray-700"
            >
              Idea Description
            </label>
            <span>{description.length}</span>
          </div>
          <div className="mt-1">
            <textarea
              rows={15}
              name="description"
              className={clsx(
                'text-nouns whitespace-pre-line text-lg placeholder:text-xl shadow-sm block w-full rounded-xl',
                descriptionError?.length ? formErrorCls : formNoErrorCls
              )}
              onChange={(evt) => onDescriptionChange(evt)}
              onBlur={onDescriptionBlur}
              value={description}
              placeholder="give a description of your idea!"
            />
          </div>
          {descriptionError?.length ? (
            <p className="mt-2 text-sm text-red-600" id="tldr-error">
              {descriptionError}
            </p>
          ) : null}
        </div>

        <div className="py-3 bg-gray-50">
          <button
            disabled={!isFormValid}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 disabled:bg-sky-300 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            onClick={(evt) => handlePreviewToggle(evt)}
          >
            Preview
          </button>
        </div>
      </form>
    </div>
  );
};

export default IdeaForm;
