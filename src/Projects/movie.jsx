import { useState, useEffect } from "react";

function Movie() {
    const [movies, setMovie] = useState(() => {
        const savedMovie = localStorage.getItem("movie");
        return savedMovie ? JSON.parse(savedMovie) : [];
    });
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTerm, setSearchTerm] = useState("");
    const [text, setText] = useState("");
    const [rate, setRate] = useState(0);
    const filteredMovie = movies.filter(mov => mov.name.toLowerCase().includes(searchTerm.toLowerCase()));
    useEffect(() => {
        localStorage.setItem("movie", JSON.stringify(movies));
    }, [movies])
    const addBtn = () => {
        if(!text.trim()) return;
        setMovie([...movies, {name: text, rating: rate, status: false}])
        setText("");
        setRate(0);
    }
    const selectBtn = () => {
        if(movies.length === 0) return;
        let nextIndex = currentIndex + 1;
        if(nextIndex >= movies.length) {
            nextIndex = 0;
        }
        setCurrentIndex(nextIndex);
        setSelectedMovie(movies[nextIndex]);

    }
    const toggleBtn = () => {
       
          if (!selectedMovie) return;

    const updatedMovies = movies.map((mov) =>
        mov.name === selectedMovie.name
            ? { ...mov, status: !mov.status }
            : mov
    );

    setMovie(updatedMovies);
    setSelectedMovie(updatedMovies.find((mov) => mov.name === selectedMovie.name));
    }
    const increaseBtn = () => {
        if(!selectedMovie) return;
        const updatedMovies = movies.map((mov) =>
        mov.name === selectedMovie.name
            ? {
                  ...mov,
                  rating: Math.min(Number(mov.rating) + 1, 5),
              }
            : mov
    );

    setMovie(updatedMovies);
    setSelectedMovie(updatedMovies.find((mov) => mov.name === selectedMovie.name));
    }
    const deleteBtn = () => {
        if(!selectedMovie) return;
        setMovie(movies.filter((mov, index) => mov.name !== selectedMovie.name));
        setSelectedMovie(null);
    }
    const clearBtn = () => {
        setMovie([]);
        setCurrentIndex(-1);
        setSelectedMovie(null);
        setSearchTerm("");
        setText("");
        setRate("");
    }
    return (
       <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 flex items-center justify-center p-4">
           <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6">
                {filteredMovie.length === 0 ? (<p>No Movie</p>) : (
                   <div><h1 className="text-center text-3xl font-bold text-indigo-700 mb-5"><p>Movie List</p></h1>
                   {filteredMovie.map((mov, index) => (
                    <div key={index}
                     className="bg-slate-100 rounded-xl p-4 mb-3 shadow"    >
                        <p className="font-bold text-lg">{index+1}. {mov.name}</p>
                        <p className="text-yellow-600">⭐ Rating: {mov.rating}</p>
                        <p className={`font-semibold ${mov.status ? "text-green-500" : "text-red-500"}`}>
                            Status: {mov.status ? "Watched" : "Not Watched"}</p>
                    </div>
                   ))}
                   </div>
                )}
                <div className="bg-indigo-100 rounded-xl p-4 mt-5">
                    {selectedMovie ? (
                        <div>
                    <h2 className="font-bold text-lg text-indigo-700">
                        Selected Movie</h2>
                    <p>{selectedMovie.name}</p>
                    <p>Rating: ⭐{selectedMovie.rating}</p>
                    <p>Status: {selectedMovie.status ? "✅ Watched" :
                     "❌ Not Watched"}</p>
                    </div>
                    ) : (<p className="text-gray-500 text-center">No Selected Movie</p>)}
                </div>
                <div className="flex flex-col gap-3 mt-5">
                    <input  className="border rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                    value={text} onChange={(e)=>setText(e.target.value)}
                    placeholder="Input Title"></input>
                    <input  className="border rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                    type="number" min="1" max="5" placeholder="(1-5)" 
                    value={rate} onChange={(e) => setRate(e.target.value)}>
                    </input>
                    <input  className="border rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                    placeholder="Search Title" value={searchTerm} onInput={(e) => setSearchTerm(e.target.value)}></input>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-6">
                    <button className="bg-green-500 text-white rounded-xl py-3 font-bold hover:bg-green-600 active:scale-95 transition"
                    onClick={addBtn}>Add Movie</button>
                    <button className="bg-blue-500 text-white rounded-xl py-3 font-bold hover:bg-blue-600 active:scale-95 transition" onClick={selectBtn}>Select Movie</button>
                    <button className="bg-yellow-500 text-white rounded-xl py-3 font-bold hover:bg-yellow-600 active:scale-95 transition" onClick={toggleBtn}>Toggle Watch</button>
                    <button className="bg-purple-500 text-white rounded-xl py-3 font-bold hover:bg-purple-600 active:scale-95 transition" onClick={increaseBtn}>Increase Rating</button>
                    <button className="bg-red-500 text-white rounded-xl py-3 font-bold hover:bg-red-600 active:scale-95 transition col-span-2" onClick={deleteBtn}>Delete Selected</button>
                    <button className="bg-gray-800 text-white rounded-xl py-3 font-bold hover:bg-black active:scale-95 transition col-span-2" onClick={clearBtn}>Clear All</button>
                </div>
            </div>
        </div>
    )
}

export default Movie;