import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import cover from "../public/cover.jpg";
import covertwo from "../public/covertwo.jpg";
import { AiFillPhone } from "react-icons/ai";
import Services from "../components/services";
import About from "../components/aboutUs";
import Footer from "../components/footer";
import { useRouter } from "next/router";
import Link from "next/link";
import Contact from "../components/contact";
import Script from 'next/script'

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

  const router = useRouter();

  function handleClick() {
    router.push("/about");
  }

  return (
    <>
      <div>
        <Head>
          <title>Shreya Jha</title>
          <meta name="keywords" content="web development, programming" />

          <Link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
            integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
        </Head>

        <Script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></Script>
        <Script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></Script>

        <nav className="p-3 bg-green-700 md:flex md:items-center md:justify-between sticky">
          <div className="container mx-auto">
            <p className="text-white text-center">
              <i className="fa fa-phone text-sm"></i> +91-855-523-8149
              <i className="fa fa-envelope text-sm pl-8"></i> meenaxjha@gmail.com
              <i className="fa fa-location text-sm pl-8"></i> Buffalo County, Nebraska, United States
            </p>
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
                  href="#"
                  className="text-white text-md hover:text-white duration-500 bg-green-600 rounded p-4"
                >
                  HOME
                </Link>
              </li>
              <li className="mx-2 my-7 md:my-0">
                <Link
                  href="/about"
                  className="text-md text-md hover:bg-green-600 hover:text-white rounded p-4 duration-300"
                >
                  ABOUT
                </Link>
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

        <div className={styles.header} alt="cover">
          <div className={`${styles.coverOverlay} h-screen`}>
            <div
              className="container py-52"
              style={{ zIndex: "-1 !important", display: "flex" }}
            >
              <div className="p-8" style={{ margin: "auto" }}>
                <h1
                  className={`${styles.headText} text-2xl text-white font-light`}
                >
                  At our eye care clinic
                </h1>
                <h1 className="text-5xl text-white font-black">
                  We Offer<br />
                  <p className="text-xl"> Comprehensive</p>
                  Eye Exams
                </h1>
                <button className="bg-green-700 my-6 py-4 px-4 hover:bg-green-800 text-white font-medium py-2 px-4 rounded">
                  Book An Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
