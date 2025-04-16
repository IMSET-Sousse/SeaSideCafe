'use client'
import { useEffect } from "react";
import Banner from "./_components/Banner";
import Explore from "./_components/Explore";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Testimonials from "./_components/Testimonials";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: true,
  })
  })
    
  return (
    <div>
      <Header />
      <Banner />
      <Explore />
      <Testimonials />
      <Footer />
    </div>
  );
}
 