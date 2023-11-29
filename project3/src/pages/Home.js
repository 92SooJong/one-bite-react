import { useSearchParams } from "react-router-dom";
import Editor from "../component/\bEditor";
import Button from "../component/Button";
import Header from "../component/Header";

const Home = () => {

    return (
        <div>
            <Editor 
            onSubmit={() => {alert("작성 완료 버튼을 클릭했음")}}></Editor>
        </div>
    )
};

export default Home;