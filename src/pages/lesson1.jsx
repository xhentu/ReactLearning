import Gallery from "../components/gallary";
import Lesson1Content1 from "../components/lesson1Content1";
import Lesson1Content2 from "../components/lesson1Content2";
import MainButton from "../components/mainButton";


function Lesson1() {
  return (
    <div>
      <MainButton label="Home" lesson=""/>
      <h1>Lesson 1 is 'Describing the UI'.</h1>
      {/* <Gallery /> */}
      <Lesson1Content1 />
      <Lesson1Content2 />
    </div>
  );
}

export default Lesson1;