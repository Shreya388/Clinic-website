import Image from 'next/image';

const teamMembers = [
    {
      name: 'Dr. Jane Doe',
      title: 'Ophthalmologist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tortor eu libero consectetur commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vitae sodales nisi, in lobortis arcu. Donec sollicitudin arcu sit amet commodo pulvinar.',
      image: '/images/team-member-1.jpg',
    },
    {
      name: 'Dr. John Smith',
      title: 'Optometrist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tortor eu libero consectetur commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vitae sodales nisi, in lobortis arcu. Donec sollicitudin arcu sit amet commodo pulvinar.',
      image: '/images/team-member-2.jpg',
    },
    {
      name: 'Dr. Sarah Lee',
      title: 'Pediatric Ophthalmologist',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tortor eu libero consectetur commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vitae sodales nisi, in lobortis arcu. Donec sollicitudin arcu sit amet commodo pulvinar.',
      image: '/images/team-member-3.jpg',
    },
  ];
  
  const AboutUs = () => {
    return (
      <>
      <br /><br /><br /><br /><br /><br />
      <div className="container mx-auto flex flex-wrap justify-center">
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-md">
          <img src="https://source.unsplash.com/random/400x400" alt="Card 1" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Card 1 Title</h3>
            <p className="text-gray-600">Card 1 description</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-md">
          <img src="https://source.unsplash.com/random/400x400" alt="Card 2" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Card 2 Title</h3>
            <p className="text-gray-600">Card 2 description</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-md">
          <img src="https://source.unsplash.com/random/400x400" alt="Card 3" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Card 3 Title</h3>
            <p className="text-gray-600">Card 3 description</p>
          </div>
        </div>
      </div>
    </div>
    </>
    );
  };
  
  export default AboutUs;