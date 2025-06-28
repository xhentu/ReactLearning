import "../static/css/mainButton.css";
import CountDownStopwatch from "../components/countDownStopwatch";
import PassingVariable from "../components/passingVariable";


const user = {
    name: "John Doe",
    age: 30,
    location: "New York"
    };
export function UserProfile() {
    return (
        <div className="tested-code">
            <h1>{user.name}</h1>
            <p>Age: {user.age}</p>
            <p>Location: {user.location}</p>
        </div>
    );
}

export default function Lesson1Content4() {
    const codeExample1 = `
    const userName = "John Doe";
    export default function UserProfile() {
    return (
        <>
        <h1>{userName}</h1>
        </>
    )}
    `;
    const codeExample2 = `
    const user = {
        name: "John Doe",
        age: 30,
        location: "New York"
    };
    export default function UserProfile() {
        return (
            <>
                <h1>{user.name}</h1>
                <p>Age: {user.age}</p>
                <p>Location: {user.location}</p>
            </>
        );
    }
    `;
    return (
        <>
        <h2 className="orange-text underline">JavaScript in JSX with Curly Braces</h2>
        <p>Yes! Finally, the thing we waited for has arrived. The power of putting together the logic and templating! 
            We can use JS functions, variables, and expressions inside JSX. What does that curly braces mean? It mean passing 
            variables to templates.</p>
        <ul className="custom-list">
            <h3>We will talk about those things.</h3>
            <li>How to pass strings with quotes.</li>
            <li>How to reference a JavaScript variable inside JSX with curly braces.</li>
            <li>How to call a JavaScript function inside JSX with curly braces.</li>
            <li>How to use a JavaScript object inside JSX with curly braces.</li>
        </ul>
        <p>When we want to pass a string attribute to JSX, we put it in single or double quotes. Just like JS. But, when we 
            pass a variable we use curly braces. Like that. It is just the templating syntax. Even this code below is passed 
            as a variable declared. The biggest advantage of able to use variables is that we can manipulate the data inside
            the template. Right?
        </p>
            <pre>
                <code>
                    {codeExample1}
                </code>
            </pre>
        <p>
            This time we will use a Javascript Object as a prop and pass it to the component. And we will parse it inside the 
            component. Lets do it! This UserProfile component is a simple example of how to use an object in JSX.  
            <span className="red-text"> Nope, this doesn't work as a prop and only pass to the component as a variable (an object).
                Passing prop is passing directly to function as parameter. Right?
            </span>
        </p>

            <UserProfile />
            <pre>
                <code>
                    {codeExample2}
                </code>
            </pre>
        {/* <CountDownStopwatch /> */}
        <PassingVariable />
        <p>
            We achieve this passing variable component by using javascript and DOM manipulation. But we cant directly passed
            the variable to the template using curly braces because of react's restrictions. If we want to use functions and 
            variables inside JSX, we might need to use state managements (this is as far as I know). And the function above is 
            not recommended to use in react. Because it directly manipulates the DOM. idk! Whatever lets go on for now. 
            Lets go back to building components.
        </p>
        <p>Yeaaaa, this lesson only talk about passing variables. Not props. But whatever, it is basic, right? So we 
            stop it here. And no recap for now!</p>

        </>
    )
}