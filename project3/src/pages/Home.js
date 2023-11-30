import { useSearchParams } from "react-router-dom";
import Editor from "../component/\bEditor";
import Button from "../component/Button";
import Header from "../component/Header";
import { useState } from "react";

const Home = () => {

    const [pivotDate, setPivotDate] = useState(new Date());

    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    };

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    }

    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`;

    return (
        <div>
            <Header
                title={headerTitle}
                leftChild={<Button text={"<"} onClick={onDecreaseMonth}></Button>}
                rightChild={<Button text={">"} onClick={onIncreaseMonth}></Button>}>
            </Header>
        </div>
    )
};

export default Home;