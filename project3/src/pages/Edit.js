import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import Editor from "../component/Editor";
import Button from "../component/Button";
import Header from "../component/Header";
import useDiary from "../hooks/useDiary";

const Edit = () => {

    const { id } = useParams();
    const data = useDiary(id);

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }
    const { onDelete } = useContext(DiaryDispatchContext);
    const onClickDelete = () => {
        if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
            onDelete(id);
            navigate("/", { replace:true })
        }
    }


    if (!data) {
        return <div>일기를 불러오고 있습니다</div>
    } else {
        return (
            <div>
                <Header
                    title={"일기 수정하기"}
                    leftChild={<Button text={"< 뒤로 가기"} onClick={goBack}/>}
                    rightChild={<Button type={"negative"} text={"삭제하기"} onClick={onClickDelete}/>}
                />
                <Editor initData={data}></Editor>
            </div>
        )
    }
};

export default Edit;