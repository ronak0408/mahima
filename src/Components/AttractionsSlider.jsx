import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const attractions = [
  {
    title: "Har Ki Pauri",
    image: "https://www.hoteldekho.com/storage/img/tourattraction/1651217314capture-1626853005.jpg",
  },
  {
    title: "Kashi",
    image: "https://imgk.timesnownews.com/story/Kashi_Vishwanath_Temple.jpg?tr=w-1200,h-900",
  },
  {
    title: "Sri Jagannath Temple",
    image: "https://www.thomascook.in/blog/wp-content/uploads/2024/06/jagannath-puri-temple.jpg",
  },
  {
    title: "Mata Vashno Devi",
    image: "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYWUxMzhiMWIwLTRlM2YtMTFlZi05ZDQyLWM3OGU3N2FjNGZkMy5qcGc=",
  },
   {
    title: "Somnath",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWUIgVqLmAbelJR1GzQhAC_fsDyXLv2F7gRA&s",
  },

];

export default function Attractions() {
  const [startIndex, setStartIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setStartIndex((prev) => (prev - 1 + attractions.length) % attractions.length);
      setFade(true);
    }, 200);
  };

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setStartIndex((prev) => (prev + 1) % attractions.length);
      setFade(true);
    }, 200);
  };

  // Auto-scroll every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          'url("https://www.fabhotels.com/blog/wp-content/uploads/2019/06/Konark-Sun-Temple_600.jpg")',
      }}
    >
      {/* White overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 flex flex-col items-center px-4 py-12 transition-opacity duration-700">
        <h1 className="text-8xl font-extrabold text-sky-400">Famous Temples</h1>
        <p className="text-3xl text-sky-400 mt-2 mb-8">---worth a thousand sacred temples---</p>

        {/* ✅ Add fade transition wrapper */}
        <div
          key={startIndex} // re-render on index change
          className={`transition-opacity duration-700 ${
            fade ? 'opacity-100' : 'opacity-0'
          } w-full`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
            {attractions.slice(startIndex, startIndex + 4).map((item, idx) => (
              <div
  key={idx}
  className="rounded-xl overflow-hidden shadow-lg relative group h-96 transform transition duration-500 hover:scale-105 hover:shadow-2xl"
>
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 w-full text-center bg-gradient-to-t from-black to-transparent text-white py-4 text-lg font-semibold ">
    <div className="mb-9">{item.title}</div>
    
  </div>

  {/* 👇 Explore button appears on hover */}
  <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <button className=" bg-yellow-500 text-white px-4 py-1 rounded-full shadow-lg transition mb-3">
      Explore
    </button>
  </div>
</div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-2 border border-gray-300 rounded-full hover:bg-gray-100"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 border border-gray-300 rounded-full hover:bg-gray-100"
          >
            <ArrowRight />
          </button>
        </div>

        <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full">
          Discover more
        </button>
      </div>
    </div>
  );
}
