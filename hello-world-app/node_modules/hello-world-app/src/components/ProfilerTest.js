import { Profiler } from "react";
//import Form from "./Form";

const callback = (

    id,
    phase,
    actualDuration,
    startTime,
    baseDuration,
    commitTime,
    interactions

) => {
    console.log(
        "id " +
        id +
        " startTime " +
        startTime +
        " actualDuration " +
        actualDuration +
        " baseDuration " +
        baseDuration +
        " commitTime " +
        commitTime +
        " phase " +
        phase +
        " interactions " +
        interactions
    );
};

function ProfilerTest() {

    return (

        <Profiler id="ProfilerTest" onRender={callback}>
            <div>ProfilerTest</div>
        </Profiler>
        
    );
}

export default ProfilerTest;