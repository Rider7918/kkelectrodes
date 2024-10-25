import React from "react";
import { FaTwitter } from "react-icons/fa";

const Products = () => {
  return (
    <>
      <div className="dark:bg-gray-950 dark:text-white bg-gray-50" name="products">
        <section data-aos="fade-up" className="p-7 container pb-10 py-5">
          <h1 className="m-8 text-center text-4xl font-bold">PRODUCTS</h1>
          <h1 className="text-2xl md:text-3xl text-center">
            Brand name of our product is{" "}
            <span className="inline-block font-extrabold text-primary">
              SkyTech.
            </span>
          </h1>
          <h1 className="text-2xl py-2">SkyTech Welding Electrodes</h1>
          <p className="text-justify py-1 text-xl">
            Manufactured by KK Electrodes Technology. SkyTech Welding Electrodes
            ensures highest quality where International Standards are
            maintained. At each stage from selecting raw materials to obtaining
            finish to the end product is ensured by the team of highly qualified
            technicians. SkyTech Welding Electrodes produces high quality and
            gives top class performance with very reasonable price to satisfy
            Customers. These Electrodes are basically used as SMAW/MMAC
          </p>
          <p className="text-justify py-2 text-xl">
            Shielded metal arc welding / Manual metal arc welding process uses a
            consumable electrode coated in flux to lay the weld. These
            Electrodes are suitable for Welding ship hulls, tanks, steel
            furniture, structures, wagons, truck bodies etc.
          </p>

          <div className=" p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 text-center lg:text-left flex items-center justify-center lg:justify-start">
                <span className="mr-2">✔</span> Properties
              </h2>
              <p className="mb-4 text-center text-xl lg:text-left">
                ➔ These are all position Electrodes coated with flux (medium
                coated RUTILE) and can be used with AC and DC Currents.
              </p>
              <p className="text-center lg:text-left text-xl">
                ➔ It gives a quiet and stable arc, steady fusion rate, least
                spatter, smooth weld bead, easy removal of slag with excellent
                welding quality.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-1">
              <img
                src="https://picsum.photos/800/500"
                alt="not found"
                className="mx-auto w-full p-4 md:max-w-[500px]"
              />
            </div>
          </div>

          <div className=" p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text Section */}
            <div className="flex-1 ">
              <h2 className="text-2xl font-bold mb-4 text-center lg:text-left flex items-center justify-center lg:justify-start">
                <span className="mr-2">✔</span> Specification
              </h2>
              <p className="p-4  text-center text-xl lg:text-left">
                ➔ AWS/SFA – 5.1E – 6013, BS-E 4311, IS – ER 4211
              </p>
              <p className="p-4 text-center lg:text-left text-xl">
                ➔ Sizes and SWG(Standard wire guage)
              </p>
              <div className=" dark:bg-slate-950 dark:text-white overflow-x-auto bg-gray-100 rounded-lg shadow-lg mt-4">
                <table className="min-w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-gray-200  dark:bg-slate-950 dark:text-white">
                      <th className="px-4 py-2 border text-left font-semibold">
                        SIZES (mm)
                      </th>
                      <th className="px-4 py-2 border text-left font-semibold">
                        SWG (Standard wire gauge)
                      </th>
                      <th className="px-4 py-2 border text-left font-semibold">
                        Number of Sticks per Packet
                      </th>
                      <th className="px-4 py-2 border text-left font-semibold">
                        Number of Sticks per Case (8 packets = 1 Case)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border">2.50 dia X 350L</td>
                      <td className="px-4 py-2 border">12</td>
                      <td className="px-4 py-2 border">125</td>
                      <td className="px-4 py-2 border">125 X 8 = 1,000</td>
                    </tr>
                    <tr >
                      <td className="px-4 py-2 border">3.15 dia X 350L</td>
                      <td className="px-4 py-2 border">10</td>
                      <td className="px-4 py-2 border">90</td>
                      <td className="px-4 py-2 border">90 X 8 = 720</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border">4.00 dia X 450L</td>
                      <td className="px-4 py-2 border">08</td>
                      <td className="px-4 py-2 border">60</td>
                      <td className="px-4 py-2 border">60 X 8 = 480</td>
                    </tr>
                    <tr >
                      <td className="px-4 py-2 border">5.00 dia X 450L</td>
                      <td className="px-4 py-2 border">06</td>
                      <td className="px-4 py-2 border">40</td>
                      <td className="px-4 py-2 border">40 X 8 = 320</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1">
              <img
                src="https://picsum.photos/800/500"
                alt="not found"
                className="mx-auto w-full p-4 md:max-w-[500px]"
              />
            </div>
          </div>
          <div className=" p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 text-center lg:text-left flex items-center justify-center lg:justify-start">
                <span className="mr-2">✔</span> Identification
              </h2>
              <p className="mb-4 text-center text-xl lg:text-left">
                ➔ E6013 is the coding for a flux-coated mild steel electrode.
              </p>
              <p className="mb-4 text-center lg:text-left text-xl">
                ➔ “E” indicates flux covered electrode.
              </p>
              <p className="mb-4 text-center lg:text-left text-xl">
                ➔ The first two digit “60” indicates Minimum Tensile strength of
                mild steel /base metal.
              </p>
              <p className="mb-4 text-center lg:text-left text-xl">
                ➔ Third digit “1” indicates All position of welding i.e. flat,
                vertical, horizontal and overhead.
              </p>
              <p className="text-center lg:text-left text-xl">
                ➔ The last digit “3” indicates that it has a rutile potassium
                based flux coating and it can be used with any current condition
                (AC or DC straight and reverse polarity).
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-1">
              <img
                src="https://picsum.photos/800/500"
                alt="not found"
                className="mx-auto w-full p-4 md:max-w-[500px]"
              />
            </div>
          </div>

          <div className=" p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 text-center lg:text-left flex items-center justify-center lg:justify-start">
                <span className="mr-2">✔</span> Capacity
              </h2>
              <p className="mb-4 text-center text-xl lg:text-left">
                ➔ The Unit is set up to carry out the activity of mfg. of Welding electrodes of 2MT/day.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-1">
              <img
                src="https://picsum.photos/800/500"
                alt="not found"
                className="mx-auto w-full p-4 md:max-w-[500px]"
              />
            </div>
          </div>

        </section>
      </div>
    </>
  );
};

export default Products;
