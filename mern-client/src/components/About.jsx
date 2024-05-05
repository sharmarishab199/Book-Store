import "./About.css"
import rishab from "../assets/me.jpeg";
import vinay from "../assets/singla.jpeg";
// import developer1 from "../assets/developer1.jpeg";
// import developer2 from "../assets/developer2.jpeg";

const About = () => {
  // Replace these with the actual paths to your images
  const bookStoreImagePaths = [
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1585492729i/52784811.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681807970i/122819927.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1499430233i/35616672.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1489657324i/34607062.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1408930978i/1799910.jpg"
  ];

  const developerData = [
    {
      name: "Rishab Sharma",
      title: "CEO",
      imagePath: rishab,
    },
    {
      name: "Vinay Singla",
      title: "CTO",
      imagePath: vinay,
    },
    // Add more developers as needed
  ];
  
  // Rest of your component code...
  

  return (
    <div className="max-w-6xl mx-auto mt-36 px-4 lg:px-24 flex flex-col items-center w-full gap-16">
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold mb-4">About Our Book Store</h1>
        <p className="text-gray-700 leading-relaxed font-semibold">
          Welcome to our book store, where reading meets passion. We are
          dedicated to bringing you an exceptional collection of books across
          various genres, carefully curated to ignite your imagination and
          knowledge.
        </p>
        <p className="text-gray-400 leading-relaxed mt-4 font-semibold">
          Our mission is to create a haven for book lovers, offering a diverse
          selection of titles from renowned authors and emerging talents alike.
          Whether youre seeking thrilling adventures, insightful knowledge, or
          heartwarming stories, we have something for every reader.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
          Explore our carefully curated selection of bestsellers, hidden gems,
          and timeless classics. From gripping novels to thought-provoking
          non-fiction, our shelves are stocked with a diverse range of titles
          that cater to every taste.
        </p>

        <p className="text-gray-400 leading-relaxed mt-4 font-semibold">
          We believe in fostering a reading community, and our cozy reading
          nooks provide the perfect spot to dive into a good book. Join us for
          regular book clubs, author events, and literary discussions to share
          your passion with fellow book enthusiasts.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4 font-semibold">
          At our book store, we prioritize sustainability. Many of our books are
          printed on eco-friendly materials, and we actively promote recycling
          and reusing. Join us in our commitment to the environment while
          indulging in the joy of reading.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-10 w-full">
        {bookStoreImagePaths.map((path, index) => (
          <img
            key={index}
            src={path}
            alt={`Bookstore Image ${index + 1}`}
            className="rounded w-[300px] h-[250px]"
          />
        ))}
      </div>

      <div className="w-full text-center mt-16">
        <h1 className="text-4xl font-bold mb-4">Meet Our Developers</h1>
        <p className="text-gray-700 leading-relaxed text-lg font-semibold">
          Get to know the faces behind the code. Our talented developers bring
          passion and expertise to every project.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 w-full developer-cards">
  {developerData.map((developer, index) => (
    <div key={index} className="developer-card">
      <div className="image-frame">
        <img
          src={developer.imagePath}
          alt={`Developer ${index + 1}`}
          className="rounded w-48 h-48 object-cover"
        />
        <p className="font-bold text-green-400 text-xl italic">Full-stack Developer with a passion for UI/UX design and Machine Learning concepts</p>
      </div>
      <div className="developer-info">
        <p className="text-gray-800 text-center font-bold text-xl">
          {developer.name} <span className="text-teal-500 text-lg">
          {developer.title}
          </span>
        </p>
      </div>
    </div>
  ))}
</div>






    </div>
  );
};

export default About;
