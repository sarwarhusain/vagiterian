import { Link } from "react-router";
import navImg from "../../../../images/cucumber.png";

const NavBar = () => {
  return (
    <header class="bg-orange-100 fixed container mx-auto dark:bg-gray-900 z-10 opacity-40">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="md:flex md:items-center md:gap-12">
            <a class="block text-teal-600 dark:text-teal-600" href="#">
              <span class="sr-only">Home</span>
              <img className="w-10" src={navImg} alt="" />
            </a>
          </div>

          <div class="hidden md:block">
            <nav aria-label="Global">
              <ul class="flex items-center gap-6 text-sm">
                <Link>
                  <li
                    class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Home
                  </li>
                </Link>
                <Link>
                  <li
                    class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Our Products
                  </li>
                </Link>
                <Link>
                  <li
                    class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Buy Products
                  </li>
                </Link>
                <Link>
                  <li
                    class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    DashBoard
                  </li>
                </Link>
              </ul>
            </nav>
          </div>

          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
              <a
                class="rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm dark:hover:bg-teal-500"
                href="#"
              >
                Login
              </a>

              <div class="hidden sm:flex">
                <a
                  class="rounded-md text-white px-5 py-2.5 text-sm font-medium bg-green-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  Register
                </a>
              </div>
            </div>

            <div class="block md:hidden">
              <button class="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
