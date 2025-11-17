import { Link } from "react-router";
import navImg from "../../../../images/cucumber.png";

const NavBar = () => {
  return (
    <header className="bg-orange-100 fixed container mx-auto dark:bg-gray-900 z-10 opacity-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 dark:text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <img className="w-10" src={navImg} alt="" />
            </a>
          </div>

          {/* Menu */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                
                <Link to={"/"}>
                  <li className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">
                    Home
                  </li>
                </Link>

                <Link to={"/shop/vegetables"}>
                  <li className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">
                    Shop
                  </li>
                </Link>

                <Link>
                  <li className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">
                    Buy Products
                  </li>
                </Link>

                <Link>
                  <li className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">
                    DashBoard
                  </li>
                </Link>

              </ul>
            </nav>
          </div>

          {/* Login / Register */}
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a className="rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm dark:hover:bg-teal-500" href="#">
                Login
              </a>

              <div className="hidden sm:flex">
                <a className="rounded-md text-white px-5 py-2.5 text-sm font-medium bg-green-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75" href="#">
                  Register
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="block md:hidden">
              <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
