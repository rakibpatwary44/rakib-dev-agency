import Image from "next/image";

import image from "../../../src/app/images/image (12).png";

export default function About() {
  return (
    <div id="team" className="py-24 dark:bg-gray-900">
      <div className="mx-auto grid w-[80%] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* image section */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" className="">
          <Image src={image} alt="img" width={500} height={500} />
        </div>
        {/* Text section */}
        <div className=" " data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200" >
          <h1 className="text-purple-800 dark:text-purple-600 font-medium">
            About Us
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black dark:text-white mt-2">
            We are Leader in web Design
          </h1>
          <p className=" text-gray-900 dark:text-gray-200 text-xl leading-8 mt-8 font-semibold">
            We specialize in creating modern, responsive, and visually stunning
            websites that help businesses build a strong online presence and
            achieve their digital goals.
          </p>
          <p className=" text-gray-900 dark:text-gray-200 text-xl leading-8 mt-8 font-semibold">
            Our passion for design and technology drives us to deliver
            innovative web solutions, exceptional user experiences, and digital
            products that make every business stand out.
          </p>
          <div className="mt-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-pink-600">
                  51K
                </h1>
                <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-500">
                  Layout Done
                </p>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-pink-600">
                  10K
                </h1>
                <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-500">
                  Project Done
                </p>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-pink-600">
                  67
                </h1>
                <p className="text-center text-xs sm:text-sm md:text-base font-medium text-gray-500">
                  Get Award
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
