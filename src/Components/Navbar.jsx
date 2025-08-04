import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Search, User, Mic } from "lucide-react";

// Map search keywords to their route paths
const routeMap = {
  kedarnath: "/kedarnath",
  badrinath: "/badrinath",
  gangotri: "/gangotri",
  calendar: "/festival-calendar",
  yamunotri: "/yamunotri",
  "vaishno devi": "/vaishnodevi",
  "mount kailash": "/mountkailash",
  varanasi: "/varanasi",
  chitrakoot: "/chitrakoot",
  haridwar: "/haridwar",
  "mathura vrindavan": "/mathura-vrindavan",
};

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (routeMap[query]) {
      navigate(routeMap[query]);
    } else {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
    setShowSearch(false);
    setSearchQuery("");
    setSuggestions([]);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    const filtered = Object.keys(routeMap).filter((key) =>
      key.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(value ? filtered : []);
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(routeMap[suggestion]);
    setSearchQuery("");
    setSuggestions([]);
    setShowSearch(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isHovered || scrolled
            ? "bg-black bg-opacity-90 backdrop-blur shadow-md"
            : "bg-black"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-16 text-white">
            <NavLink
              to="/"
              className="text-2xl font-bold tracking-wide hover:text-yellow-400 transition"
            >
              Dham Mahima
            </NavLink>

            <div className="hidden md:flex items-center space-x-6">
              {["/", "/dhams", "/famous", "/trekking", "/books", "/about", "/blogs", "/contact"].map(
                (path, index) => {
                  const labels = [
                    "Home",
                    "Dhams",
                    "Famous",
                    "Trekking",
                    "Books",
                    "About",
                    "Blogs",
                    "Contact",
                  ];
                  return (
                    <NavLink
                      key={path}
                      to={path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-yellow-400 font-semibold"
                          : "hover:text-yellow-400 transition"
                      }
                    >
                      {labels[index]}
                    </NavLink>
                  );
                }
              )}

              <div className="flex items-center space-x-4 ml-4 relative">
                <button
                  onClick={() => {
                    setShowSearch((prev) => !prev);
                    setSuggestions([]);
                    setSearchQuery("");
                  }}
                  className="hover:text-yellow-400 transition-colors duration-300"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>

                <button
                  onClick={() => navigate("/login")}
                  className="hover:text-yellow-400 transition-colors duration-300 bg-yellow-600 w-18 rounded-3xl font-semibold"
                  aria-label="Account"
                >
                  <Link to="/login">LogIn</Link>
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
                className="text-white text-3xl"
              >
                &#9776;
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Bar and Suggestions */}
      {showSearch && (
        <div className="absolute top-16 left-0 w-full bg-black px-4 py-4 z-50 shadow-md">
          <form
            onSubmit={handleSearchSubmit}
            className="max-w-4xl mx-auto flex items-center bg-gray-100 rounded-full px-4 py-2"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleInputChange}
              className="flex-grow bg-transparent outline-none text-gray-800 text-sm px-2"
              autoFocus
            />
            <Mic className="w-4 h-4 text-gray-500 mr-2" />
            <button
              type="submit"
              className="text-white bg-yellow-500 px-4 py-1 rounded-full text-sm hover:bg-yellow-600 transition"
            >
              Go
            </button>
          </form>

          {suggestions.length > 0 && (
            <div className="max-w-4xl mx-auto mt-2 bg-white border rounded-md shadow-md text-black text-sm">
              {suggestions.map((item) => (
                <div
                  key={item}
                  onClick={() => handleSuggestionClick(item)}
                  className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-6 pb-6 pt-4 text-white flex flex-col space-y-4 mt-16 z-50">
          {[
            "/",
            "/dhams",
            "/famous",
            "/trekking",
            "/books",
            "/about",
            "/blogs",
            "/contact",
            "/search",
            "/login",
          ].map((path, index) => {
            const labels = [
              "Home",
              "Dhams",
              "Famous",
              "Trekking",
              "Books",
              "About",
              "Blogs",
              "Contact",
              "Search",
              "Login / Signup",
            ];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "hover:text-yellow-400 transition"
                }
              >
                {labels[index]}
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Navbar;
