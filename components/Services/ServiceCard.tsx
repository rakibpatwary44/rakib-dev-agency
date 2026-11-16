"use client";
import Tilt from "react-parallax-tilt";
import Image, { type StaticImageData } from "next/image";
import { FaArrowRight } from "react-icons/fa";

type ServiceCardProps = {
  title: string;
  subtitle: string;
  icon: StaticImageData;
};

export default function ServiceCard({
  title,
  icon,
  subtitle,
}: ServiceCardProps) {
  return (
    <Tilt className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
      <div className="w-20 h-20 text-white bg-blue-100 rounded-full mx-auto mt-5 shadow-md flex flex-col items-center justify-center">
        <Image
          src={icon}
          alt="icon"
          width={40}
          height={40}
          className="mb-6 h-16 w-16 object-contain "
        />
      </div>
      <h3 className="text-xl font-semibold text-center text-gray-900 mt-4 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-center text-sm mt-2 leading-6 text-gray-400 dark:text-gray-400 p-4">
        {subtitle}
      </p>
      <div className="text-center mx-auto justify-center flex items-center space-x-1 mb-4 text-gray-800 dark:text-gray-100 mt-4 font-semibold cursor-pointer hover:text-red-400 transition-all duration-200">
        <span>Learn More</span>
        <FaArrowRight />
      </div>
    </Tilt>
  );
}
