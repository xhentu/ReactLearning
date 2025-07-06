import MainButton from "../components/mainButton";
import ScrollToTopButton from "../components/scrollToTop";
import Lesson2Content1 from "../lessons/lesson2/lesson2Content1";


function Lesson2() {
  return (
    <div>
      <MainButton label="Home" lesson=""/>
      <h1>Lesson 2 is 'Adding Interactivity'.</h1>
      <p>Ok, after making components, we add some interactivity. Right?</p>
      <Lesson2Content1 />
      <ScrollToTopButton />
    </div>
  );
}

export default Lesson2;
