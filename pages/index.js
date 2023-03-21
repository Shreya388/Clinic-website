import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import cover from "../public/cover.jpg";
import covertwo from "../public/covertwo.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import AboutUs from "./about";

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
        </Head>

        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>

        {/* <div className={styles.header} alt="cover">
          <div
            className="container mx-auto py-52"
            style={{ zIndex: "-1 !important" }}
          >
            <div className=" ">
              <h1
                className={`${styles.headText} my-6 text-2xl text-white font-light`}
              >
                At our eye care clinic
              </h1>
              <h1 className="text-4xl text-white font-black">
                We Offer Comprehensive Eye Exams
              </h1>
              <button className="bg-blue-500 my-6 py-3 px-8 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
                Explore Services
              </button>
            </div>
          </div>
        </div> */}
      
      <div className="max-w-[100%] h-[580px] w-full m-auto relative group">
        <nav className="p-8 bg-white md:flex md:items-center md:justify-between sticky">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-[Poppins] px-12 text-center">LOGO</span>

            <span
              onClick={() => setOpen(!open)}
              className="text-3xl cursor-pointer md:hidden block"
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </span>
          </div>
          <ul
            id="linkItems"
            className={`md:flex px-20 md:items-center md:pb-0 pb-12 absolute md:static mx-auto bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-[100px]" : "hidden"
            }`}
          >
            <li className="mx-4 my-7 md:my-0">
              <a
                href="#"
                className="text-cyan-700 text-md text-sm hover:text-cyan-500 duration-500"
              >
                HOME
              </a>
            </li>
            <li className="mx-4 my-7 md:my-0">
              <a
                href="#"
                className="text-md text-sm hover:text-cyan-500 duration-500"
              >
                SERVICES
              </a>
            </li>
            <li className="mx-4 my-7 md:my-0">
              <a
                href="#"
                className="text-md text-sm hover:text-cyan-500 duration-500"
              >
                ABOUT
              </a>
            </li>
            <li className="mx-4 my-7 md:my-0">
              <a
                href="#"
                className="text-md text-sm hover:text-cyan-500 duration-500"
              >
                EQUIPMENT
              </a>
            </li>
            <li className="mx-4 my-7 md:my-0">
              <a
                href="#"
                className="text-md text-sm hover:text-cyan-500 duration-500"
              >
                SPECIALISTS
              </a>
            </li>
            <li className="mx-4 my-7 md:my-0">
              <a
                href="#"
                className="text-md text-sm hover:text-cyan-500 duration-500"
              >
                TESTIMONIALS
              </a>
            </li>
            <li className="mx-4 my-7 md:my-0">
              <a
                href="#"
                className="text-md text-sm hover:text-cyan-500 duration-500"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover duration-500"
        >
           <div
            className="container mx-auto py-48"
          >
            <div className="text-white">
              <h1
                className={`${styles.headText} my-6 text-2xl text-blue font-light`}
              >
                At our eye care clinic
              </h1>
              <h1 className="text-5xl text-neutral-50 font-black text-black">
                We Offer Comprehensive<br /> Eye Exams
              </h1>
              <button className="bg-blue-500 my-6 py-3 px-8 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
                Explore Services
              </button>
            </div>
          </div>
        </div>
       
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[65%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[65%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      <AboutUs />
      </div>

      
    </>
  );
}
