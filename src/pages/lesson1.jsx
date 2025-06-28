import Gallery from "../components/gallary";
import Lesson1Content1 from "../lessons/lesson1Content1";
import Lesson1Content2 from "../lessons/lesson1Content2";
import Lesson1Content3 from "../lessons/lesson1Content3";
import Lesson1Content4 from "../lessons/lesson1Content4";
import Lesson1Content5 from "../lessons/lesson1Content5";
import MainButton from "../components/mainButton";
import Lesson1Content6 from "../lessons/lesson1Content6";


function Lesson1() {
  return (
    <div>
      <MainButton label="Home" lesson=""/>
      <h1>Lesson 1 is 'Describing the UI'.</h1>
      {/* <Gallery /> */}
      <Lesson1Content1 />
      <Lesson1Content2 />
      <Lesson1Content3 />
      <Lesson1Content4 />
      <Lesson1Content5 />
      <Lesson1Content6 />
    </div>
  );
}

export default Lesson1;