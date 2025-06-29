import '../static/css/mainButton.css';

export default function Lesson1Content2() {
  return (
    <>
        <h2 className='orange-text underline'>Importing and Exporting Components</h2>
        <p>In this section, we talk about importing and exporting components in react. And also rules.</p>
        <ol className='custom-list'>
            <h3>We will cover some topics here.</h3>
            <li>What a root component file is.</li>
            <li>How to import and export a component.</li>
            <li>When to use default and named imports and exports.</li>
            <li>How to import and export multiple components from one file.</li>
            <li>How to split components into multiple files.</li>
        </ol>
        <h3>What is a root component file?</h3>
        <p>As far as I know, the root component file is the App.jsx. Because in main.jsx we render the App component.
            And inside the App component, we use other components using imports. So the root component file? App.jsx
            (I think). But it said according to set up and structure of your project it could be different. Like in 
            Next.js (idk! just reading the lesson content).
        </p>
        <h3>How to import and export a component.</h3>
        <p>Yeah! This is clear. Using <code>import</code> and <code>export</code> statements.</p>
        <h3>When to use default and named imports and exports?</h3>
        <p>We can use default exports when we want to export a single component from a file. 
            And named exports when we want to export multiple components from a file.
        </p>
        <h3>How to import and export multiple components from one file?</h3>
        <p>We can export multiple components from a file using named exports. 
            And we can import them using named imports.
        </p>
        <h3>How to split components into multiple files?</h3>
        <p>We can split components into multiple files by creating a new file for each component.
        </p>
        <ol className='custom-summary'>
            <h3>Just a little to consider</h3>
            <li>We can only export one default component per file.</li>
            <li>But we can export multiple components called named components</li>
            <li>When importing, we can use either default or named imports depending on how the component was exported.</li>
            <li>For default exports, we can import the component without using curly braces.</li>
            <li>For named exports, we must use curly braces when importing.</li>
        </ol>
        <hr />
    </>
  );
}