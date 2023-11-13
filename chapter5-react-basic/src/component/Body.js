import "./Body.css";
import { useState } from "react";

function Viewer() {
    // 부모가 리랜더 되면 자식도 함께 리랜더 된다
    console.log("viewer component update!");
    return <div>Viewer</div>;
}


function Body() {

    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(number + 1);
    }

    const onDecrease = () => {
        setNumber(number - 1);
    }

    return (
        <div>
            <h2>{number}</h2>
            <Viewer/>
            <div>
                <button onClick={onDecrease}>-</button>
                <button onClick={onIncrease}>+</button>
            </div>
        </div>
    )

}

export default Body;