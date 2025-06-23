import Profile from "./profile";
import "../static/css/mainButton.css"; // Assuming you have some styles for the button
export default function Gallery() {
  return (
    <div>
      <h1 style={{ color: "#646cff" }}>1.Gallery</h1>
      <ul className="custom-list">
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}
