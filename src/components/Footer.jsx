import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white pb-6 border-y-4 border-stone-900 dark:border-neutral-300 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div className="xs:border-r-2 border-slate-500 sm:border-0  ">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="/" className=" hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">
                  Brand Center
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Social accounts
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="/" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">
                  Whatsapp
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="xs:border-r-2 border-slate-500 sm:border-0 ">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="/" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a href="/" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Message
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <p>Thank You !!</p>
              </li>              
            </ul>
          </div>
        </div>
        <div className=" py-3 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center ">
            © 2024 <a href="/">C R M</a> All Rights Reserved.
          </span>        
        </div>
      </div>
    </footer>
  );
}
