import { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import clsx from 'classnames';

import { DESCRIPTION_MIN_LENGTH, TITLE_MIN_LENGTH } from '../../pages/ideas/create';

const IdeaForm = ({
  title,
  description,
  handlePreviewToggle,
  onTitleChange,
  onDescriptionChange,
}) => {
  const formNoErrorCls = 'focus:ring-indigo-500 focus:border-indigo-500 border-gray-300';
  const formErrorCls =
    'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500';

  const [titleError, setTitleError] = useState<string>('');
  const [descriptionError, setDescriptionError] = useState<string>('');

  const onTitleBlur = () => {
    if (0 < title?.length && title?.length < 8) {
      setTitleError('Title should be at least 8 characters');
    } else {
      setTitleError('');
    }
  };

  const onDescriptionBlur = () => {
    if (0 < description?.length && description?.length < DESCRIPTION_MIN_LENGTH) {
      setDescriptionError('Description should be at least 35 charcters');
    } else {
      setDescriptionError('');
    }
  };

  return (
    <div className="mt-5">
      <div className="rounded-md bg-blue-100 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0 self-center">
            <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
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
                  className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600 hover:font-semibold	 hover:underline transition"
                >
                  Link to syntax <span aria-hidden="true">&rarr;</span>
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <form>
        <div className="flex justify-between">
          <label htmlFor="title" className="text-nouns block text-2xl font-md text-gray-700">
            Title
          </label>
          <span>{title.length}/60</span>
        </div>
        <div className="mt-1 mb-8">
          <input
            type="text"
            name="title"
            maxLength={60}
            className={clsx(
              'text-nouns p-4 text-lg shadow-sm block w-full placeholder:text-md rounded-xl placeholder:italic placeholder:text-black/40',
              titleError?.length ? formErrorCls : formNoErrorCls,
            )}
            placeholder="What's your idea"
            aria-describedby="title-description"
            onChange={evt => onTitleChange(evt)}
            onBlur={onTitleBlur}
            value={title}
          />
          {titleError?.length ? (
            <p className="mt-2 text-sm text-red-600" id="title-error">
              {titleError}
            </p>
          ) : null}
        </div>

        {/* <div className="flex justify-between mt-6">
          <label
            htmlFor="tldr"
            className="text-nouns block text-2xl font-md text-gray-700"
          >
            TLDR
          </label>
          <span>{tldr.length}/80</span>
        </div>
        <div className="mt-1">
          <input
            type="text"
            name="tldr"
            className={clsx(
              "text-nouns p-4 text-lg placeholder:text-md shadow-sm block w-full rounded-xl placeholder:italic placeholder:text-black/40 ",
              tldrError?.length ? formErrorCls : formNoErrorCls
            )}
            onChange={(evt) => onTldrChange(evt)}
            onBlur={onTldrBlur}
            maxLength={80}
            placeholder="Explain your idea in one sentence"
            aria-describedby="tldr-description"
            value={tldr}
          />
          {tldrError?.length ? (
            <p className="mt-2 text-sm text-red-600" id="tldr-error">
              {tldrError}
            </p>
          ) : null}
        </div> */}

        <div className="mt-6">
          <div className="flex justify-between">
            <label
              htmlFor="Idea Description"
              className="text-nouns block text-2xl font-md text-gray-700"
            >
              Description
            </label>
            <span>{description.length}</span>
          </div>
          <div className="mt-1">
            <textarea
              rows={8}
              name="description"
              className={clsx(
                'text-nouns whitespace-pre-line text-lg placeholder:text-md shadow-sm block w-full rounded-xl p-4  placeholder:italic placeholder:text-black/40 mb-2',
                descriptionError?.length ? formErrorCls : formNoErrorCls,
              )}
              onChange={evt => onDescriptionChange(evt)}
              onBlur={onDescriptionBlur}
              value={description}
              placeholder="Describe your idea"
            />
          </div>
          {descriptionError?.length ? (
            <p className="mt-2 text-sm text-red-600" id="description-error">
              {descriptionError}
            </p>
          ) : null}
        </div>

        <div className="py-3 bg-gray-50">
          <button
            disabled={
              description?.length < DESCRIPTION_MIN_LENGTH || title?.length < TITLE_MIN_LENGTH
            }
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 disabled:bg-sky-300 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            onClick={evt => handlePreviewToggle(evt)}
          >
            Preview
          </button>
        </div>
      </form>
    </div>
  );
};

export default IdeaForm;
