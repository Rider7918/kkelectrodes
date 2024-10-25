import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMapMarkedAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <>
        <div className="dark:dark:bg-gray-900" name="contact" data-aos="fade-up">
          <div className="flex w-full p-10 justify-center items-center">
            <div className="flex  flex-col md:flex-row md:space-x-60 md:-y-0 space-y-6 bg-violet-800 dark:bg-gray-950 w-full max-w-6xl p-8 sm:p-12 rounded-lg shadow-lg text-white">
              <div className="flex flex-col space-y-8 justify-between">
                <div>
                  <h1 className="font-bold text-4xl tracking-wide">
                    Contact Us
                  </h1>
                  <p className="pt-2 text-cyan-100 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, voluptate.
                  </p>
                </div>
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center space-x-2">
                    <FaPhone className="text-primary text-xl" />
                    <span className="ml-5">+91 921445244</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaEnvelope className="text-primary text-xl" />
                    <span className="ml-5">info@kkelectrodes.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaMapMarkedAlt className="text-primary text-xl" />
                    <span className="ml-5">Belgaum, Karnataka</span>
                  </div>
                </div>
                <div className="flex space-x-5 text-lg">
                  <div>
                    <a href="">
                      <FaFacebook />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <FaInstagram />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <FaLinkedin />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow-lg p-8 text-gray-600 md:w-90">
                  <form action="" className="flex flex-col space-y-4">
                    <div>
                      <label htmlFor="" className="text-sm">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="ring-1 ring-gray-300 w-full  rounded-md px-4 py-2 outline-none mt-2 focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="text-sm">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder=" Email Address"
                        className="ring-1 ring-gray-300 w-full  rounded-md px-4 py-2 outline-none mt-2 focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="text-sm">
                        Message
                      </label>
                      <textarea
                        type="message"
                        rows="4"
                        placeholder=" Message"
                        className="ring-1 ring-gray-300 w-full  rounded-md px-4 py-2 outline-none mt-2 focus:ring-2 focus:ring-sky-500"
                      ></textarea>
                    </div>
                    <button className="inline-block self-end btn-primary text-sm uppercase">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default ContactForm;
