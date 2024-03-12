import React, { useState, useEffect, useRef } from "react";
import Toggle from "./Toggle";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        onClick={toggleSidebar}
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <aside
        ref={sidebarRef}
        id="logo-sidebar"
        className={`h-screen transition-transform ${
          isOpen ? "" : "-translate-x-full sm:-translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full border-r-1 rounded-r-xl border-gray-600 px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-900">
          <a href="/" className="flex items-center ps-2.5 mb-5">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 me-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              C R M
            </span>
          </a>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/"
                className="flex items-center p-2 active:bg-blue-700 active:text-white text-gray-900 rounded-lg hover:bg-blue-700 hover:text-slate-100 dark:text-white dark:hover:bg-blue-700 group"
              >
                <span className="ms-3">Dashboard</span>
              </a>
            </li>

            <li>
              <a
                href="/"
                className="flex items-center p-2 active:bg-blue-700 active:text-white text-gray-900 rounded-lg hover:bg-blue-700 hover:text-slate-100 dark:text-white dark:hover:bg-blue-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Chats</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-slate-800 bg-rose-500 rounded-full dark:bg-rose-900 dark:hover:bg-slate-100 dark:hover:text-slate-900 dark:text-white">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 active:bg-blue-700 active:text-white text-gray-900 rounded-lg hover:bg-blue-700 hover:text-slate-100 dark:text-white dark:hover:bg-blue-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 active:bg-blue-700 active:text-white text-gray-900 rounded-lg hover:bg-blue-700 hover:text-slate-100 dark:text-white dark:hover:bg-blue-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 active:bg-blue-700 active:text-white text-gray-900 rounded-lg hover:bg-blue-700 hover:text-slate-100 dark:text-white dark:hover:bg-blue-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Leads</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 active:bg-blue-700 active:text-white text-gray-900 rounded-lg hover:bg-blue-700 hover:text-slate-100 dark:text-white dark:hover:bg-blue-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Contacts</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 active:bg-blue-700 active:text-white text-gray-900 rounded-lg hover:bg-blue-700 hover:text-slate-100 dark:text-white dark:hover:bg-blue-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Setting</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 active:bg-blue-700 active:text-white text-gray-900 rounded-lg hover:bg-blue-700 hover:text-slate-100 dark:text-white dark:hover:bg-blue-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Helps</span>
              </a>
            </li>

            <li>
              <a
                href="/"
                className="flex items-center p-2 active:bg-blue-700 active:text-white text-gray-900 rounded-lg hover:bg-blue-700 hover:text-slate-100 dark:text-white dark:hover:bg-blue-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
            <li className="fixed bottom-0">
              <Toggle />
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
