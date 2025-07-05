import '../../static/css/mainButton.css';
import PackingList from "../../components/conditionalRendering";

export default function Lesson1Content6() {

    return (
        <>
            <h2 className="orange-text underline">Conditional Rendering</h2>
            
            <ul className="custom-list">
                <h3>Ok, Lets say we have a list.</h3>
                <li>The list consists of items, right?</li>
                <li>And the items consists of some components like name and a boolean value called isPack = True or False.</li>
                <li>We are gonna bring it into action. Render that list according to boolean value.</li>
            </ul>

            <PackingList />

            <pre>
                <code>
                    {`function Item({ name, isPacked }) {
    if (isPacked) {
        return <li className="item packed">{name} + '👍'</li>;
    } else {
        return <li className="item">{name} + '👎'</li>;
    }
}

export default function PackingList() {
  return (
    <section>
      <h3>Sally Ride's Packing List</h3>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
`}
                </code>
            </pre>
                <p>We can get the same result by using tenary operators.</p>
                <pre>
                    <code>
                        {`function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? ( {name + ' ✅'} ) : ( {name} ) }
    </li>
  );
}`}
                    </code>
                </pre>
                <p>We can use && operators like this too.</p>
            <pre>
                <code>
                    {`function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✅'}
    </li>
  );
}`}
                </code>
            </pre>
            
            <p>Those codes are used to achieve that list above for testing conditional rendering.</p>
            <ol className="custom-summary">
                <h3>Yes, little to note</h3>
                <li>We pass variable as a condition to a function.</li>
                <li>Then we check the condition and render the list.</li>
                <li>We can use all conditional things like if else, tenary operators and && operators.</li>
            </ol>
        </>
    )
}