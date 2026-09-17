import { Link } from "react-router-dom";
import { useEcommerce } from "./ecommerceContext";

function Categories() {
  const { product } = useEcommerce();

  const categories = [
    ...new Set(product.map((prod) => prod.category)),
  ];

  return (
    <section className="min-h-screen w-full bg-[#f7f7f5] px-4 pb-20 pt-8 text-neutral-950 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 border-b border-neutral-200 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            Browse
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
            Categories
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
            Explore our products by category and find what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/projects/e-commerce/shop/${category}`}
              className="group"
            >
              <div className="flex min-h-[180px] items-end justify-between rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:min-h-[220px] sm:p-6">
                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                    Category
                  </p>

                  <h2 className="text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-blue-600 sm:text-2xl">
                    {category}
                  </h2>
                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-lg text-neutral-400 transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;