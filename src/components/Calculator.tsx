import {  useState } from "react";
function Calculator(){
    const[result,setResult]=useState('0')
    const toggleSign=()=>{
        let val=Number(result)*-1
        setResult(val.toString())
    }
    const handlePercentage = () => {
  let exp = result;
  const match = exp.match(/(-?\d+\.?\d*)([+\-×÷])(\d+\.?\d*)$/);
  if (match) {
    let prev = parseFloat(match[1]);
    let curr = parseFloat(match[3]);
    let percentValue = (prev * curr) / 100; 
    setResult(percentValue.toString());
  } else {
    setResult((parseFloat(result) / 100).toString());
  }
};
const removeSpace=()=>{
        let val=result+''
        if(val=='Invalid Expression' || val=='Infinity' ||val=='NaN'){
            val='0'
            setResult(val)
        }
       else if(val.length>1)
        val=val.slice(0,val.length-1)
        else
        val='0';
        setResult((val)+'')
    }
    const clearExpression=()=>{
        setResult(0+"")
    }
    const handleInput=(val:any)=>{
    if (result === "Invalid Expression" || result == "Infinity") {
    setResult(val);
}
 else if (result === "0") {
    setResult(val.toString());
    return;
  }
  else
  setResult(result + val.toString());
    }
    const divideByOne=()=>{
        let val=1/Number(result)
        console.log(val)
        setResult(val.toString())
    }
    const square=()=>{
        let val=Math.pow(Number(result),2)
        console.log(val)
        setResult(val.toString())
    }
    const squareRoot=()=>{
        let val=Math.sqrt(Number(result))
        console.log(val)
        setResult(val.toString())
    }
const calculate=()=>{
        let val=result;
        val=val.replaceAll('×','*')
        val=val.replaceAll('÷','/')
        try {
    const res = Function("return " + val)();
    if (!isNaN(res)) {
      setResult(res);
    } else {
      setResult("Invalid Expression");
    }
  } catch {
    setResult("Invalid Expression");
  }
  }
    return(
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-screen w-full flex justify-center items-center">
            <div className="bg-white w-80 sm:w-130 rounded p-[30px]">
                <div className="text-right  mt-4 pr-[20px] break-words">
                    <h3 className="text-[35px] font-bold ">{result=='NaN'?"Invalid Expression":result}</h3>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-4 mb-5">
                        <div className="flex justify-center"><button type="button" className="bg-[#f64141] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[23px] hover:bg-[#fe0000] " onClick={clearExpression}>C</button></div>
                        <div className="flex justify-center"><button type="button" className="bg-[#c1c1c1fc] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[23px] hover:bg-[#989696]" onClick={handlePercentage}>%</button></div>
                        <div className="flex justify-center"><button type="button" className="bg-[#c1c1c1fc] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[23px] hover:bg-[#989696]" onClick={toggleSign}>±</button></div>
                        <div className="flex justify-center"><button type="button" className="bg-[#c1c1c1fc] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[23px] hover:bg-[#989696]" onClick={removeSpace}>⌫</button></div>
                    </div>
                    <div className="grid grid-cols-4 mb-5">
                        <div className="flex justify-center"><button type="button" className="bg-[#c1c1c1fc] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[23px] hover:bg-[#989696]"  onClick={divideByOne} >1/x</button></div>
                        <div className="flex justify-center"><button type="button" className="bg-[#c1c1c1fc] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[23px] hover:bg-[#989696]" onClick={square}>x²</button></div>
                        <div className="flex justify-center"><button type="button" className="bg-[#c1c1c1fc] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[23px] hover:bg-[#989696]" onClick={squareRoot}>√x</button></div>
                        <div className="flex justify-center"><button type="button" className="bg-[#f57c09] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[30px] hover:bg-[#ff4400]" onClick={()=>handleInput('÷')}>÷</button></div>
                    </div>
                    <div className="grid grid-cols-4 mb-5">
                        <div className="flex justify-center"><button type="button" className="bg-[#d0c8c8] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[23px] hover:bg-[#dbd6d6]"  onClick={()=>handleInput(7)} >7</button></div>
                        <div className="flex justify-center"><button type="button" className="bg-[#d0c8c8] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[23px] hover:bg-[#dbd6d6]" onClick={()=>handleInput(8)}>8</button></div>
                        <div className="flex justify-center"><button type="button" className="bg-[#d0c8c8] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[23px] hover:bg-[#dbd6d6]" onClick={()=>handleInput(9)}>9</button></div>
                        <div className="flex justify-center"><button type="button" className="bg-[#f57c09] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[30px] hover:bg-[#ff4400]" onClick={()=>handleInput('×')}>×</button></div>
                    </div>
                    <div className="grid grid-cols-4 mb-5">
                        <div className="flex justify-center"><button type="button" className="bg-[#d0c8c8] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[23px] hover:bg-[#dbd6d6]" onClick={()=>handleInput(4)}>4</button></div>
                        <div className="flex justify-center" ><button type="button" className="bg-[#d0c8c8] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[23px] hover:bg-[#dbd6d6]" onClick={()=>handleInput(5)}>5</button></div>
                        <div className="flex justify-center"><button type="button" className="bg-[#d0c8c8] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[23px] hover:bg-[#dbd6d6]" onClick={()=>handleInput(6)}>6</button></div>
                        <div className="flex justify-center"><button type="button" className="bg-[#f57c09] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[30px] hover:bg-[#ff4400]" onClick={()=>handleInput('-')}>-</button></div>
                    </div>
                    <div className="grid grid-cols-4 mb-5">
                        <div className="flex justify-center"><button type="button" className="bg-[#d0c8c8] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[23px] hover:bg-[#dbd6d6]" onClick={()=>handleInput(1)}>1</button></div>
                        <div className="flex justify-center"><button type="button" className="bg-[#d0c8c8] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[23px] hover:bg-[#dbd6d6]" onClick={()=>handleInput(2)}>2</button></div>
                        <div className="flex justify-center"><button type="button" className="bg-[#d0c8c8] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[23px] hover:bg-[#dbd6d6]" onClick={()=>handleInput(3)}>3</button></div>
                         <div className="flex justify-center"><button type="button" className="bg-[#f57c09] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[30px] hover:bg-[#ff4400] "  onClick={()=>handleInput('+')}>+</button></div>
                    </div> 
                    
                    <div className="grid grid-cols-4 mb-5">
                        <div className="flex justify-center"><button type="button" className="bg-[#d0c8c8] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[23px] hover:bg-[#dbd6d6]" onClick={()=>handleInput('00')}>00</button></div>
                        <div className="flex justify-center"><button type="button" className="bg-[#d0c8c8] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[23px] hover:bg-[#dbd6d6]" onClick={()=>handleInput(0)}>0</button></div>
                        <div className="flex justify-center"><button type="button" className="bg-[#d0c8c8] h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[23px] hover:bg-[#dbd6d6]" onClick={()=>handleInput('.')}>.</button></div>
                        <div className="flex justify-center"><button type="button" className="bg-[#427df1] text-white h-[55px] w-[55px] text-[20px] sm:h-[70px] sm:w-[80px] rounded text-[35px] hover:bg-[#0054f9]" onClick={calculate}>=</button></div>
                    </div>  
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}
export default Calculator