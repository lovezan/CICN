import React from "react";
import { FaCreditCard, FaCashRegister, FaMapMarkerAlt } from "react-icons/fa"; // Importing icons
import pmu2 from "../../assets/pmu2.jpeg";
import images from "../../assets/oa1.jpg";
import download from "../../assets/ou2.jpeg";

const Registration = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-justify">
        <center>
          <h1 className="text-3xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">
            Registration
          </h1>
        </center>
        <p className="text-base md:text-lg text-gray-700 mb-4 ">
        The fee structure is as per the table below.
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-4 ">
          <strong>
          Note that only one paper
          and one presenter are covered by an author registration. Authors with
          multiple papers need to register extra papers as per the chart below.
          However, if a single author is presenting multiple papers, some
          relaxation in registration fees will be given. This is not applicable
          for students. If more than one author is coming for the presentation,
          additional amounts for attendees must be credited.{" "}
         
          </strong>
        </p>
         
        <strong className="text-base md:text-lg text-gray-700 mb-4 " >
            Normal paper length must be limited to 5 pages and each extra page
            costs will be Rs 800 per page (for indian) and $20 per page (others)
          </strong>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white text-gray-800 rounded-lg shadow-md border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-4 text-left">Category</th>
                <th className="py-3 px-4 text-center">Indian Author</th>
                <th className="py-3 px-4 text-center">Others</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="py-3 px-4 border-b">IEEE Member</td>
                <td className="py-3 px-4 border-b text-center">Rs 5000</td>
                <td className="py-3 px-4 border-b text-center">$200</td>
              </tr>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="py-3 px-4 border-b">Non-IEEE Member</td>
                <td className="py-3 px-4 border-b text-center">Rs 6000</td>
                <td className="py-3 px-4 border-b text-center">$250</td>
              </tr>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="py-3 px-4 border-b">Ph.D. Students</td>
                <td className="py-3 px-4 border-b text-center">Rs 4000</td>
                <td className="py-3 px-4 border-b text-center">$150</td>
              </tr>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="py-3 px-4 border-b">Students UG/PG</td>
                <td className="py-3 px-4 border-b text-center">Rs 3500</td>
                <td className="py-3 px-4 border-b text-center">$100</td>
              </tr>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="py-3 px-4 border-b">Institute Registration</td>
                <td className="py-3 px-4 border-b text-center">Rs 12000</td>
                <td className="py-3 px-4 border-b text-center">
                  $300 (Two persons)
                </td>
              </tr>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="py-3 px-4 border-b">
                  Attendance/Co-authors/Companion
                </td>
                <td className="py-3 px-4 border-b text-center">Rs 1000</td>
                <td className="py-3 px-4 border-b text-center">$100</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <p className="text-lg text-gray-800 mb-4">
            <strong>
              <u>Payment Modes:</u>
            </strong>
          </p>

          <div className="mb-6">
            <div className="flex items-center justify-center mb-2">
              <FaCreditCard className="text-2xl text-red-500 mr-2" />
              <p className="text-gray-700 mb-2">
                <strong>
                  <u>Payment by Credit Card/Debit Card/Internet Banking</u>
                </strong>{" "}
                (Bank charges as applicable)
              </p>
            </div>
            <a
              href="https://www.payumoney.com/paybypayumoney/#/26517"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
            >
              <strong>CLICK HERE to Pay</strong>
            </a>
            <div className="mt-4">
              <a
                href="https://www.payumoney.com/paybypayumoney/#/26517"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.payumoney.com//media/images/payby_payumoney/buttons/111.png"
                  alt="PayU"
                  className="mx-auto"
                />
              </a>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-center mb-2">
              <FaCashRegister className="text-2xl text-gray-700 mr-2" />
              <p className="text-gray-700 mb-4">
                <strong>
                  <u>Payment by NEFT / Cash (Indian Authors Only)</u>
                </strong>
                <br />
                <strong>Account No:</strong> 63025587900
                <br />
                <strong>Account Name:</strong> IEEE MP Section
                <br />
                <strong>Bank Name:</strong> State Bank of India (SBI)
                <br />
                <strong>Bank Address:</strong> IET DAVV, Khandwa Road, Indore
                452017, Madhya Pradesh
                <br />
                <strong>IFSC Code:</strong> SBIN0030470
                <br />
                <strong>SWIFT:</strong> SBININBB267
              </p>
            </div>
            <p className="text-gray-700 mb-2">
              <strong>
                <u>Payment by Other than Indian Authors</u>
              </strong>
              <br />
              Payment by PAYPAL:{" "}
              <a
                href="mailto:abhineeet@gmail.com"
                className="text-blue-500 hover:underline"
              >
                abhineeet@gmail.com
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* <img
                src={pmu2}
                alt="Image 1"
                className="w-44 h-32 object-cover rounded-lg shadow-md"
              /> */}
              <img
                src={images}
                alt="Image 2"
                className="w-44 h-32 object-cover rounded-lg shadow-md"
              />
              <img
                src={download}
                alt="Image 3"
                className="w-80 h-32 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
