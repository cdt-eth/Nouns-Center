import ReactMarkdown from 'react-markdown';

const IdeaPreview = ({
  handlePreviewToggle,
  handleSubmitIdea,
  title,
  description,
  isSubmitting,
}) => {
  return (
    <div className="mt-10">
      {/* <ReactMarkdown className="text-2xl">{title}</ReactMarkdown>
          <ReactMarkdown className="mt-5 text-2xl">{tldr}</ReactMarkdown> */}

      <div className="pb-3 border-b border-gray-200 sm:items-center">
        <h3 className="text-2xl pb-3 leading-6 font-medium text-gray-900 text-nouns">Title</h3>
        <div className="text-xl text-gray-700 break-words">{title}</div>
      </div>

      {/* <div className="mt-3 pb-3 border-b border-gray-200 sm:items-center">
        <h3 className="text-nouns text-lg leading-6 font-medium text-gray-900">
          tldr
        </h3>
        <div className="text-xl text-gray-700">{tldr}</div>
      </div> */}

      <div className="mt-8 pb-3 border-b border-gray-200 sm:items-center">
        <h3 className="text-2xl pb-3 leading-6 font-medium text-gray-900 text-nouns">
          Description
        </h3>
        <ReactMarkdown className="mt-5 text-lg break-words">{description}</ReactMarkdown>
      </div>

      <div className="flex">
        <div className="py-3 bg-gray-50">
          <button
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 disabled:bg-sky-300 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            onClick={evt => handlePreviewToggle(evt)}
          >
            Go Back
          </button>
        </div>

        <div className="py-3 bg-gray-50">
          <button
            className="inline-flex justify-center ml-3 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 disabled:bg-sky-300 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            onClick={evt => handleSubmitIdea(evt)}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Sign and Submit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdeaPreview;
