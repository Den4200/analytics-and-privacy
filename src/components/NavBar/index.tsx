import { Link } from "react-router-dom";

import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import logo from "../../logo.png";
import meImage from "./me-transparent-min.png";

const navigation = [
  { name: "Introduction", path: "/introduction" },
  { name: "Analytics and Data", path: "/analytics-and-data" },
  { name: "Privacy", path: "/privacy" },
  { name: "BLOCK", path: "#" },
  { name: "&", path: "/analytics-and-privacy" },
  { name: "vs", path: "/analytics-vs-privacy" },
  { name: "BLOCK", path: "#" },
  { name: "Conclusion", path: "/conclusion" },
  { name: "Work Cited", path: "/works-cited" },
];

const NavBar = () => (
  <Disclosure as="nav" className="bg-gray-800">
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>

            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <Link className="flex items-center" to="/">
                <img className="block h-8 w-auto" src={logo} alt="Workflow" />
                <p className="hidden lg:block ml-2 text-base font-bold text-white">
                  User Analytics and Data
                </p>
              </Link>

              <div className="hidden sm:block sm:ml-6">
                <div className="flex">
                  {navigation.map((item) =>
                    item.name === "BLOCK" ? (
                      <div className="border-l border-solid border-gray-400 m-2" />
                    ) : (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 ml-2 mr-2 rounded-md text-sm font-medium"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="absolute right-0 text-sm text-gray-300 hover:bg-gray-700 hover:text-white rounded-md sm:px-3 px-1 py-1"
            >
              <img src={meImage} alt="" className="inline-block rounded-full h-8 w-8" />
              <span className="hidden sm:inline-block ml-2">About Me</span>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <Disclosure.Panel className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) =>
              item.name === "BLOCK" ? (
                <hr className="border-gray-400 ml-2 mr-2" />
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

export default NavBar;
