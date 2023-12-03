import React ,{useState} from "react";
import { Output } from "./output";
import './Layout.css'
export const Layout = () => {
    let [input,setInput] = useState('0')
    let [result,setResult] = useState('')

  function  handleClick(event) {
const value=event.target.value
if(value ==='='){
    if(input !== ''){
        let res=''
        try{
            res=eval(input)
        }catch(err){
            setResult('Math Err')
        }
        if(res === undefined){
            setResult('Math Err')
        }else{
            setResult(input + '=')
            setInput(res)
        }
    }
}

else if(value === 'C'){
    setResult('')
    setInput('0')

}else if(value === 'DEL'){
let str=input
str=str.substring(0,str.length-1)
setInput(str)

}else if(input === '0'){
setInput(value)
}else{
    
    setInput((input +=value))
}


    }
  return (
    <div className="frame">
      <div className="calculator">
        <br></br>
        <Output user={input} answer={result} />
        <div className="keys">
          <input
            type="button"
            value={"C"}
            className="button clear"
            onClick={handleClick}
          ></input>

          <input
            type="button"
            value={"DEL"}
            className="button clear"
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"%"}
            className="button operator"
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"/"}
            className="button operator"
            onClick={handleClick}
          ></input>

          {/* //2nd Line */}

          <input
            type="button"
            value={"7"}
            className="button"
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"8"}
            className="button"
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"9"}
            className="button"
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"*"}
            className="button operator"
            onClick={handleClick}
          ></input>

          {/* third line */}
          <input
            type="button"
            value={"4"}
            className="button"
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"5"}
            className="button"
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"6"}
            className="button"
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"-"}
            className="button operator"
            onClick={handleClick}
          ></input>

          {/* 4th line */}
          <input
            type="button"
            value={"1"}
            className="button"
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"2"}
            className="button"
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"3"}
            className="button"
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"+"}
            className="button operator"
            onClick={handleClick}
          ></input>

          {/* 5th line */}
          <input
            type="button"
            value={"0"}
            className="button"
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"."}
            className="button"
            onClick={handleClick}
          ></input>
          <input
            type="button"
            value={"="}
            className="button equal-sign"
            onClick={handleClick}
          ></input>
        </div>
      </div>
    </div>
  );
};
