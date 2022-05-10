import React from "react";
import { Menu } from "@headlessui/react";
import { MdMenu } from "react-icons/md";
import logo from "../../../Icon/logo.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Contact Us", link: "/contact" },
  { name: "Services", link: "/services" },
];
const Navigation = () => {
  // const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  return (
    <div className=" h-[10vh] mx-8 sm:mx-0 sticky top-0 flex justify-between  sm:justify-around items-center bg-[#F6F6F6]">
      <div>
        <img className="w-20 sm:w-28" src={logo} alt="" />
      </div>
      <div className="hidden sm:flex justify-between gap-8">
        {navLinks.map((menu) => (
          <div key={menu.name}>
            <Link
              to={menu.link}
              className="cursor-pointer hover:text-blue-800 font-semibold"
            >
              {menu.name}
            </Link>
          </div>
        ))}
      </div>
      <div className=" hidden sm:flex  justify-between items-center gap-4">
        {user?.email ? (
          <Link to="Dashboard">Dashboard</Link>
        ) : (
          <Link to="/login" className="btn">
            Log In
          </Link>
        )}
        {user?.email && (
          <h5 className="btn cursor-pointer" onClick={() => logOut(navigate)}>
            Log Out
          </h5>
        )}
      </div>

      <Menu as="div" className="sm:hidden">
        <Menu.Button>{<MdMenu size={30} />}</Menu.Button>
        <Menu.Items
          as="div"
          className="absolute top-[10vh] right-[18%] text-right cursor-pointer"
        >
          {navLinks.map((link) => (
            <Menu.Item key={link.name}>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {link.name}
                </button>
              )}
            </Menu.Item>
          ))}
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-violet-500 text-white" : "text-gray-900"
                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              >
                Log In
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default Navigation;
