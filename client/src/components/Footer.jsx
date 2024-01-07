import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 py-5  mt-10 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">SnapShop</h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-green-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaFacebook size={30} />
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaInstagram size={30} />
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaTwitter size={30} />
              </button>
              <button
                className="bg-white text-yellow-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaWhatsapp size={30} />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-xl font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      About Us
                    </p>
                  </li>
                  <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      Blog
                    </p>
                  </li>
                  <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      Github
                    </p>
                  </li>
                  <li>
                    <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      Free Products
                    </p>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-xl font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span>
              <p>SnapShop</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
