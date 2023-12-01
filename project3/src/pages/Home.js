import { useSearchParams } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";
import { useContext, useEffect, useState } from "react";
import {DiaryStateContext} from "../App"
import { getMonthRangeByDate } from "../util";

const Home = () => {

    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());
    const [filteredData, setFilteredData] = useState();

    useEffect(() => {
        if (data.length >= 1) {
            const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
            setFilteredData(data.filter((it) => beginTimeStamp <= it.date && it.date <= endTimeStamp));
        } else {
            setFilteredData([]);
        }
    }, [data, pivotDate])

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