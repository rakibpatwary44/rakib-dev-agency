import { BiSupport } from "react-icons/bi";
import { FaHammer, FaRocket } from "react-icons/fa";
import WhyChooseImg from "../../../src/app/images/image (2).png"
import Image from "next/image";

export default function () {
  return (
    <div id="whychoose" className="py-20">
      <div className="w-[80%] mx-auto grid gird-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="0">
          <h1 className="text-red-600 dark:text-red-300 font-medium">
            Why Choose
          </h1>
          <p className="text-2xl md:text-4xl lg:text-5xl leading-8 md:leading-12 lg:leading-15 text-gray-900 dark:text-gray-100 mt-4 font-bold tracking-wider">
            Specialist in advising clients on financial challenges
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-200 leading-7">
            Corporate headquarter is the part of a corporate structure that
            deals with important tasks such as strategic planning
          </p>
          <div className="mt-8 ">
            {/* fast */}
            <div className="flex items-center space-x-6 mb-10">
              <div className="flex items-center justify-center flex-col w-18 h-18 rounded-full bg-red-600 dark:bg-pink-500">
                <FaRocket className="text-white w-6 h-6" />
              </div>
              <div className="flex-1">
                <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Fast Working Process
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-300 leading-6 lg:w-[85%]">
                  We deliver fast and efficient solutions with a professional approach, helping your business save time, improve productivity, and achieve success.
                </p>
              </div>
            </div>
            {/** 2 nd */}
            <div className="flex items-center space-x-6 mb-10">
              <div className="flex items-center justify-center flex-col w-18 h-18 rounded-full bg-blue-600 dark:bg-indigo-500">
                <FaHammer className="text-white w-6 h-6" />
              </div>
              <div className="flex-1">
                <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Dedicated Team
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-300 leading-6 lg:w-[85%]">
                  Our experienced and dedicated team works together to provide exceptional services, innovative ideas, and reliable solutions for your business growth.
                </p>
              </div>
            </div>
            {/* 3th */}
            <div className="flex items-center space-x-6 mb-10">
              <div className="flex items-center justify-center flex-col w-18 h-18 rounded-full bg-green-600 dark:bg-yellow-400">
                <BiSupport className="text-white w-6 h-6" />
              </div>
              <div className="flex-1">
                <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  24/7 Hours Support
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-300 leading-6 lg:w-[85%]">
                  Our support team is always available to assist you, resolve challenges quickly, and ensure your business operations run smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* img section */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <Image src={WhyChooseImg} alt="img" width={1000} height={1000} />
        </div>
      </div>
    </div>
  );
}
