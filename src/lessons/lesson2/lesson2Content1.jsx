import "../../static/css/mainButton.css";
import AButton, { CountButton } from "../../components/wayToInteractivity";

export default function Lesson2Content1() {

    return (

        <>
            <h2 className="orange-text underline">Responding to events</h2>
            <p>I dont know, lets build a component and test it out. Right? Why do i feel like this lesson 2 page is 
                different from lesson 1? Am I the only one seeing this? Yup, Now it changes. Whatever! Lets go back 
                to our topic.</p>
            <AButton children="I dont know! Click it?"/>
            <p>Now it does nothing. Right? Lets make something happen.</p>
            <AButton children="I need to know something!" action={() => alert("I need to know something!")}/>
        </>
    )
}
