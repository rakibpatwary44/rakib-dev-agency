type props = {
  title: string;
  price: string;
  features: string;
};
export default function PriceCard({ title, price, features }: props) {
  const featureList = features
    .split("\n")
    .map((feature) => feature.trim())
    .filter(Boolean);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4 text-center tracking-wider">
        {title}
      </h1>
      <p className="mt-4 text-gray-500 dark:text-gray-300 mb-6 text-center">
        Monthly package
      </p>
      <h1 className="font-bold text-center text-gray-500 dark:text-gray-100">
        <span className="text-4xl">${price}</span>/Month
      </h1>
      <div className="mt-8 space-y-4 text-sm text-gray-500 tracking-wider dark:text-gray-100">
        {featureList.map((feature, index) => (
          <p key={feature} className="text-center">
            {feature}
          </p>
        ))}
      </div>
      <div className="mt-6 mb-4 text-center">
        <button className="px-8 py-3 bg-pink-500 hover:bg-pink-700 text-white font-semibold cursor-pointer rounded-full transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}
