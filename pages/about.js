import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import About from "../components/aboutUs";
import Footer from "../components/footer";
import Link from "next/link";
import aboutStyle from "../styles/About.module.css";

export default function Home() {
  const [open, setOpen] = useState(false);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1612776572997-76cc42e058c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    },
    {
      url: "https://images.pexels.com/photos/5726850/pexels-photo-5726850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/4269488/pexels-photo-4269488.jpeg?cs=srgb&dl=pexels-cedric-fauntleroy-4269488.jpg&fm=jpg&w=1920&h=1280",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div>
        <Head>
          <title>Shreya Jha</title>
          <meta name="keywords" content="web development, programming" />
       
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </Head>

        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>

        <nav className="p-2 bg-green-900 md:flex md:items-center md:justify-between sticky">
          <div className="container mx-auto">
          <p className="text-gray-300 text-center text-sm"><i className="fa fa-phone text-sm"></i> +91-855-523-8149</p>
          </div>
        </nav>

        <nav className="p-8 bg-white md:flex md:items-center md:justify-between sticky">
          <div className="flex justify-between items-center mx-auto">
            <span className="text-2xl px-12 font-bold text-center">LOGO</span>
            <div className="container">
              <span
                onClick={() => setOpen(!open)}
                className="text-3xl cursor-pointer md:hidden block text-right"
              >
                <ion-icon name={open ? "close" : "menu"}></ion-icon>
              </span>
            </div>
            <ul
              id="linkItems"
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static mx-auto bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-[100px]" : "hidden"
              }`}
            >
              <li className="mx-2 my-7  md:my-0">
                <Link
                  href="/"
                  className="text-md text-md hover:bg-green-600 hover:text-white rounded p-4 duration-300"
                >
                  HOME
                </Link>
              </li>
              <li className="mx-2 my-7 md:my-0">
                <a
                  href="#"
                  className="text-white text-md hover:text-white duration-500 bg-green-600 rounded p-4"
                >
                  ABOUT
                </a>
              </li>
              <li className="mx-2 my-7 md:my-0">
                <a
                  href="#"
                  className="text-md text-md hover:bg-green-600 hover:text-white rounded p-4 duration-300"
                >
                  SERVICES
                </a>
              </li>
              <li className="mx-2 my-7 md:my-0">
                <a
                  href="#"
                  className="text-md text-md hover:bg-green-600 hover:text-white rounded p-4 duration-300"
                >
                  EQUIPMENT
                </a>
              </li>
              <li className="mx-2 my-7 md:my-0">
                <a
                  href="#"
                  className="text-md text-md hover:bg-green-600 hover:text-white rounded p-4 duration-300"
                >
                  SPECIALISTS
                </a>
              </li>
              <li className="mx-2 my-7 md:my-0">
                <a
                  href="#"
                  className="text-md text-md hover:bg-green-600 hover:text-white rounded p-4 duration-300"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div>
        </div>

        <div className={aboutStyle.aboutHead}>
          <div className={aboutStyle.headOverlay}>
              <div className="container mx-auto">
                <h1 className="text-2xl text-center my-auto text-white">Home / About</h1>
              </div>
          </div>
        </div>

        <About />

        <div className="container mx-auto my-48 ">
        <div className="flex flex-wrap -mx-4 mx-auto">
        {/* Section 1 */}
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div className="bg-white rounded-lg shadow-lg p-20">
            <h2 className="text-2xl font-bold mb-4">Section 1</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit eros vel urna tincidunt fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam posuere libero sit amet risus facilisis dictum.</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <div className="bg-white rounded-lg shadow-lg p-20">
            <h2 className="text-2xl font-bold mb-4">Section 1</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit eros vel urna tincidunt fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam posuere libero sit amet risus facilisis dictum.</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="w-full lg:w-1/2 px-4 py-12 mb-8 lg:mb-0">
          <div className="bg-white rounded-lg shadow-lg p-20">
            <h2 className="text-2xl font-bold mb-4">Section 2</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit eros vel urna tincidunt fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam posuere libero sit amet risus facilisis dictum.</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg p-20">
            <h2 className="text-2xl font-bold mb-4">Section 2</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit eros vel urna tincidunt fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam posuere libero sit amet risus facilisis dictum.</p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="w-full lg:w-1/2 px-4 py-12 mb-8 lg:mb-0">
          <div className="bg-white rounded-lg shadow-lg p-20">
            <h2 className="text-2xl font-bold mb-4">Section 2</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit eros vel urna tincidunt fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam posuere libero sit amet risus facilisis dictum.</p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg p-20">
            <h2 className="text-2xl font-bold mb-4">Section 2</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit eros vel urna tincidunt fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam posuere libero sit amet risus facilisis dictum.</p>
          </div>
        </div>
        </div>
</div>
        <Footer />
      </div>
    </>
  );
}
