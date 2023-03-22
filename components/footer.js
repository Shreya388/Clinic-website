import React from "react";

const Footer = () => {
  return (
    <footer className="pt-48 pb-48">
      <div className="container mx-auto py-8 px-4 flex flex-wrap mx-auto">
        <div className="w-full md:w-1/4 pt-4 pb-4 pl-4 pr-4">
          <h4 className="text-lg mb-4 font-semibold">About Us</h4>
          <p className="text-sm mb-2 text-start text-gray-900 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <h4 className="text-lg mb-4 font-medium">Contact Us</h4>
          <p className="text-sm mb-2">123 Main St.</p>
          <p className="text-sm mb-2">New York, NY 10001</p>
          <p className="text-sm mb-2">contact@example.com</p>
          <p className="text-sm mb-2">(123) 456-7890</p>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <h4 className="text-lg mb-4 font-medium">Social Media</h4>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#" className="text-sm hover:text-green-800 text-gray-800 ">
                Twitter
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm hover:text-green-800 text-gray-800 ">
                Facebook
              </a>
            </li>
            <li className="mb-2">
            <a href="#" className="text-sm hover:text-green-800 text-gray-800 ">
                Facebook
              </a>
            </li>
        </ul>
    </div>

    <div className="w-full md:w-1/4 p-4">
          <h4 className="text-lg mb-4 font-medium">Social Media</h4>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#" className="text-sm hover:text-green-800 text-gray-800 ">
              Our Practice
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm hover:text-green-800 text-gray-800 ">
              Services
              </a>
            </li>
            <li className="mb-2">
            <a href="#" className="text-sm hover:text-green-800 text-gray-800 ">
            Patient Resources
              </a>
            </li>
        </ul>
    </div>
    </div>
    </footer>
  )
}

export default Footer;