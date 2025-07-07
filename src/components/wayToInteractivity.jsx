import "../static/css/mainButton.css";

export default function AButton({ children, action }) {


    return (
        <>
            <button onClick={action}>{children}</button>
        </>
    );
}

// lets create count button
export function CountButton({ count, setCount }) {
    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}
// thats doesn't work


