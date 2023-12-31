import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";

const useDiary = (id) => {

    const data = useContext(DiaryStateContext);
    const [diary, setDiary] = useState(); // 기본값이 없으므로 undefined 
    const navigate = useNavigate();

    useEffect(() => {
        const matchDiary = data.find((it) => String(it.id) === String(id));
        if (matchDiary) {
            setDiary(matchDiary);
        } else {
            alert("일기가 존재하지 않습니다");
            navigate("/", {replace: true}); // 페이지 이동한 후 다시 돌아올 수 없도록 앞으로 가기 아이콘이 비활성화 됨
        }
    }, [id, data]);

    return diary;
};
export default useDiary;