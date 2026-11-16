import { FaFacebookF, FaInstagram, FaPaperPlane, FaPhone, FaYoutube } from "react-icons/fa";
import Logo from "../../Helper/Logo";
import { IoMailOpen } from "react-icons/io5";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Image from "next/image";
import FooterImg from "../../../src/app/images/image (3).png"
import { BiCalendar } from "react-icons/bi";


export default function Footer() {
    return (
        <div className="pt-16 bg-blue-900 dark:bg-gray-900">
            <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="">
                    <Logo />
                    <p className="text-sm mt-5">Discover our services, explore features, and enjoy a seamless experience with our dedicated team.</p>
                    <div className="flex items-center space-x-4 mt-6">
                        <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-blue-700 transition-all duration-300">
                            <FaFacebookF className="w-6 h-6 text-white" />
                        </div>
                        <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-pink-700 transition-all duration-300">
                            <FaInstagram className="w-6 h-6 text-white" />
                        </div>
                        <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-red-700 transition-all duration-300">
                            <FaYoutube className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </div>
                {/*2nd  */}
                <div className="lg:mx-auto">
                    <h1 className="text-lg font-bold text-white">Address</h1>
                    <div className="mt-8">
                        <div className="flex items-center space-x-5 mt-5 mb-5">
                            <FaPaperPlane className="w-5 h-5 text-white" />
                            <p className="font-medium text-sm text-white">22/G, Habib Villa, <br /> Dhakeshwari Rd, Dhaka 1211</p>
                        </div>
                        <div className="flex items-center space-x-5 mt-5 mb-5">
                            <FaPhone className="w-5 h-5 text-white" />
                            <p className="font-medium text-sm text-white">+8801516-538362</p>
                        </div>
                        <div className="flex items-center space-x-5 mt-5 mb-5">
                            <IoMailOpen className="w-5 h-5 text-white" />
                            <p className="font-medium text-sm text-white">codewithrakib1@gamail.com</p>
                        </div>
                    </div>
                </div>
                {/**3th */}
                <div className="lg:mx-auto">
                    <h1 className="text-lg font-bold text-white">More Services</h1>
                    <div className="mt-8">
                        <div className="flex items-center mb-2">
                            <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
                            <p className="text-sm font-medium text-white">UI Design</p>
                        </div>
                        <div className="flex items-center mb-2">
                            <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
                            <p className="text-sm font-medium text-white">UX Design</p>
                        </div>
                        <div className="flex items-center mb-2">
                            <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
                            <p className="text-sm font-medium text-white">Web App</p>
                        </div>
                        <div className="flex items-center mb-2">
                            <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
                            <p className="text-sm font-medium text-white">Digital Marketing</p>
                        </div>
                        <div className="flex items-center mb-2">
                            <MdKeyboardDoubleArrowRight className="w-7 h-7 text-white" />
                            <p className="text-sm font-medium text-white">Video Editing</p>
                        </div>
                    </div>
                </div>
                {/*4th */}
                <div className="lg:mx-auto">
                    <h1 className="text-lg font-bold text-white">Newsletter</h1>
                    <div className="mt-8 ">
                        <p className="font-medium text-sm text-white">
                            It is a long established fact that a reader will be distracted
                        </p>
                        <div className="mt-5 flex items-center space-x-4">
                            <Image src={FooterImg} alt="img" width={80} height={25} />
                            <div className="flex-1">
                                <div className="flex items-center">
                                    <BiCalendar className="w-6 h-5 text-amber-400 mr-3" />
                                    <p className="text-white text-sm font-semibold">25 October, 2026</p>
                                </div>
                                <p className="mt-3  text-white font-semibold">The standard chunk of lorem Ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t-2 w-[88%] mx-auto border-gray-800 mt-8">
                <p className="text-sm mt-8 mb-4 text-gray-500">
                    © RakibDev , 2027. All Rights Reserved.
                </p>
            </div>
        </div>
    )
}
