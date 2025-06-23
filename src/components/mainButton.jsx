import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../static/css/mainButton.css'; // Assuming you have some styles for the button

const MainButton = ({ label, lesson }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${lesson}`);  // dynamic route like /lesson1, /lesson2
  };

  return <button onClick={handleClick} className='main-button'>{label}</button>;
};

export default MainButton;
// This component renders a button that navigates to a specific lesson page when clicked.
// The `label` prop is used to set the button text, and the `lesson`
// prop is used to determine the route to navigate to.
// For example, if `lesson` is "lesson1", clicking the button will navigate to "/lesson1".
// This allows for easy navigation between different lessons in the application.