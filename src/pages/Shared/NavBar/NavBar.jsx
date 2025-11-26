import { Link } from "react-router";
import navImg from "../../../../images/cucumber.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthContext";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [menuOpen, setMenuOpen] = useState(false); // NEW: state for mobile menu

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <header className="bg-white fixed container mx-auto text-gray-500 dark:bg-gray-900 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link to="/">
              <img className="w-10" src={navImg} alt="Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 items-center text-sm">
            <Link to="/">Home</Link>
            <Link to="/shop/vegetables">Shop</Link>
            <Link to="#">Buy Products</Link>
            <Link to="#">DashBoard</Link>
            <Link to="/secret">Secret</Link>
            <button className="btn rounded-2xl flex items-center gap-2">
              <FaShoppingCart /> {cart.length}
            </button>
          </nav>

          {/* Login / Register */}
          <div className="flex items-center gap-4">
            {user ? (
              <button onClick={handleLogout} className="btn btn-ghost">
                LogOut
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="hidden sm:inline-block rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white"
                >
                  Register
                </Link>
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded bg-gray-100 text-gray-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-orange-100 rounded-lg p-4 shadow-lg">
            <ul className="flex flex-col gap-4">
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/shop/vegetables" onClick={() => setMenuOpen(false)}>Shop</Link>
              <Link to="#" onClick={() => setMenuOpen(false)}>Buy Products</Link>
              <Link to="#" onClick={() => setMenuOpen(false)}>DashBoard</Link>
              <Link to="/secret" onClick={() => setMenuOpen(false)}>Secret</Link>
              <button className="btn rounded-2xl flex items-center gap-2">
                <FaShoppingCart /> {cart.length}
              </button>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
