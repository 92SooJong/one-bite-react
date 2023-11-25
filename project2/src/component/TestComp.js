import { useReducer } from "react";

function reducer(state, action) {

    switch (action.type) {
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        case "INIT":
            return 0;    
        default:
            return state;
        
    }


}

function TestComp() {

    // count는 State를 의미한다.
    // dispatch는 상태 변화 촉발 함수이다. State를 변경하고 싶으면 dispatch를 호출하면 된다.
    // useReducer의 첫번째 인수는 State변화 함수, 두번째 인수는 State의 초기값
    // 아래 문구를 정리하면 dispatch를 호출해서 상태 변경이 촉발된다면 reducer 함수가 실행된다는 뜻이다.
    // reducer 함수의 반환값이 변경할 State의 값이 된다.
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <bold>{count}</bold>
            </div>
            <div>
               <button onClick={() => dispatch({ type: "INCREASE", data: 1})}>+</button> 
               <button onClick={() => dispatch({ type: "DECREASE", data: 1})}>-</button> 
               <button onClick={() => dispatch({ type: "INIT"})}>0으로 초기화</button> 
            </div>
        </div>
    )
}

export default TestComp;