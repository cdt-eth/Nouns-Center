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
  formErrors,
}) => {
  const formNoErrorCls =
    'focus:ring-indigo-500 focus:border-indigo-500 border-gray-300';
  const formErrorCls =
    'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500';

  return (
    <div className="mt-5">
      <form>
        <label
          htmlFor="title"
          className="text-nouns block text-xl font-md text-gray-700"
        >
          Title
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="title"
            className={clsx(
              'text-nouns p-6 text-2xl shadow-sm block w-full placeholder:text-xl rounded-xl',
              formErrors.title ? formErrorCls : formNoErrorCls
            )}
            placeholder="Give your idea a name..."
            aria-describedby="title-description"
            onChange={(evt) => onTitleChange(evt)}
            value={title}
          />
          {formErrors.title ? (
            <p className="mt-2 text-sm text-red-600" id="title-error">
              title must be at least 8 characters.
            </p>
          ) : null}
        </div>

        <label
          htmlFor="tldr"
          className="text-nouns mt-6 block text-xl font-md text-gray-700"
        >
          tl;dr
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="tldr"
            className={clsx(
              'text-nouns p-6 text-2xl placeholder:text-xl shadow-sm block w-full rounded-xl',
              formErrors.tldr ? formErrorCls : formNoErrorCls
            )}
            onChange={(evt) => onTldrChange(evt)}
            placeholder="simply explain your idea in one sentence..."
            aria-describedby="tldr-description"
            value={tldr}
          />
          {formErrors.tldr ? (
            <p className="mt-2 text-sm text-red-600" id="tldr-error">
              tldr must be at least 8 characters.
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
          <label
            htmlFor="Idea Description"
            className="text-nouns block text-xl font-md text-gray-700"
          >
            Idea Description
          </label>
          <div className="mt-1">
            <textarea
              rows={15}
              name="description"
              className={clsx(
                'text-nouns whitespace-pre-line text-lg placeholder:text-xl shadow-sm block w-full rounded-xl',
                formErrors.description ? formErrorCls : formNoErrorCls
              )}
              onChange={(evt) => onDescriptionChange(evt)}
              value={description}
              placeholder="give a description of your idea!"
            />
          </div>
          {formErrors.description ? (
            <p className="mt-2 text-sm text-red-600" id="tldr-error">
              description must be at least 50 characters.
            </p>
          ) : null}
        </div>

        <div className="py-3 bg-gray-50">
          <button
            // disabled={!isFormValid}
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
