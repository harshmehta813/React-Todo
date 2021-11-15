import {useState} from "react";
import Header from ".Components/Header";
import Button from ".Components/Button";

export default function Counter(){
    const [counter, setCounter] = useState(0)

  const handleClick = (value) => {
    setCounter(counter+value)
  }
  
  return (
      <div className="App">
        <Header title={"Counter"} />
        <Header title={Counter} />
        <Button title="ADD" onClick={() => handleClick(1)} />
        <Button title="REDUCE" onClick={() => handleClick(-1)} />
      </div>
  )
}