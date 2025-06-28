import "../static/css/mainButton.css";

export default function Lesson1Content3() {
    
    return (
        <>
        <h2 className="orange-text underline">Writing Markup with JSX</h2>
        <p>In this section, we talk about a little bit of the syntax and structure. Tiny little bit about JSX. 
            Yea, we should mix HTML and JavaScript together. Who did invent 'the logic and markup to stay together'? 
            While making frontend and backend divided. <span className="red-text">What kind of idea is this? OMG</span>
        </p>
        <ol className="custom-list">
            <h3>Whatever! We move on.</h3>
            <li>Ah good thing! we can use converter for changing HTML to JSX.</li>
            <li>React components group rendering logic together with markup because they are related.(That's what they claim).</li>
            <li>Nah! not that important. Error messages will often point you in the right direction to fixing your markup.
                (Which one doesn't?)</li>
        </ol>
        <p>Oh! we have nothing to say in this lesson. Really!!!</p>
        <ol className="custom-summary">
            <h3>Since we don't have that much to say. We return three rules</h3>
            <li>Return a single root element</li>
            <li>Close all the tags</li>
            <li>Use camelCase for almost everything</li>
        </ol>
        </>
    )
}