import { useRef } from 'react';

export default function CountDownStopwatch() {
  const displayRef = useRef(null); // For accessing the <p> element

  function startCountdown(event) {
    event.preventDefault();

    const input = prompt("Enter the initial time in seconds:");
    let timeLeft = parseInt(input);

    if (isNaN(timeLeft) || timeLeft <= 0) {
      alert("Please enter a valid number greater than 0.");
      return;
    }

    // Initial display
    displayRef.current.textContent = `${timeLeft} seconds`;

    const countdownInterval = setInterval(() => {
      timeLeft--;

      if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        displayRef.current.textContent = `Time's up!`;
      } else {
        displayRef.current.textContent = `${timeLeft} seconds`;
      }
    }, 1000);
  }

  return (
    <div>
      <h2>Countdown Timer</h2>
      <p ref={displayRef} style={{ fontSize: '2rem' }}>0 seconds</p>
      <button onClick={startCountdown}>Start Countdown</button>
    </div>
  );
}
