import React, {useState} from "react";
import './App.css';
import {Button} from "./Button";
import {Display} from "./Display";

const buttonNames = ["0", "Increase", "Decrease"]

function App() {
    const [counter, setCounter] = useState<number>(0)

    const onClickCounterHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
        if(event.currentTarget.innerText === "Decrease") {
            setCounter(counter - 1)
        } else if(event.currentTarget.innerText === "Increase") {
            setCounter(counter + 1)
        } else {
            setCounter(0)
        }
    }
    return (
        <div className="App">
            <Display counter={counter}/>
            <Button onClickHandler={onClickCounterHandler} names={buttonNames}/>
        </div>
    );
}

export default App;
