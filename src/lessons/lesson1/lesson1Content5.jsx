import '../../static/css/mainButton.css';

export default function Lesson1Content5() {

    const profile = `<Profile />`;
    const avatar = `<Avatar />`;
    const codeProfile = `export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}`;
    const codeProfile2 = `export default function Profile() {
  return (
    <Avatar
        person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
        size={100}
    /> // this is Avatar one
    <Avatar
        person={{ name: 'Xia Liang', imageId: '2cX8QH9' }}
        size={100} 
    /> // this is Avatar two
  );
}`;
    const codeAvatar = `function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}`;
    const needToKnow1 = `function Avatar(props) {
    let person = props.person;
    let size = props.size;
     // ...
    }`;

    const needToKnow2 = `function Avatar({ person, size }) {
  // ...
}`;

    const recap1 = `function Avatar({ person, size })`;
    return (
        <>
            <h2 className="orange-text underline">Passing Props to a component</h2>
            <p>Yes, here it comes.</p>
            <ol className="custom-list">
                <li>How to pass prop to a component</li>
                <li>How to read prop from a component</li>
                <li>How to specify default values for props</li>
                <li>How to pass JSX to a component</li>
                <li>How props change over time</li>
            </ol>
            <p>Lets see what is this about! Ok lets say, we have <br /> <code>{profile}</code> component whose child
            is <br /><code>{avatar}</code> <br /> we use this <br />
            <pre>
                <code>
                    {codeProfile}
                </code>
            </pre>
            or maybe this <br />
            <pre>
                <code>
                    {codeProfile2}
                </code>
            </pre>
            and the avatar might look like this <br />
            <pre>
                <code>
                    {codeAvatar}
                </code>
            </pre>
            and that's example is pretty much done itself. So we need to know that one thing.
            <pre>
                <code>
                    {needToKnow1}
                </code>
            </pre>
            means 
            <pre>
                <code>
                    {needToKnow2}
                </code>
            </pre>
            and it is called <span className="red-text">destructuring</span> in javascript. And we can also specify a value
            for the prop like this <br />
            <pre>
                <code>
                    {`function Avatar({ person, size = 100 }) {
  // ...
}`}
                </code>
            </pre>
            </p>
            <ol className="custom-summary">
                <h3>Ok, this time we got some recap.</h3>
                <li>To pass prop, add them to JSX, just like in HTML.</li>
                <li>To read prop, use the <span className="inline-code">{recap1}</span> destructuring the syntax.</li>
                <li>You can specify default values like <span className="inline-code">{`function Avatar({ person, size = 100 }) {`}</span></li>
                <li>You can forward all props with <span className="inline-code">{`<Avatar {...props} />`}</span> JSX 
                spread syntax, but don’t overuse it!<span className="red-text"> I didn't understand that part.</span></li>
                <li>Nested JSX like <span className="inline-code">{`<Card><Avatar /></Card>`}</span> will appear as Card component’s children prop.</li>
                <li><span className="red-text">Props are read-only snapshots in time: every render receives a new version of props. 
                    You can’t change props. When you need interactivity, you’ll need to set state.</span></li>
            </ol>
            <hr />
        </>
    )

}