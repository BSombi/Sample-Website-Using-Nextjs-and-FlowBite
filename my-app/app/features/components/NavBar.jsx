"use client";
import { Buttons } from "flowbite-react";

export default function NavBar() {
  return (
    <nav class="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" class="flex items-center">
          <img src="./public/next.svg" class="h-6 mr-3 sm:h-10" alt="" />
          <span class="self-center text-[25px] font-semibold whitespace-nowrap text-[#243665]">
            Colossal<span className="text-[#8BD8BD]">Hub.</span>
          </span>
        </a>
        <div class="flex md:order-2">
          <button
            type="button"
            class="text-[#243665] bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 mx-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-[15px] font-bold"
          >
            Login
          </button>
          <button
            type="button"
            class="text-white bg-[#243665] hover:bg-[#8BD8BD] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get Free Trial
          </button>
        </div>
        <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
          <ul class="flex flex-col p-4 mt-4 border rounded-lg bg-blue-900 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent text-[15px]"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-[#243665] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent text-[15px]"
              >
                Features{" "}
                <svg
                  class="w-4 h-4 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownNavbar"
                class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li aria-labelledby="dropdownNavbarLink">
                    <button
                      id="doubleDropdownButton"
                      data-dropdown-toggle="doubleDropdown"
                      data-dropdown-placement="right-start"
                      type="button"
                      class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Features
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="doubleDropdown"
                      class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                      <ul
                        class="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="doubleDropdownButton"
                      >
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                          >
                            Overview
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                          >
                            My downloads
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                          >
                            Billing
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                          >
                            Rewards
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div class="py-1">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-[#243665] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-[15px]"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-[#243665] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-[15px]"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-[#243665] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-[15px]"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
