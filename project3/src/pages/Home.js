import { useSearchParams } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";

const Home = () => {

    return (
        <div>
            <Header title={"Home"} leftChild = {
                <Button
                    type="positive" 
                    text={"긍정 버튼"}
                    onClick={() => {
                        alert("positive button");
                    }}>
                </Button>
            } rightChild = {
                <Button
                    type="negative" 
                    text={"부정 버튼"}
                    onClick={() => {
                        alert("negative button");
                    }}>
                </Button>
            }>

            </Header>


            <Button text={"버튼 텍스트"} onClick={() => alert("hi")} type={"default"}></Button>
        </div>
    )
};

export default Home;