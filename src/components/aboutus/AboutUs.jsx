import React from "react";
import {
  FaCog,
  FaFacebook,
  FaHandshake,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaServicestack,
  FaThumbsUp,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      <div name="about" className="dark:bg-gray-900 dark:text-white ">
        <section data-aos="fade-up" className="p-7 container mb-10 py-8">
          <h1 className="mb-8  py-2 text-center text-4xl font-bold">
            ABOUT US
          </h1>
          <h1 className="text-2xl md:text-2xl  text-justify">
            <span className="inline-block font-bold text-primary ">
              M/S. KK ELECTRODES TECHNOLOGY
            </span>{" "}
            is a Small Scale Industry and a newly launched Electrode company in
            India. We are private company working with passion to improve
            quality of welding by introducing Electrodes.The Company is a
            specialist in manufacturing high quality MILD STEEL E6013 WELDING
            ELECTRODES (Shielded Metal Arc Welding) under the brand name{" "}
            <span className="inline-block font-bold text-primary">
              SkyTech.
            </span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-12">
            <div className="p-4 shadow-sm transition-all duration-500 hover:shadow-md dark:bg-slate-950 dark:text-white">
              <div className="flex justify-center">
                <FaCog className="text-7xl text-primary duration-200 hover:scale-110" />
              </div>
              <div className="space-y-2 py-3 text-center">
                <h1 className="line-clamp-2 font-bold text-2xl">
                  Excellent Service
                </h1>
                <p className="line-clamp-7 text-justify">
                  We have a team delivering services by providing welding
                  electrodes required for arc welding purposes. We will consider
                  the cumulative experience of our customers, what they think
                  and feel, and what we can do to make it better with passion,
                  patience and persistence.
                </p>
              </div>
            </div>
            <div className="p-4 shadow-sm transition-all duration-500 hover:shadow-md dark:bg-slate-950 dark:text-white">
              <div className="flex justify-center">
                <FaThumbsUp className="text-7xl text-primary duration-200 hover:scale-110" />
              </div>
              <div className="space-y-2 py-3 text-center">
                <h1 className="line-clamp-2 font-bold text-2xl">
                  Superior Quality
                </h1>
                <p className="line-clamp-7 text-justify">
                  The main aim of the company is to provide best quality
                  electrodes. Delighting Customers with our products is the key
                  factor for us.
                </p>
              </div>
            </div>
            <div className="p-4 shadow-sm transition-all duration-500 hover:shadow-md dark:bg-slate-950 dark:text-white">
              <div className="flex justify-center">
                <FaHandshake className="text-7xl text-primary duration-200 hover:scale-110" />
              </div>
              <div className="space-y-2 py-3 text-center">
                <h1 className="line-clamp-2 font-bold text-2xl">
                  Customer Centric
                </h1>
                <p className="line-clamp-7 text-justify">
                  We study the customer needs and make necessary recommendations
                  to improve services and provide the best quality electrodes.
                  The company has qualified staff to achieve this. Cost
                  reduction in each area of welding operation is also taken
                  care.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
