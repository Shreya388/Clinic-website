import Image from "next/image";

const CardList = (props) => {
  return (
    <div className="w-full md:w-1/3 p-7">
      <div className="bg-white rounded-lg max-h-96 max-h-96 min-h-80 py-5 px-3">
        <div className="">
          <h3 className="text-2xl font-semibold">{props.title}</h3>
          <p className="text-gray-600">{props.description}</p>
          <button className="my-6 px-8 hover:bg-green-600 hover:text-white text-black py-2 border-2 border-green-600 duration-100">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

const serviceList = [
  {
    title: "Comprehensive Eye Exam",
    description:
      "We take care of common vision problems such as nearsightedness, farsightedness, and astigmatism.",
  },
  {
    title: "Contact Lens Fittings",
    description:
      "If you wear contact lenses, your eye doctor can help you find the right type of lenses to fit your eyes and your lifestyle.",
  },
  {
    title: "Prescription Eyeglasses",
    description:
      "Eye clinics offer a variety of eyeglass frames and lenses to suit your style and prescription needs.",
  },
  {
    title: "Treatment For Eye Diseases",
    description:
      "We treat variety of eye diseases, including glaucoma, cataracts, and macular degeneration. Options may include medication, laser therapy, or surgery.",
  },
  {
    title: "Vision Therapy",
    description:
      "Vision therapy is a type of physical therapy for the eyes and brain. It can be used to treat vision problems that cannot be corrected with glasses or contacts",
  },
  {
    title: "Low Vision Services",
    description:
      "If you have a visual impairment that cannot be fully corrected with glasses or contacts, an eye clinic can provide low vision services to help you.",
  },
];

const teamMembers = [
  {
    name: "Dr. Jane Doe",
    title: "Ophthalmologist",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tortor eu libero consectetur commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vitae sodales nisi, in lobortis arcu. Donec sollicitudin arcu sit amet commodo pulvinar.",
    image: "/images/team-member-1.jpg",
  },
  {
    name: "Dr. John Smith",
    title: "Optometrist",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tortor eu libero consectetur commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vitae sodales nisi, in lobortis arcu. Donec sollicitudin arcu sit amet commodo pulvinar.",
    image: "/images/team-member-2.jpg",
  },
  {
    name: "Dr. Sarah Lee",
    title: "Pediatric Ophthalmologist",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tortor eu libero consectetur commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vitae sodales nisi, in lobortis arcu. Donec sollicitudin arcu sit amet commodo pulvinar.",
    image: "/images/team-member-3.jpg",
  },
];

const Services = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="container mx-auto flex flex-wrap justify-center">
        {
          serviceList.map((data, index) =>
              <CardList key={index} title={data.title} description={data.description} />
          )
        }
      </div>
    </>
  );
};

export default Services;
