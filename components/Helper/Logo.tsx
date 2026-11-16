import Link from "next/link";
import { CgWebsite } from "react-icons/cg";


export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <CgWebsite className="w-5 h-5 text-black"/>
        </div>
      <Link href="/" className="text-xl hidden sm:block md:text-2xl text-white font-bold">
        Rakib Dev
      </Link>
    </div>
  )
}
