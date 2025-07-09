import "../static/css/mainButton.css";
import { useState } from "react";

export default function AButton({ children, action }) {


    return (
        <>
            <button onClick={action}>{children}</button>
        </>
    );
}

// lets create count button
export function CountButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
        console.log(`Count is now: ${count + 1}`);
    }
    
    return (
        <button onClick={handleClick}>
            Count: {count}
        </button>
    );
}

// thats does'nt work


