

export default function Order() {
    return (
        <div id="booking" data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="0"  className="py-20 bg-[#effef6] dark:bg-gray-900 scroll-mt-20">
            <div  className="">
                <h1 className="text-red-500 dark:text-red-300 font-semibold text-center">Booking</h1>
                <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 mt-4 font-bold traking-wider">Book Service in Online</h1>
            </div>
            <p className="mt-6 text-gray-500d dark:text-gray-200 leading-8 text-center sm:w-[80%] lg:w-[60%] mx-auto">Discover a smarter and easier way to book your favorite services online. Our convenient booking platform allows you to explore available services, choose the right option, and schedule your appointments at a time that works best for you. Whether you need a quick service or want to plan ahead, we make the entire booking process simple, smooth, and hassle-free. Enjoy a seamless experience with just a few clicks and get the services you need without wasting your valuable time.</p>
            <div className="text-center mt-10">
                <button type="button" className="text-white rounded-full px-14 py-4 cursor-pointer bg-pink-500 hover:bg-pink-700 transition-all duration-200">Book Now</button>
            </div>
        </div>
    )
}
