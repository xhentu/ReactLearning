// import '../../../static/css/mainButton.css';
import '../../static/css/mainButton.css'; // Ensure the correct path to your CSS file

export default function Lesson1Content1() {
  return (
    <>
        <h2 className='orange-text underline'>Your First Component</h2>
        <p>It talks about creating a simple component that can be exported and imported into another component or pages
            or directly into the App.js file. When we create react UI components, we need to follow some rules.</p>
        <ol className='custom-summary'>
            <h3>Just follow some rules.</h3>
            <li>Component names must start with a capital letter.</li>
            <li>Components can be defined as functions or classes.</li>
            <li>We can only return a single JSX element from a component using a div or react fragment</li>
            <li>We need to use camel case for HTML attributes.</li>
            <li>Return statements can be written all on one line but  if your markup isn’t all on the same line as
                 the return keyword, you must wrap it in a pair of parentheses. 
                 Without parentheses, any code on the lines after return will be ignored!</li>
            <li>
                 <code>&lt;section&gt;</code> is lowercase, so React knows we refer to an HTML tag.<br />
                 <code>&lt;Profile /&gt;</code> starts with a capital P, so React knows that we want to use our component called Profile.
            </li>
            <li>Components can render other components, but you must never nest their definitions. 
                It can cause bugs and make a slow process.</li>
            

        </ol>
        <p>This is as far as I have gotten with the lesson content. Maybe we need to add later.</p>
        <hr />
    </>
  );
}