import { XCircleIcon } from '@heroicons/react/solid';

interface AlertErrorProps {
  text: string;
}

export default function AlertError({ text }: AlertErrorProps) {
  return (
    <div className="rounded-md bg-red-50 p-4 mt-3">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">{text}</h3>
        </div>
      </div>
    </div>
  );
}
