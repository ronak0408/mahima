import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Search, User, Mic } from "lucide-react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${searchQuery}`);
      setShowSearch(false);
      setSearchQuery("");
    }
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 text-white">
            {/* Logo */}
            <NavLink
              to="/"
              className="text-2xl font-bold tracking-wide hover:text-yellow-400 transition"
            >
              Dham Mahima
            </NavLink>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              {["/", "/dhams", "/famous", "/about", "/blogs", "/contact"].map(
                (path, index) => {
                  const labels = [
                    "Home",
                    "Dhams",
                    "Famous",
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

              {/* Search + User */}
              <div className="flex items-center space-x-4 ml-4 relative">
                <button
                  onClick={() => setShowSearch((prev) => !prev)}
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
                  {/* <User size={20} /> */}
                  <Link to="/login">LogIn</Link>
                </button>
              </div>
            </div>

            {/* Hamburger Menu */}
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

        {/* Search bar below navbar */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            showSearch ? "max-h-24 py-4" : "max-h-0"
          } px-4`}
        >
          <form
            onSubmit={handleSearchSubmit}
            className="max-w-4xl mx-auto flex items-center bg-gray-100 rounded-full px-4 py-2"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
        </div>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-6 pb-6 pt-4 text-white flex flex-col space-y-4 mt-16 z-50">
          {[
            "/",
            "/dhams",
            "/famous",
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
