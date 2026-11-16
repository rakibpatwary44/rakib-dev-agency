"use client"
import About from "./About/About";
import Hero from "./Hero/Hero";
import Service from "./../Services/Service";
import WhyChoose from "./WhyChoose/WhyChoose";
import Price from "./Price/Price";
import ClientReview from "../ClientReview/ClientReview";
import Order from "./Order/Order";
import Contact from "./Contact/Contact";

import 'aos/dist/aos.css';
import { useEffect } from "react";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: "top-bottom"
      })
    }
    initAOS();
  }, [])
  return (
    <div>
      <h1 className="overflow-hidden "></h1>
      <Hero />
      <About />
      <Service />
      <WhyChoose />
      <Price />
      <ClientReview />
      <Order />
      <Contact />

    </div>
  );
}
