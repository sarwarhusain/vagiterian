import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white lg:grid lg:grid-cols-5 mt-7">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <img
          className="rounded-2xl mt-30"
          src="../../../../images/Banner/engin-akyurt-Y5n8mCpvlZU-unsplash.jpg"
          alt=""
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs tracking-wide text-gray-500 uppercase">
                Call us
              </span>

              <a
                href="#"
                className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
              >
                0123456789
              </a>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-gray-700">
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>

              {/* ——— Instagram ——— */}
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06..."
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>

              {/* ——— Twitter ——— */}
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253..." />
                  </svg>
                </a>
              </li>

              {/* ——— GitHub ——— */}
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>

                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484..."
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>

              {/* ——— Dribbble ——— */}
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Dribbble</span>
                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2..."
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* ——— Services ——— */}
          <div>
            <p className="font-medium text-gray-900">Services</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  1on1 Coaching
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Company Review
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Accounts Review
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  HR Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  SEO Optimisation
                </a>
              </li>
            </ul>
          </div>

          {/* ——— Company ——— */}
          <div>
            <p className="font-medium text-gray-900">Company</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 transition hover:opacity-75">
                  Accounts Review
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-500 transition hover:opacity-75">
                  Cookies
                </a>
              </li>
            </ul>

            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
              © 2022. Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
