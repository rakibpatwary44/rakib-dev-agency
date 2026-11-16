import PriceCard from "./PriceCard";

export default function Price() {
  return (
    <div id="pricing" className="py-20 bg-[#effef6] dark:bg-gray-900">
      <div >
        <h1 className="text-red-500 dark:text-red-300 font-medium text-center">
          Pricing Table
        </h1>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-200 mt-4 font-bold tracking-wider">
          Live Chat 24/7 Support
        </h1>
      </div>
      <div className="w-[80%] mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="0">
          <PriceCard
            price="20"
            features="On-Page SEO Optimization
             Website Speed Optimization
             Keyword Research
             Google Search Console Setup"
            title="Optimized & SEO"
          />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <PriceCard
            price="50"
            features="Modern UI/UX Design
Responsive Website Design
Banner & Graphics Design
Custom Landing Page Design"
            title="Designing"
          />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <PriceCard
            price="60"
            features="Custom Website Development

Mobile-Friendly Development

Bug Fixing & Error Handling

Website Functionality Updates"
            title="Development"
          />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <PriceCard
            price="80"
            title="Supporting"
            features="24/7 Technical Support

Regular Website Maintenance

Security Monitoring

Monthly Backup & Updates"
          />
        </div>
      </div>
    </div>
  );
}
