import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/Hero";
import OverviewCounter from "./components/overview-counter/OverviewCounter";
import BannerDetails from "./components/bannerDetails/BannerDetails";
import SimpleBanner from "./components/simpleBanner/SimpleBanner";
import Blogs from "./components/blogs/blogs";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import AOS  from "aos";
import "aos/dist/aos.css";
import AboutUs from "./components/aboutus/AboutUs";
import Products from "./components/product/Products";
import ContactForm from "./components/contactform/ContactForm";


function App() {
  useEffect(()=>{
    AOS.init(
      {
        offset: 100,
        duration: 500,
        easing:"ease-in-out",
        delay:100,

      }
    );
    AOS.refresh();
  },[]);
  return (
    <> 
    <div className="dark:bg-gray-900 bg-white">
    <Navbar />
      <Hero />
      <OverviewCounter />
      <AboutUs />
      <Products />
      {/* <BannerDetails />
      <BannerDetails reverse={true} /> */}
      {/* <SimpleBanner /> */}
      {/* <Blogs/> */}
      <ContactForm />
      <Footer />
    </div>
      
    </>
  );
}

export default App;
