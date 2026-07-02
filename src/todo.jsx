import { useState, useEffect} from "react";

function Todo() { 
  const [text, setText] = useState("");
  const [debounce, setDebounce] = useState("");
  useEffect(()=>{
    const timer = setTimeout(() => {
      setDebounce(text)
    }, 500 )
    return () => clearInterval(timer);
  }, [text])
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
     
      <p>{debounce}</p>
      <input className="border-2" value={text} onChange={(e) => setText(e.target.value)}></input>
    </div>
  )
  
}
export default Todo;