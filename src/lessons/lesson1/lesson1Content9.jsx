import '../../static/css/mainButton.css';

export default function Lesson1Content9() {

    return (
        <>
        <h2 className="orange-text underline">UI as a tree</h2>
        <p>I think this part is mainly about nesting the components. like this.</p>
        <pre>
            <code>
                {`<Navigation>
    <Logo />
    <NavItems />
</Navigation>`}
            </code>
        </pre>
        <p>What I really learned in this chapter is we can nest components using react components as same as HTML tags 
            with opening and closing tags. What an eye opener! Haha. And also we can create our own tags. And it is just 
            used like HTML tags. The code above! That is actually just like creating own tag and using it. React but used 
            like HTML, right?
        </p>
        <p>But what actually said is </p>
        <ul className="custom-list">
            <li>How react sees component structures.</li>
            <li>What a render tree is and what it is used for.</li>
            <li>What a module dependency tree is and what it is used for.</li>
        </ul>
        <p>But whatever! I dont understand some part. In last lesson, we talked about how we should <span className="red-text">
            not</span> make a component relied on another component rendering sequences. But in this lesson we talk about 
            nesting components. Maybe we can nest and make a parent children relationship, but not sibling and pass props. I dont 
            know.
        </p>
        <p>Whatever! Lets move on. So we have 3 components. {`<A />, <B /> and <C />`}. {`<A />`} is parent of {`<B /> and <C />.`}
            <span className="red-text"> Just imagine it as a tree node.</span> 
        </p>
        <p>
            Like browsers and mobile platforms, React also uses tree structures to manage and model the relationship between 
        components in a React app. These trees are useful tools to understand how data flows through a React app and how to 
        optimize rendering and app size. <span className="red-text">Is that clear?</span> Yes! I am clear. It is render tree.
        </p>
        <p>That paragraph is good. I see it clear at some point.</p>
        <p className="red-text">
            Although render trees may differ across render passes, these trees are generally helpful for identifying what the 
            top-level and leaf components are in a React app. Top-level components are the components nearest to the root 
            component and affect the rendering performance of all the components beneath them and often contain the most 
            complexity. Leaf components are near the bottom of the tree and have no child components and are often frequently 
            re-rendered.
        </p>
        <p>And another thing, we can breakup big chunk of code into multiple modules and import/export or maybe we create 
            JS modules where we may export components, functions, or constants.</p>
        <p>And we need to think about dependency. And this is a good explanation too. <span className="red-text">
            Dependency trees are useful to determine what modules are necessary to run your React app. When building a 
            React app for production, there is typically a build step that will bundle all the necessary JavaScript to ship 
            to the client. The tool responsible for this is called a bundler, and bundlers will use the dependency tree to 
            determine what modules should be included. As your app grows, often the bundle size does too. Large bundle sizes 
            are expensive for a client to download and run. Large bundle sizes can delay the time for your UI to get drawn. 
            Getting a sense of your app’s dependency tree may help with debugging these issues.</span>
        </p>
        <p>Whatever! Lets go to recap section.</p>
        <ol className="custom-summary">
            <li>Render trees represent the relationship between entities. They are often used to design UI.</li>
            <li>Render trees represent the nested relationship between React components across a single render.</li>
            <li>With conditional rendering, the render tree may change across different renders. With different prop values, 
                components may render different components.
            </li>
            <li>Render trees help identify what the top-level and leaf components are. Top-level components affect the 
                rendering performance of all components beneath them and leaf components are often re-rendered frequently. 
                Identifying them is useful for understanding and debugging rendering performance.</li>
            <li>Dependency trees represent the module dependencies in a React app.</li>
            <li>Dependency trees are used by build tools to bundle the necessary code to ship an app.</li>
            <li>Dependency trees are useful for debugging large bundle sizes that slow time to paint and expose opportunities for optimizing what code is bundled.</li>
        </ol>
        <h2>And this is the end of lesson 1 (I thinks its about components).</h2>
        </>
    )
}