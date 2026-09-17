import { Link } from "react-router-dom";
import {
  ShoppingCart,
  CircleUserRound,
  House,
  Store,
  Boxes,
  Phone,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full bg-white text-neutral-950">
      <div className="hidden border-b border-neutral-200 md:block">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8 lg:px-10">
          <Link
            to="/projects/e-commerce/."
            className="group"
          >
            <h1 className="text-2xl font-bold tracking-[-0.03em] transition-colors duration-300 group-hover:text-blue-600">
              E-commerce
            </h1>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/projects/e-commerce/."
              className="text-sm font-medium text-neutral-600 transition-colors duration-300 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              to="/projects/e-commerce/shop"
              className="text-sm font-medium text-neutral-600 transition-colors duration-300 hover:text-blue-600"
            >
              Shop
            </Link>

            <Link
              to="/projects/e-commerce/categories"
              className="text-sm font-medium text-neutral-600 transition-colors duration-300 hover:text-blue-600"
            >
              Categories
            </Link>

            <Link
              to="/projects/e-commerce/contact"
              className="text-sm font-medium text-neutral-600 transition-colors duration-300 hover:text-blue-600"
            >
              Contact
            </Link>

            <div className="ml-2 flex items-center gap-2 border-l border-neutral-200 pl-6">
              <Link
                to="/projects/e-commerce/cart"
                aria-label="Shopping cart"
                className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition-all duration-300 hover:bg-neutral-100 hover:text-blue-600"
              >
                <ShoppingCart className="h-5 w-5" />
              </Link>

              <Link
                to="/projects/e-commerce/login"
                aria-label="Account"
                className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition-all duration-300 hover:bg-neutral-100 hover:text-blue-600"
              >
                <CircleUserRound className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex h-16 items-center justify-between border-b border-neutral-200 px-5">
          <Link
            to="/projects/e-commerce/login"
            aria-label="Account"
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition-colors duration-300 hover:bg-neutral-100 hover:text-blue-600"
          >
            <CircleUserRound className="h-5 w-5" />
          </Link>

          <Link to="/projects/e-commerce/.">
            <h1 className="text-xl font-bold tracking-[-0.03em]">
              E-commerce
            </h1>
          </Link>

          <Link
            to="/projects/e-commerce/cart"
            aria-label="Shopping cart"
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition-colors duration-300 hover:bg-neutral-100 hover:text-blue-600"
          >
            <ShoppingCart className="h-5 w-5" />
          </Link>
        </div>

        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white/95 px-2 pb-2 pt-2 backdrop-blur-md">
          <div className="grid grid-cols-5">
            <Link
              to="/projects/e-commerce/."
              className="flex flex-col items-center gap-1 py-1 text-neutral-500 transition-colors duration-300 hover:text-blue-600"
            >
              <House className="h-5 w-5" />
              <span className="text-[10px] font-medium">Home</span>
            </Link>

            <Link
              to="/projects/e-commerce/shop"
              className="flex flex-col items-center gap-1 py-1 text-neutral-500 transition-colors duration-300 hover:text-blue-600"
            >
              <Store className="h-5 w-5" />
              <span className="text-[10px] font-medium">Shop</span>
            </Link>

            <Link
              to="/projects/e-commerce/categories"
              className="flex flex-col items-center gap-1 py-1 text-neutral-500 transition-colors duration-300 hover:text-blue-600"
            >
              <Boxes className="h-5 w-5" />
              <span className="text-[10px] font-medium">Categories</span>
            </Link>

            <Link
              to="/projects/e-commerce/cart"
              className="flex flex-col items-center gap-1 py-1 text-neutral-500 transition-colors duration-300 hover:text-blue-600"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="text-[10px] font-medium">Cart</span>
            </Link>

            <Link
              to="/projects/e-commerce/contact"
              className="flex flex-col items-center gap-1 py-1 text-neutral-500 transition-colors duration-300 hover:text-blue-600"
            >
              <Phone className="h-5 w-5" />
              <span className="text-[10px] font-medium">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;