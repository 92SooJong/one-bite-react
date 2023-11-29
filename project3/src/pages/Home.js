import { useSearchParams } from "react-router-dom";
import Editor from "../component/\bEditor";
import Button from "../component/Button";
import Header from "../component/Header";

const Home = () => {

    return (
        <div>
            <Editor 
            initData={
                {
                    date: new Date().getTime(),
                    emotionId: 1,
                    content: "이전에 작성했던 일기",
                }
            }
            onSubmit={() => {alert("작성 완료")}}></Editor>
        </div>
    )
};

export default Home;