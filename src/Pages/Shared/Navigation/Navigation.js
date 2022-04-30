import React from "react";
import { Menu } from "@headlessui/react";
import { MdMenu } from "react-icons/md";
// import { AiOutlineCloseCircle } from "react-icons/ai";
import logo from "../../../Icon/logo.png";

const navLinks = [
  { name: "Home", link: "Home" },
  { name: "About Us", link: "Home" },
  { name: "Projects", link: "Home" },
  { name: "Contact Us", link: "Home" },
];
const Navigation = () => {
  // const [open, setOpen] = useState(false);

  return (
    <div className=" h-[10vh] mx-8 sm:mx-0 relative top-1 flex justify-between  sm:justify-around items-center bg-[#F6F6F6]">
      <div>
        <img className="w-20 sm:w-28" src={logo} alt="" />
      </div>
      <div className=" hidden sm:flex justify-between gap-8">
        {navLinks.map((link) => (
          <div className="">
            <span>{link.name}</span>
          </div>
        ))}
      </div>
      <div className=" hidden sm:flex  justify-between gap-4">
        <button className="btn ">Log In</button>
      </div>

      <Menu as="div" className="sm:hidden">
        <Menu.Button>{<MdMenu size={30} />}</Menu.Button>
        <Menu.Items
          as="div"
          className="absolute top-[10vh] right-[18%] text-right cursor-pointer"
        >
          {navLinks.map((link) => (
            <Menu.Item>
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
