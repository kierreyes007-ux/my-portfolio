import { useEcommerce } from "./ecommerceContext";
import { Link, useParams } from "react-router-dom";

function Shop() {
  const {
    product,
    showConfirm,
    cancelRequest,
    confirmRequest,
    requestAddToCart,
    toast,
  } = useEcommerce();

  const { category } = useParams();

  const filteredProducts = category
    ? product.filter((prod) => prod.category === category)
    : product;

  return (
    <section className="min-h-screen w-full bg-[#f7f7f5] px-4 pb-20 pt-6 text-neutral-950 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 border-b border-neutral-200 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            {category ? "Category" : "Collection"}
          </p>

          <div className="mt-2 flex items-end justify-between gap-4">
            <h1 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
              {category || "All Products"}
            </h1>

            <p className="text-sm text-neutral-500">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "item" : "items"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Link to={`/projects/e-commerce/product/${prod.id}`}>
                <div className="flex aspect-square items-center justify-center overflow-hidden bg-neutral-50 p-5">
                  <img
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    src={prod.image}
                    alt={prod.title}
                  />
                </div>

                <div className="px-4 pt-4 sm:px-5">
                  <p className="line-clamp-2 min-h-[42px] text-sm font-medium leading-relaxed text-neutral-800">
                    {prod.title}
                  </p>

                  <p className="mt-3 text-xl font-bold tracking-tight">
                    ${prod.price}
                  </p>

                  <div className="mt-3 flex items-center gap-2 pb-4">
                    <div className="flex gap-0.5 text-sm text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i
                          key={star}
                          className={
                            star <= Math.round(prod.rating_rate)
                              ? "fa-solid fa-star"
                              : "fa-regular fa-star"
                          }
                        ></i>
                      ))}
                    </div>

                    <span className="text-xs text-neutral-500">
                      {prod.rating_rate} ({prod.rating_count})
                    </span>
                  </div>
                </div>
              </Link>

              <div className="mt-auto px-4 pb-4 sm:px-5">
                <button
                  className="w-full rounded-full border border-neutral-200 bg-neutral-950 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-md"
                  onClick={() => requestAddToCart(prod)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-20 left-4 z-50 flex items-center gap-2 rounded-xl bg-neutral-950 px-5 py-3 text-sm font-medium text-white shadow-xl sm:bottom-5 sm:left-5">
          <span>{toast}</span>
        </div>
      )}

      {showConfirm && (
        <div
          onClick={() => cancelRequest()}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-6 text-neutral-950 shadow-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              Cart
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight">
              Add to Cart?
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-neutral-500">
              Are you sure you want to add this item to your cart?
            </p>

            <div className="mt-7 flex justify-end gap-3">
              <button
                className="rounded-full border border-neutral-200 px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-100"
                onClick={() => cancelRequest()}
              >
                Cancel
              </button>

              <button
                className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-md"
                onClick={() => confirmRequest()}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Shop;