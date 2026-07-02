import { useState, useEffect } from "react";

function Prac() {
    const maxLength = 45;
    const [editingIndex, setEditingIndex] = useState(null);
    const [editText, setEditText] = useState("");
    const [text, setText] = useState("");
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [todo, setTodo] = useState(() => {
        const saved = localStorage.getItem("task");
        return saved ? JSON.parse(saved) : [];
    });
    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(todo));
    }, [todo])
    const addBtn = () => {
        if(!text.trim()) return;
        setTodo([...todo, {name: text, status: false}]);
        setText("");
    }
    const selectBtn = () => {
        if(todo.length === 0) return;
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
        setTodo(todo.filter((_, index) => index !== indextoDelete));
    }
    
      return (
  <div className="flex flex-col justify-center items-center min-h-screen bg-[#352f5b] font-['Josefin_Sans'] text-white px-3 py-6">
    
    <h1 className="text-2xl sm:text-3xl md:text-4xl pb-4 text-center">
      Todo List App
    </h1>

    <div className="bg-[#2b2550] w-full max-w-md sm:max-w-lg md:max-w-2xl h-[85vh] flex flex-col rounded-xl overflow-hidden">

      {/* TASK LIST */}
      <div className="flex-1 overflow-y-auto p-3">
        {todo.length === 0 ? (
          <p className="text-lg text-center">No Task</p>
        ) : (
          <>
            <p className="text-lg text-center mb-2">Task:</p>

            {todo.map((task, index) => (
              <div
                key={index}
                className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 px-3 py-2 my-2 bg-[#423a6f] rounded"
              >
                {editingIndex === index ? (
                  <>
                    <input
                      className="border px-2 py-1 w-full text-white"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <button
                      className="bg-green-600 px-3 py-1 rounded"
                      onClick={() => {
                        setTodo(
                          todo.map((t, i) =>
                            i === index ? { ...t, name: editText } : t
                          )
                        );
                        setEditingIndex(null);
                        setEditText("");
                      }}
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-sm sm:text-base">
                      {index + 1}. {task.name} - {task.status ? "Done" : "Not Done"}
                    </p>

                    <div className="flex gap-3 sm:gap-5">
                      <button
                        className="text-blue-300"
                        onClick={() => {
                          setEditingIndex(index);
                          setEditText(task.name);
                        }}
                      >
                        Edit
                      </button>

                      <button
                        className="text-red-400"
                        onClick={() => deleteIndex(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </>
        )}
      </div>

      {/* CONTROLS */}
      <div className="bg-[#423a6f] p-3 flex flex-col gap-2">

        {/* Selected task */}
        <div className="text-center">
          {selectedTodo ? (
            <>
              <p className="text-sm sm:text-base">
                Selected Task: {selectedTodo.name}
              </p>
              <p className="text-sm">
                Status: {selectedTodo.status ? "Done" : "Not Done"}
              </p>
            </>
          ) : (
            <p className="text-sm">No Selected Task</p>
          )}
        </div>

        {/* Input */}
        <input
          className="border px-2 py-1 w-full text-white"
          value={text}
          onChange={(e) => {
            if (e.target.value.length <= maxLength) {
              setText(e.target.value);
            }
          }}
          placeholder="Enter task..."
        />

        {/* Buttons */}
        <div className="grid grid-cols-3 gap-2 text-sm">
          <button onClick={addBtn} className="bg-[#352f5b] py-1 rounded">
            Add
          </button>
          <button onClick={selectBtn} className="bg-[#352f5b] py-1 rounded">
            Select
          </button>
          <button onClick={markBtn} className="bg-[#352f5b] py-1 rounded">
            Done
          </button>
        </div>
      </div>
    </div>
  </div>
);
}

export default Prac;