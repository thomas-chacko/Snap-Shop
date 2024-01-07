import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaOpencart, FaSearch, FaUserFriends } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const cartArray = useSelector((state) => state.cartReducer);
  const [isLogin, setIsLogin] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  useEffect(() => {
    // check if the user is logged
    if (sessionStorage.getItem("user")) {
      setIsLogin(true);
    }
    // check is admin
    const adminAcces = JSON.parse(sessionStorage.getItem("user"));
    if (adminAcces && adminAcces.isAdmin === true) {
      setAdmin(true);
    }
  }, []);

  const toggleLogoutPopup = () => {
    setShowLogoutPopup(!showLogoutPopup);
  };

  // logout user
  const handleLogout = () => {
    const logout = window.confirm("Are you sure you want to log out");
    if (logout) {
      // Clear user data from sessionStorage
      sessionStorage.removeItem("user");
      setIsLogin(false);
      setAdmin(false);
    }
    window.location.reload();
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-white w-full flex justify-between items-center p-4 shadow-md">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <RiMenu2Fill size={30} />
        </div>
        <Link to="/" className="text-2xl sm:text-3xl px-2">
          SnapShop
        </Link>
      </div>

      {/* input box */}
      <div className="hidden lg:flex items-center gap-5 md:gap-9 border border-gray-300 rounded-md">
        <div className="max-w-md mx-auto">
          <form
            onSubmit={handleSearch}
            className="relative flex items-center w-[350px] h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden"
          >
            <div className="grid place-items-center h-full w-12 text-gray-500 cursor-pointer">
              <FaSearch />
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 tracking-wide"
              type="text"
              placeholder="Search Something.."
            />
          </form>
        </div>
      </div>

      {/* user profile */}
      <div className="flex items-center gap-4">
        {/* this link only show for admin */}
        {admin && (
          <Link
            className="bg-[#39DB4A] text-white px-3 py-1 rounded-md"
            to={"/admin"}
          >
            Admin
          </Link>
        )}

        <Link
          to={"/cart"}
          className="text-black cursor-pointer flex items-center py-2 rounded-full"
        >
          <FaOpencart size={30} />
          <span className="flex items-center justify-center bg-[#39DB4A] text-white h-5 w-5 rounded-full -mt-9">
            {cartArray?.length}
          </span>
        </Link>
        {isLogin ? (
          <div className="relative inline-block">
            <div onClick={toggleLogoutPopup}>
              <FaUser size={25} className="cursor-pointer" />
            </div>
            {showLogoutPopup && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 p-2 rounded shadow-md">
                <button
                  onClick={handleLogout}
                  className="w-full text-red-500 hover:text-red-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to={"/login"}
            className="bg-[#39DB4A] text-white px-3 py-1 rounded-md"
          >
            Login
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-00"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">SnapShop</h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
            <li className="text-xl py-4 flex">
              <IoMdSettings size={25} className="mr-4" /> Settings
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
