import "../static/css/mainButton.css";
import PackingList from "../components/conditionalRendering";

export default function Lesson1Content6() {

    return (
        <>
            <h2 className="orange-text underline">Conditional Rendering</h2>
            <PackingList />
            <p>This packing list is the result of conditional rendering in React. Check out the code in 
                "/src/components/conditionalRendering.jsx".
            </p>
            <ol className="custom-summary">
                <h3>Yeah! Not that much, so this is summary</h3>
                <li>We can render using if else.</li>
                <li>Or Ternary operator.</li>
                <li>Or Logical && operator. <span className="red-text">I dont know how to use it yet. Probably I dont care.</span></li>
            </ol>
            <hr />
        </>
    )
}