import Link from "next/link";
import NavLink from "../../../constant/constant";
import { CgClose } from "react-icons/cg";
type props = {
  showNav: boolean;
  closeNav: () => void;
};
export default function MobileNav({ closeNav, showNav }: props) {
  const sideBarOpenClose = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      <div
        className={`fixed inset-0 ${sideBarOpenClose} transform transition-all duration-500 x-102 bg-black opacity-70 w-full h-screen`}
      ></div>
      <div
        className={`text-white fixed ${sideBarOpenClose} justify-center flex flex-col h-full transform transition-all duration-500 delay-300 lg:hidden  w-[80%] sm:w-[60%] bg-blue-900 space-y-6 z-1050`}
      >
        {NavLink.map((link) => (
          <Link key={link.id} href={link.path} onClick={closeNav}>
            <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pl-1 border-white sm:text-[30px]">
              {link.name}
            </p>
          </Link>
        ))}
        <CgClose
          onClick={closeNav}
          className="absolute top-2 right-2 sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
}
