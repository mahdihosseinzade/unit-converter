import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {

  const [result, setResult] = useState(0);
  
  const [from,setFrom]=useState(1);
  const [to,setTo]=useState(1);
  const [input,setInput]=useState(0);

  const onChangeInput = (e)=>{
    setInput(Number(e.target.value));
  }

  const onChangeSelect = (e) => {
    if(e.target.id==='From-select'){
      setFrom(Number(e.target.value));
    } else if (e.target.id === 'To-select'){
      setTo(Number(e.target.value));
    }
  }

  const onClickBTN =()=>{
    let newResult = (input*from)/to;
    setResult(newResult);
  }


  return (
    <>
      <div className="converter-form">
        {/* Input with label "Amount" here */}
        <Input label="Amount" onChange={onChangeInput}/>

        <div className="row">
          {/* Selects with labels "From" and "To" here */}
          <Select label="From" items={units} onChange={onChangeSelect}/>
          <Select label="To" items={units} onChange={onChangeSelect}/>

          <button onClick={onClickBTN}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
