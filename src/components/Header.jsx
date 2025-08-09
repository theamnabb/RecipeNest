
import { Link } from "react-router-dom";

const Header = ({ favorites = [] }) => {
  return (
    <>
      <nav className="border-red-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center md:justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <i className="fas fa-utensils text-xl text-red-500 "></i>
            <h2 className="self-center text-2xl font-semibold text-gray-700">
              Recipe<span className="text-red-500">Nest</span>
            </h2>
          </Link>

          <div
            className="items-center justify-between w-full md:flex md:w-auto"
            id="navbar-search"
          >
            <ul className="flex items-center justify-center md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 rounded md:bg-transparent text-red-500 md:p-0 transition-colors duration-300"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/favourite"
                  className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600 md:p-0 transition-colors duration-300"
                >
                  Favourites ({favorites.length})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
