import Image from "next/image";
import { FaQuoteRight, FaStar } from "react-icons/fa";

type Props = {
  user: {
    id: number;
    name: string;
    profession: string;
    userImage: string;
    review: string;
  };
};
export default function ClientReviewCard({ user }: Props) {
  return <div className="bg-gray-100 rounded-lg m-3 p-6 relative ">
    <FaQuoteRight className="w-8 h-8 absolute top-3 right-4 text-red-600 opacity-20" />
    <div className="mt-6 flex items-center">
      <FaStar className="w-4 h-4  text-yellow-600" />
      <FaStar className="w-4 h-4  text-yellow-600" />
      <FaStar className="w-4 h-4  text-yellow-600" />
      <FaStar className="w-4 h-4  text-yellow-600" />
    </div>
    <p className="font-semibold text-sm text-gray-600 mt-6 ">{user.review}</p>
    <div className="w-full h-[1.5px] bg-red-800 opacity-10 mt-5 mb-5"></div>
    <div className="flex items-center space-x-4">
      <Image src={user.userImage} alt="img" height={50} width={50} className="rounded-full" />
      <div className="">
        <h1 className="font-bold text-gray-800" >{user.name}</h1>
        <p className="text-sm text-gray-600">{user.profession}</p>
      </div>
    </div>
  </div>;
}
