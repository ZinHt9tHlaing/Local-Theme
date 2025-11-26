import { useState } from "react";
import { Moon, Menu, X, Sun } from "lucide-react";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  console.log("theme", theme);

  return (
    <nav className="backdrop-blur-md bg-white/70 shadow-sm py-3 sticky top-0 z-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="font-bold text-3xl tracking-tight dark:text-gray-200">
          Logo
        </h1>

        {/* Desktop View */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-lg font-medium dark:text-gray-200">
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
            <button
              onClick={toggleTheme}
              className="p-2 bg-gray-400 cursor-pointer transition rounded-xl shadow-sm active:scale-90 duration-200 dark:bg-amber-300"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className="px-5 py-2 bg-gray-900 text-white rounded-xl hover:bg-black transition shadow-md dark:bg-gray-100 dark:text-gray-800">
              Login
            </button>
          </div>
        </div>

        <button
          className="md:hidden p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition active:scale-90 duration-200 dark:text-gray-200 dark:hover:text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile View */}
      {open && (
        <div className="md:hidden px-4 mt-3">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6 ">
            <div className="flex justify-between items-center ">
              <button
                onClick={toggleTheme}
                className="p-2 bg-gray-400 cursor-pointer transition rounded-xl shadow-sm active:scale-90 duration-200 dark:bg-amber-300"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button className="px-6 py-2 bg-gray-900 text-white rounded-xl cursor-pointer hover:bg-black transition shadow-md text-lg active:scale-90 duration-200">
                Login
              </button>
            </div>

            <div className="h-[1px] bg-gray-300 my-2"></div>

            <ul className="flex flex-col justify-center items-center gap-5 text-xl font-medium">
              <li className="cursor-pointer w-full text-center rounded-md py-1 hover:text-gray-200 hover:bg-gray-900 duration-300">
                Home
              </li>
              <li className="cursor-pointer w-full text-center rounded-md py-1 hover:text-gray-200 hover:bg-gray-900 duration-300">
                About
              </li>
              <li className="cursor-pointer w-full text-center rounded-md py-1 hover:text-gray-200 hover:bg-gray-900 duration-300">
                Services
              </li>
              <li className="cursor-pointer w-full text-center rounded-md py-1 hover:text-gray-200 hover:bg-gray-900 duration-300">
                Contact
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
