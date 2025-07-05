import Gallery from "../components/gallary";
import MainButton from "../components/mainButton";
import Lesson1Content1 from "../lessons/lesson1/lesson1Content1";
import Lesson1Content2 from "../lessons/lesson1/lesson1Content2";
import Lesson1Content3 from "../lessons/lesson1/lesson1Content3";
import Lesson1Content4 from "../lessons/lesson1/lesson1Content4";
import Lesson1Content5 from "../lessons/lesson1/lesson1Content5";
import Lesson1Content6 from "../lessons/lesson1/lesson1Content6";
import Lesson1Content7 from "../lessons/lesson1/lesson1Content7";
import Lesson1Content8 from "../lessons/lesson1/lesson1Content8";
import Lesson1Content9 from "../lessons/lesson1/lesson1Content9";


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
      <Lesson1Content7 />
      <Lesson1Content8 />
      <Lesson1Content9 />
    </div>
  );
}

export default Lesson1;