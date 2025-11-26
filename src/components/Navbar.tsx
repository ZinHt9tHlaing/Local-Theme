import { useState } from "react";
import { Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-white/70 shadow-sm py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="font-bold text-3xl tracking-tight">Logo</h1>

        {/* Desktop View */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-lg font-medium">
            <li className="hover:text-gray-700 transition cursor-pointer">
              Home
            </li>
            <li className="hover:text-gray-700 transition cursor-pointer">
              About
            </li>
            <li className="hover:text-gray-700 transition cursor-pointer">
              Services
            </li>
            <li className="hover:text-gray-700 transition cursor-pointer">
              Contact
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button className="p-2 bg-gray-200 hover:bg-gray-300 transition rounded-xl shadow-sm">
              <Moon size={20} />
            </button>

            <button className="px-5 py-2 bg-gray-900 text-white rounded-xl hover:bg-black transition shadow-md">
              Login
            </button>
          </div>
        </div>

        <button
          className="md:hidden p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition active:scale-90 duration-200"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile View */}
      {open && (
        <div className="md:hidden px-4 mt-3">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <button className="p-2 bg-gray-400 cursor-pointer transition rounded-xl shadow-sm active:scale-90 duration-200">
                <Moon size={20} />
              </button>

              <button className="px-6 py-2 bg-gray-900 text-white rounded-xl cursor-pointer hover:bg-black transition shadow-md text-lg active:scale-90 duration-200">
                Login
              </button>
            </div>

            <div className="h-[1px] bg-gray-300 my-2"></div>

            <ul className="flex flex-col gap-5 text-xl font-medium">
              <li className="cursor-pointer hover:text-gray-700">Home</li>
              <li className="cursor-pointer hover:text-gray-700">About</li>
              <li className="cursor-pointer hover:text-gray-700">Services</li>
              <li className="cursor-pointer hover:text-gray-700">Contact</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
