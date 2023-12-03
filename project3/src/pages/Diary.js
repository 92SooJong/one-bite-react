import { useNavigate, useParams } from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import useDiary from "../hooks/useDiary";
import { getFormattedDate } from "../util";

const Diary = () => {

    const { id } = useParams();
    const data = useDiary(id);
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    const goEdit = () => {
        navigate(`/edit/${id}`);
    }

    if (!data) {
        return <div>일기를 불러오고 있습니다...</div>
    } else {

        const { date, emotionId, content } = data;
        const title = `${getFormattedDate(new Date(Number(date)))} 기록`;

        return (
            <div>
                <Header
                title={title}
                leftChild={<Button text={"< 뒤로 가기"} onClick={goBack}></Button>}
                rightChild={<Button text={"수정하기"} onClick={goEdit}></Button>}>

                </Header>
                <div>{id}번 일기장</div>
                <div>Diary 페이지입니다.</div>
            </div>
        )
    }
    
};

export default Diary;