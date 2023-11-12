import "./Body.css";

function Body({ children }) {
    
    function handleOnClick(e) {
        //alert("버튼을 클릭하셨군요!!");
        console.log(e);
        console.log(e.target.name);
    }

    return (
        <div className="body">
            <button name="A버튼" onClick={handleOnClick}>A 버튼</button>
            <button name="B버튼" onClick={handleOnClick}>B 버튼</button>
        </div>
    )

}

export default Body;