import { useState, useEffect } from "react";

function TodoPrac() {
    const [todo, setTodo] = useState(() => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todo));
    }, [todo])
    const maxLength = 30;
    const [text, setText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [editText, setEditText] = useState("");
    const [editngIndex, setEditingIndex] = useState(null);
    const addBtn = () => {
        if(!text.trim()) return;
        setTodo([...todo, {name: text, status: false}])
        setText("");
    }
    const selectBtn = () => {
        if (todo.length === 0) return;

        let nextIndex = currentIndex + 1;   
        if(nextIndex >= todo.length){
            nextIndex = 0;
        }
        setCurrentIndex(nextIndex);
        setSelectedTodo(todo[nextIndex]);
        
    }
    const markBtn = () => {
        if(!selectedTodo) return;
        setTodo(todo.map((task) => task === selectedTodo ? {...task, status: true} : task));
        setSelectedTodo(null);
    }
    const deleteIndex = (indextoDelete) => {
        setTodo(todo.filter((_, index) => index !== indextoDelete))
    }
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#352f5b] font-['Josefin_Sans'] text-white">
            <div className="grid flex-wrap gap-4 w-full max-w-2xl justify-center items-center ">
                <div >
                <div className="max-h-[300px] overflow-auto">
                {todo.length === 0 ? (<p className="px-2">No Task</p>) : (<div>
                    <p className="px-2 text-3xl font-medium text-center mb-10">Todo List</p> 
                    {todo.map((task, index) => (<div className="flex px-2 bg-[#423a6f] p-2 max-w-100 relative my-2 justify-between min-w-50 w-full"><p className="mr-6 max-w-full max-h-5" key={index}> {index+1}. {task.name} - {task.status ? "Done" : "Not Done"}</p> <div className="relative z-[1] bg-[#423a6f]"> <button className="flex relative right-4 z-[2] bg-[#423a6f]" onClick={() => deleteIndex(index)}>Delete</button> </div> </div>))}</div>)}</div>
                    <div className="px-2 text-xl">{selectedTodo ? (<div className="px-2"><p>Selected Task: {selectedTodo.name}</p><p>Status: {selectedTodo.status ? "Done" : "Not Done"}</p></div>) : (<p>No selected Task</p>)}</div> </div>
                    <div className="grid">
                        <div className="flex justify-center">
            <input className=" bg-white text-black px-2" type="text" value={text} onChange={(e) => {if(e.target.value.length <= maxLength){setText(e.target.value)}} }></input> </div>
            <div className="grid gap-2 mt-4 text-xl">
            <button className="hover:bg-[#423a6f]  transition-colors duration-200" onClick={addBtn}>Add</button>
            <button className="hover:bg-[#423a6f]  transition-colors duration-200" onClick={selectBtn}>Select</button>
            <button className="hover:bg-[#423a6f]  transition-colors duration-200" onClick={markBtn}>Mark as Done</button>
            </div>
            </div>
           
            </div>
        </div>
    )
}

export default TodoPrac;