import React, { useEffect, useState } from "react";
import { BiPhoneCall, BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link, Element } from "react-scroll";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [showMenu, setShowMenu] = useState(false);

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[99] bg-navbar text-white border-b-[1px] border-primary/50">
        <nav className="container flex items-center justify-between h-[70px] py-2 px-2">
          {/* Logo Section */}
          <div className="text-2xl md:text-3xl text-white">
            <a href="#">
              kk
              <span className="inline-block font-bold text-primary">
                electrodes
              </span>
            </a>
          </div>
          {/* Desktop Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li className="group relative cursor-pointer">
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
                {/* <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span> */}

                {/* dropdown section */}
                {/* <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-white shadow-md p-2 text-black rounded-md group-hover:block">
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-violet-200">Service</li>
                    <li className="p-2 hover:bg-violet-200">About Us</li>
                    <li className="p-2 hover:bg-violet-200">Privacy Policy</li>
                  </ul>
                </div> */}
              </li>
              <li className="group cursor-pointer">
                <Link to="about" smooth={true} duration={500} offset={-80}>
                  About
                </Link>
                {/* dropdown full width section */}
                {/* <div className="absolute left-0 z-[99999] hidden w-full rounded-b-3xl bg-white p-2 text-black shadow-md group-hover:block">
                  <div className="grid grid-cols-3 gap-5">
                    <div className="overflow-hidden">
                      <img
                        src="https://picsum.photos/200"
                        alt="not found"
                        className="max-h-[300px] w-full rounded-b-3xl object-fill"
                      />
                    </div>
                    <div className="col-span-2">
                      <h1 className="text-2xl font-semibold pb-3">
                        Best Selling
                      </h1>
                      <p className="text-sm text-slate-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga ducimus reprehenderit nemo modi aliquid omnis,
                        commodi iure sed quaerat earum tenetur odio. Eligendi
                        voluptate tempore tempora quasi eaque distinctio
                        quisquam.
                        <div className="grid grid-cols-3 mt-4">
                          <div>
                            <h1 className="pb-1 text-xl font-semibold">
                              Development
                            </h1>
                            <ul className="space-y-2">
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Web Developmemt
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Mobile Development
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Software Development
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h1 className="pb-1 text-xl font-semibold">
                              Development
                            </h1>
                            <ul className="space-y-2">
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Web Developmemt
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Mobile Development
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Software Development
                              </li>
                            </ul>
                          </div>
                          <div>
                            <img
                              src="https://picsum.photos/120"
                              alt="not found"
                            />
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div> */}
              </li>
              <li className="group cursor-pointer">
                <Link to="products" smooth={true} duration={500} offset={-50}>
                  Products
                </Link>
              </li>
              <li className="group cursor-pointer">
                <Link to="contact" smooth={true} duration={500} offset={-150}>
                  Contact
                </Link>
                {/* <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span> */}
              </li>
              {/* <li>
                <div className="flex items-center gap-2">
                  <div>
                    <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2 text-white bg-primary hover:bg-primary/90" />
                  </div>
                  <div>
                    <p>Call us on </p>

                    <p>
                      <a href="tel:+919534343433">+91 9534343433</a>
                    </p>
                  </div>
                </div>
              </li> */}
              {/* light and dark mode switcher */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl"
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </div>
          {/* Mobile Menu Header */}
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                className="text-2xl"
                onClick={() => setTheme("light")}
              />
            ) : (
              <BiSolidMoon
                className="text-2xl"
                onClick={() => setTheme("dark")}
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all "
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all "
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      {/* Mobile Menu Section */}
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
