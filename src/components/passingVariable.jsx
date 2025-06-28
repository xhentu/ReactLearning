import "../static/css/mainButton.css";

export default function PassingVariable() {
  function handleClick() {
    const value = prompt("Enter a value:");
    if (value !== null) {
      const p = document.querySelector("#output");
      p.innerHTML = `The variable: <span class="red-text">${value}</span>`;
    }
  }
  
  return (
    <>
      <button onClick={handleClick}>Click to set variable</button>
      <p id="output">The variable: </p>
    </>
  );
}
