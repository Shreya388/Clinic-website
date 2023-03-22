import Image from "next/image";
import styles from "../styles/About.module.css";
import doctor from "../public/doctor.jpg";

const About = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 border rounded shadow">
          <div className={styles.doctorImg}>
            <div className={styles.imgOverlay}></div>
          </div>
        </div>

        <div className="w-full md:w-1/2 pt-20 pb-20 pl-14 pr-14 rounded border shadow">
          <div className="bg-white rounded-lg max-h-96 max-h-96 min-h-80 py-5 px-3">
            <div className="">
              
              <p className="text-green-700 pt-2 pb-2">-- ABOUT US</p>
              <h3 className="text-2xl font-semibold">
                Discover Our Expertise in Eye Care
              </h3>
              <p className="text-gray-600 pt-2">
                Experience Top-Quality Care and Personalized Treatment from Our
                Skilled Ophthalmologists
              </p>
              <button className="my-6 px-4 text-white bg-green-600 hover:bg-green-700 py-2 rounded duration-100">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
