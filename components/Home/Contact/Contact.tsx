import Image from "next/image"
import ContactImg from "../../../src/app/images/image (1).png"

export default function Contact() {
    return (
        <div id="contact" className='py-20 scroll-mt-24'>
            <h1 className="text-red-500 dark:text-red-300 font-medium text-center">
                Our Contact Information
            </h1>
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-200 mt-4 font-bold tracking-wider">
                Join Our Workplace Around The World
            </h1>
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="0"  className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
                <Image src={ContactImg} alt="img" width={900} height={900} className="mx-auto mt-16" />
                <div className="mt-16">
                    <h1 className="text-xl font-semibold">Send Message</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 ">
                        <input type="Email"
                            placeholder="Your Email" className="border-2 border-gray-200 px-4 outline-none py-3 rounded-full" />
                        <input type="text"
                            placeholder="Phone Number" className="border-2 border-gray-200 px-4 outline-none py-3 rounded-full" />
                        <input type="text"
                            placeholder="Website" className="border-2 border-gray-200 px-4 outline-none py-3 rounded-full" />
                    </div>
                    <textarea rows={9}
                        placeholder="Your Message"
                        className="mt-10 w-full border-2 outline-none border-gray-300 px-4 py-3 rounded-lg">
                    </textarea>
                    <button className="mt-10 text-white rounded-full px-14 py-4 cursor-pointer bg-pink-600 hover:bg-pink-900 transition-all">Submit Now</button>
                </div>
            </div>
        </div>
    )
}
