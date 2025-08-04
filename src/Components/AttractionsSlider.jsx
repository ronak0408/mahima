import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const attractions = [
  {
    title: "Har Ki Pauri",
    image:
      "https://www.hoteldekho.com/storage/img/tourattraction/1651217314capture-1626853005.jpg",
    link: "/temples/har-ki-pauri",
  },
  {
    title: "Kashi",
    image:
      "https://imgk.timesnownews.com/story/Kashi_Vishwanath_Temple.jpg?tr=w-1200,h-900",
    link: "/temples/kashi",
  },
  {
    title: "Sri Jagannath Temple",
    image:
      "https://www.thomascook.in/blog/wp-content/uploads/2024/06/jagannath-puri-temple.jpg",
    link: "/temples/jagannath",
  },
  {
    title: "Mata Vaishno Devi",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vaishno_Devi_Temple_arena.jpg",
    link: "/temples/vaishno-devi",
  },
  {
    title: "Somnath",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/Somnath_temple.JPG",
    link: "/temples/somnath",
  },
  {
    title: "Kedarnath",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kedarnath_Temple.jpg",
    link: "/temples/kedarnath",
  },
];

export default function Attractions() {
  const [startIndex, setStartIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setStartIndex(
        (prev) => (prev - 1 + attractions.length) % attractions.length
      );
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleAttractions = attractions.slice(
    startIndex,
    startIndex + 4
  ).length < 4
    ? [
        ...attractions.slice(startIndex),
        ...attractions.slice(0, 4 - (attractions.length - startIndex)),
      ]
    : attractions.slice(startIndex, startIndex + 4);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          'url("https://www.fabhotels.com/blog/wp-content/uploads/2019/06/Konark-Sun-Temple_600.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 flex flex-col items-center px-4 py-12 transition-opacity duration-700">
        <h1 className="text-8xl font-extrabold text-sky-400">Famous Temples</h1>
        <p className="text-3xl text-sky-400 mt-2 mb-8">
          ---worth a thousand sacred temples---
        </p>

        <div
          key={startIndex}
          className={`transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          } w-full flex justify-center`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
            {visibleAttractions.map((item, idx) => (
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
                <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href={item.link}
                    className="bg-yellow-500 text-white px-4 py-1 rounded-full shadow-lg transition mb-3"
                  >
                    Explore
                  </a>
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

        <a
          href="/all-temples"
          className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full"
        >
          Discover more
        </a>
      </div>
    </div>
  );
}
