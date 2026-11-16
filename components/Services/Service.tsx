import ServiceCard from "./ServiceCard";
import serviceIcon from "../../src/app/images/wevice (1).png";
import serviceIcon1 from "../../src/app/images/wevice (2).png";
import serviceIcon2 from "../../src/app/images/wevice (3).png";
import serviceIcon3 from "../../src/app/images/wevice (4).png";
import serviceIcon4 from "../../src/app/images/wevice (5).png";
import serviceIcon5 from "../../src/app/images/wevice (6).png";

export default function Service() {
  return (
    <div id="services" className="py-20 bg-[#eff3f6] dark:bg-gray-900">
      <div >
        <h1 className="text-red-500 dark:text-red-300 font-medium text-center">
          Our Services
        </h1>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-200 mt-4 font-bold tracking-wider">
          Provided Feature
        </h1>
        <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="0">
            <ServiceCard
              title="Customer Support"
              subtitle="Create modern, responsive designs and powerful digital solutions for your business."
              icon={serviceIcon}
            />
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
            <ServiceCard
              title="Design and Development"
              subtitle="Manage your account easily with secure and personalized settings."
              icon={serviceIcon1}
            />
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
            <ServiceCard
              title="Notification Manage"
              subtitle="Stay updated with instant notifications and important alerts."
              icon={serviceIcon4}
            />
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
            <ServiceCard
              title="Email Marketing"
              subtitle="Get reliable assistance and solutions whenever you need help."
              icon={serviceIcon3}
            />
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
            <ServiceCard
              title="Customer Support"
              subtitle="Reach your audience with effective email campaigns and smart strategies."
              icon={serviceIcon2}
            />
          </div>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="500">
            <ServiceCard
              title="Account Setting"
              subtitle="Transform your ideas into successful digital experiences with expert solutions."
              icon={serviceIcon5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
