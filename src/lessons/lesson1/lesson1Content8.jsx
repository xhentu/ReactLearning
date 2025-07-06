import '../../static/css/mainButton.css';

export default function Lesson1Content8() {

    return (
        <>
            <h2 className="orange-text underline">Keeping your component pure</h2>
            <p>Yes, this topic is about keeping the component pure.</p>
            <ul className="custom-list">
                <li>Mind its own business.</li>
                <li>Same input, same output.</li>
            </ul>
            <p>A component should mind its business like y = 2x, if we make input x, it will just return 2 * x  as y no matter 
                the condition. So that the components dont interfere with other components rendering actions. Like we talked
                in Rendering list lesson. We dont change preexisting variable before rendering. And next, lets say we change 
                a variable outside the function and render that variable through a component, shits can happen. <span 
                className="red-text">A component minds its own business.</span>
            </p>
            <p>Yes, lets stop it for now. We got to recap.</p>
            <ol className="custom-summary">
                <li>Yes, Totally! A component should be pure. And it means it minds its own business and give the same 
                    output as JSX.
                </li>
                <li>Rendering can happen at anytime, anywhere. So <span className="red-text">a component should not rely on 
                    another components rendering sequences.</span></li>
                <li>
                    We should not mutate any of the inputs that our components used for rendering. That includes prop, state 
                    and context. To update the screen, we use state management in stead of mutating preexisting objects.
                </li>
                <li>Strive to express your component’s logic in the JSX you return. When you need to “change things”, you’ll 
                    usually want to do it in an event handler. As a last resort, you can useEffect.
                    <span className="red-text"> I dont really understand what it mean clearly. But save it for later.</span>
                    </li>
                <li>
                    <span  className="red-text">
                        One thing I know as extra reading this page is that React offers Strict Mode which 
                    render a component twice during developement. <b> By calling the component functions twice, Strict Mode 
                        helps find components that break these rules.</b> But it said it doesn't effect the performance in 
                        production as it doesn't slow down the process.
                    </span>
                </li>
            </ol>
            <hr />
        </>
    )
}