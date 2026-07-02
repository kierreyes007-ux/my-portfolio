import { useState } from "react";

function Calculator() {
    const buttonStyle = {
        width: "60px",
        border: "2px solid black",
        height: "65px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        fontWeight: "bold",
        borderRadius: "50px",
        backgroundColor: "#303538"
        
    }
    const buttonOperator = {
       width: "60px",
        border: "2px solid black",
        height: "65px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
        fontWeight: "bold",
        borderRadius: "50px",
        backgroundColor: "#303538"
    }
    const [display, setDisplay] = useState(false);
    const [currentInput, setCurrentInput] = useState("");
    const [previousInput, setPreviousInput] = useState("");
    const [operator, setOperator] = useState(null);
    const format = (num) => Math.round(num * 100) / 100;
    const appendNumber = (number) => {
        setCurrentInput(currentInput + number);
    }
    const chooseOp = (op) => {
        if(!currentInput) return;
        if(previousInput !== ""){
            calculate();
        }
       
        setOperator(op);
        setPreviousInput(currentInput);
        setCurrentInput("");
         setDisplay(true);
    }
    const calculate = () => {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if(isNaN(current) || isNaN(prev)) return;

        switch(operator) {
            case "+":
                 result = format(prev + current);
                break;
            case "-":
                 result = format(prev - current);
                break;
            case "*":
                 result = format(prev * current);
                break;
            case "/":
                 result = format(prev / current);
                break;
                default:
                    return;
        }
       
        setCurrentInput(result.toString());
        setOperator(null);
        setPreviousInput("");
        setDisplay(false);

    }
    const clearDisplay = () => {
        setPreviousInput("");
        setCurrentInput("");
        setOperator(null);
    }
   
    return (
        <div className="h-screen w-screen grid justify-center items-center text-white bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-[#111827] relative">
            <div>
             <h2 className=" ml-10 text-4xl pb-10">Calculator App</h2>
            <div className="mx-2 border-2 max-w-74 max-h-97 bg-[#0F1417] relative ">
               
                <div className="flex w-[100%] justify-center mt-3 h-15 text-3xl "><p className="text-base absolute right-6 top-16">{display &&    `${previousInput} ${operator || ""} ${currentInput}`}</p><input className=" w-[100%] text-right px-2 pr-4" value={currentInput} readonly></input></div>
                
                <div className="buttonCase px-5 flex w-[100%] justify-center h-[full]  flex-wrap items-center gap-1 my-5" >
                    <button style={buttonStyle} onClick={() => appendNumber("7")}>7</button>
                    <button style={buttonStyle} onClick={() => appendNumber("8")}>8</button>
                    <button style={buttonStyle} onClick={() => appendNumber("9")}>9</button>
                    <button style={buttonOperator} onClick={() => chooseOp("/")}>÷</button>
                    <button style={buttonStyle} onClick={() => appendNumber("4")}>4</button>
                    <button style={buttonStyle} onClick={() => appendNumber("5")}>5</button>
                    <button style={buttonStyle} onClick={() => appendNumber("6")}>6</button>
                    <button style={buttonOperator} onClick={() => chooseOp("*")}>*</button>
                    <button style={buttonStyle} onClick={() => appendNumber("1")}>1</button>
                    <button style={buttonStyle} onClick={() => appendNumber("2")}>2</button>
                    <button style={buttonStyle} onClick={() => appendNumber("3")}>3</button>
                    <button style={buttonOperator} onClick={() => chooseOp("+")}>+</button>
                    <button style={buttonStyle} onClick={() => appendNumber("0")}>0</button>
                    <button style={buttonOperator} onClick={clearDisplay}>C</button>
                    <button style={buttonOperator} onClick={() => chooseOp("-")}>-</button>
                    <button style={buttonOperator} onClick={calculate}>=</button>  
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default Calculator;