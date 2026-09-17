import strahob from "../../assets/imgecom/straho-banner.jpg";
import straho from "../../assets/imgecom/straho.jpg";
import { useEcommerce } from "./ecommerceContext";
import { Link } from "react-router-dom";

function Home() {
  const { product } = useEcommerce();

  return (
    <section className="min-h-screen w-full bg-[#f7f7f5] px-4 pb-16 pt-4 text-neutral-950 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={strahob}
            alt="E-commerce banner"
            className="hidden h-[420px] w-full object-cover md:block lg:h-[500px]"
          />

          <img
            src={straho}
            alt="E-commerce banner"
            className="block h-[420px] w-full object-cover md:hidden"
          />
        </div>

        <div className="mt-16">
          <div className="mb-8 flex items-end justify-between border-b border-neutral-200 pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Browse
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                Categories
              </h2>
            </div>

            <Link
              to="/projects/e-commerce/categories"
              className="hidden text-sm font-semibold text-neutral-500 transition-colors duration-300 hover:text-blue-600 sm:block"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[product[16], product[6], product[12], product[2]]
              .filter(Boolean)
              .map((prod) => (
                <Link
                  to="/projects/e-commerce/categories"
                  key={prod.id}
                  className="group"
                >
                  <div className="flex min-h-[220px] flex-col items-center justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
                    <div className="flex h-36 w-full items-center justify-center">
                      <img
                        src={prod.image}
                        alt={prod.category}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-5 flex w-full items-center justify-between">
                      <p className="text-sm font-semibold uppercase tracking-[0.08em]">
                        {prod.category}
                      </p>

                      <span className="text-lg text-neutral-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-8 flex items-end justify-between border-b border-neutral-200 pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Curated for you
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                Featured Products
              </h2>
            </div>

            <Link
              to="/projects/e-commerce/shop"
              className="hidden text-sm font-semibold text-neutral-500 transition-colors duration-300 hover:text-blue-600 sm:block"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
            {product.slice(0, 8)?.map((prod) => (
              <Link
                to="/projects/e-commerce/shop"
                key={prod.id}
                className="group"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex aspect-square items-center justify-center overflow-hidden bg-neutral-50 p-5">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <p className="line-clamp-2 text-sm font-medium leading-relaxed text-neutral-800">
                      {prod.title}
                    </p>

                    <div className="mt-auto pt-5">
                      <p className="text-lg font-bold tracking-tight">
                        ${prod.price}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;