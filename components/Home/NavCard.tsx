/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { getRandomNounPic } from '../../utils';

export const NavCard: React.FC<{
  text: string;
  path: string;
  i: any;
}> = ({ text, path, i }) => {
  return (
    <Link passHref href={`${path}`}>
      <a className="hover:scale-[1.02] transition" href={`${path}`}>
        <button className="text-nouns rounded-xl sm:cursor-pointer xs:h-32 xs:w-32 sm:h-60 sm:w-60 bg-gray-100 relative overflow-hidden m-auto">
          <div className="absolute bottom-0 w-full px-4 py-1 justify-center text-sm sm:text-lg flex items-end font-light text-white shadow-lg bg-black">
            {text}
          </div>
          <img className="object-cover w-full h-full" src={getRandomNounPic(i)} alt={text} />
        </button>
      </a>
    </Link>
  );
};

export default NavCard;
