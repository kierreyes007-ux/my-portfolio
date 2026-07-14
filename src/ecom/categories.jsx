import { Link } from "react-router-dom";

function Categories({ products }) {

    const categories = [
        ...new Set(products.map(prod => prod.category))
    ];

    return (
        <div className="w-full min-h-screen py-15 px-5">

            <h1 className="text-3xl font-bold mb-8">
                Categories
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                {categories.map((category) => (

                    <Link 
                        key={category}
                        to="/projects/e-commence/shop"
                    >
                        <div className="
                            bg-white 
                            rounded-xl 
                            p-6 
                            shadow-md
                            hover:scale-105
                            transition
                        ">
                            <h2 className="text-xl font-bold text-center">
                                {category}
                            </h2>
                        </div>
                    </Link>

                ))}

            </div>

        </div>
    )
}

export default Categories;