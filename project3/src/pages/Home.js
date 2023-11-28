import { useSearchParams } from "react-router-dom";
import Button from "../component/Button";

const Home = () => {

    return (
        <div>
            <Button text={"버튼 텍스트"} onClick={() => alert("hi")} type={"default"}></Button>
        </div>
    )
};

export default Home;