import { useState, useEffect } from "react";

function Expense() {
    const [expense, setExpense] = useState(() => {
        const savedExpense = localStorage.getItem("expenses");
        return savedExpense ? JSON.parse(savedExpense) : [];
    });
    const [editExpense, setEditExpense] = useState({
  name: "",
  price: "",
  categories: "",
  important: false,
});
    const [editIndex, setEditIndex] = useState(null);
    const [selectedExpense, setSelectedExpense] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTerm, setSearchTerm] = useState("");   
    const [text, setText] = useState("");
    const [cost, setCost] = useState("");
    const [category, setCategory] = useState("Food")
    const total = expense.reduce((sum, exp) => 
    { return sum + Number(exp.price); }, 0);
    const filteredExpense = expense.filter(exp => exp.name.toLowerCase().includes(searchTerm.toLowerCase()));
    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expense));
    }, [expense])
    
    const addBtn = () => {
        if(!text.trim()) return;
        if(isNaN(Number(cost)) || cost === "") return;
        
        setExpense([...expense, {id: Date.now(), name: text, price: cost, categories: category, important: false}])
        setCost("");
        setText("");
        setCategory("Food"); 
        setSelectedExpense(null);
        setSearchTerm("");   
        
    }
    const selectBtn = () => {
        if(expense.length === 0) return;
        let nextIndex = currentIndex + 1;
        if(nextIndex >= expense.length){
            nextIndex = 0;
        }
        setCurrentIndex(nextIndex);
        setSelectedExpense(expense[nextIndex]);
    }
    const importantBtn = () => {
        if(!selectedExpense) return;
        setExpense(expense.map((t) => t.id === selectedExpense.id ? {...t, important: !t.important}: t))
        setSelectedExpense(null);
    }
    const clearBtn = () => {
        setExpense([]);
        setCurrentIndex(-1);
        setSelectedExpense(null);
        setSearchTerm("");
        setText("");
        setCost("");
        setTotal(0);
    }
    const deleteBtn = () => {
        if(!selectedExpense) return;
        setExpense(expense.filter((exp) => exp.id !== selectedExpense.id));
        setSelectedExpense(null);
    }
    
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-200 flex justify-center items-start sm:items-center px-4 py-8">
          <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-200 p-5 sm:p-8">   
                    {filteredExpense.length === 0 ? (<p>No Expense</p>) : (
                        <div className="max-h-72 sm:max-h-96 overflow-y-auto space-y-3">
                            <h1 className="text-center text-3xl font-bold text-blue-700 mb-6">
                                💰 Expense Tracker
                            </h1><p>Expense List</p>
                        {filteredExpense.map((exp, index) => (
                            
                       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-gray-100 hover:bg-blue-100 rounded-xl p-4 transition duration-200 shadow-sm">
                            {editIndex === index ? (
                                <div className="flex flex-col gap-1 w-full">

                                <input
                                value={editExpense.name}
                                onChange={(e)=>
                                setEditExpense({...editExpense,name:e.target.value})
                                }
                                />

                                <input
                                type="number"
                                value={editExpense.price}
                                onChange={(e)=>
                                setEditExpense({...editExpense,price:e.target.value})
                                }
                                />

                                <select
                                value={editExpense.categories}
                                onChange={(e)=>
                                setEditExpense({...editExpense,categories:e.target.value})
                                }
                                >
                                    <option>Food</option>
                                    <option>Transport</option>
                                    <option>Study</option>
                                </select>

                                <label>
                                <input
                                type="checkbox"
                                checked={editExpense.important}
                                onChange={(e)=>
                                setEditExpense({...editExpense,important:e.target.checked})
                                }
                                />

                                Important
                                </label>

                                <button
                                onClick={()=>{
                                setExpense(
                                expense.map((t,i)=>
                                i===index
                                ? {...t,...editExpense}
                                : t
                                )
                                );

                                setEditIndex(null);

                                setEditExpense({
                                name:"",
                                price:"",
                                categories:"",
                                important:false
                                });

                                }}
                                >
                                Save
                                </button>

                                </div>
                            ) : (
                            <div className="w-[90%] px-2">
                                <p className="break-words text-gray-700 font-medium flex-1"
                                key={index}>
                                    {index+1}. {exp.name} ₱{exp.price} [{exp.categories}] {exp.important ? "(Important)" : ""}</p>
                                    </div> )}
                                    <div className="px-2" onClick={()=> {
                                        setEditIndex(index)
                                        setEditExpense({
                                        name: exp.name,
                                        price: exp.price,
                                        categories: exp.categories,
                                        important: exp.important,
                                    });
                                    }}>
                                        <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg shadow transition">Edit
                                    </button></div> 
                        </div>))}
                        
                        </div>)}
                            {expense.length === 0 ? "" : (<p className="text-center text-2xl font-bold text-green-600 py-4">Total: ₱{total}</p>)}
                            
                            {selectedExpense ? (
                               <div className="bg-blue-50 border border-blue-200 rounded-xl shadow p-4 my-5">
                            <p className="font-bold text-lg text-blue-700">Selected Expense: {selectedExpense.name}</p>
                            <p>Price: ₱{selectedExpense.price}</p>
                            <p>Categories: {selectedExpense.categories}</p>
                            <p>{selectedExpense.important && "Important"}</p>
                                 </div>) : (
                             <p className="py-5">No Selected Expense</p>)}
                                 <div 
                                 className="w-full flex flex-col justify-center items-center">
                                    <div className="flex flex-col gap-3 mt-4">
                                    <input 
                                    className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" value=   {text} onChange={(e) => setText(e.target.value)} placeholder="Enter Expense"></input>
                                    <input 
                                    className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Enter the cost"></input>
                                    <input 
                                    className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" onInput={(e) => setSearchTerm(e.target.value)} placeholder="🔍 Search expense..."></input>
                                  
                            <select className="w-full rounded-lg border border-gray-300 p-3 bg-white" value={category} onChange={(e) => 
                                setCategory(e.target.value)}>
                                <option value="Food">Food</option>
                                <option value="Transport">Transport</option>
                                <option value="Study">Study</option>
                            </select>
                              </div>
                            </div>
                            
                        <div
                         className="w-full flex flex-col justify-center">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                        <button
                        className="w-full bg-blue-500 hover:bg-blue-600 active:scale-95 transition text-white font-semibold py-3 rounded-xl shadow" onClick={addBtn}>Add</button>
                        <button 
                        className="w-full bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition text-white font-semibold py-3 rounded-xl shadow"onClick={selectBtn}>Select</button>
                        <button 
                        className="w-full bg-yellow-500 hover:bg-yellow-600 active:scale-95 transition text-white font-semibold py-3 rounded-xl shadow"onClick={importantBtn}>Toggle Important</button>
                        <button className="w-full bg-red-500 hover:bg-red-600 active:scale-95 transition text-white font-semibold py-3 rounded-xl shadow"onClick={deleteBtn}>Delete Selected</button>
                        <button className="w-full bg-gray-700 hover:bg-black active:scale-95 transition text-white font-semibold py-3 rounded-xl shadow sm:col-span-2"
                        onClick={clearBtn}>Clear All</button>
                        </div>
                        </div>
            </div>
        </div>
    )
}
export default Expense;