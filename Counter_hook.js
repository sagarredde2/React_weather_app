import { toHaveFocus } from "@testing-library/jest-dom/dist/matchers";
import React, {useState} from "react";

function Counter_hook () {
    const [count, newCount] = useState(0);

    const increase = () => {
        newCount (e => e + 1);
    }

    const decrease = () => {
        newCount (e => e - 1);
    }

    return (
        <div>
            <button onClick={increase}> + </button>
            <button onClick={decrease}> - </button>
            <h1>{count}</h1>
            <button onClick={()=> newCount(0)}> Reset </button>
        </div>
    )
}

export default Counter_hook;