import "./Body.css";

function Body({name, location}) { //매개변수 구조 할당을 좀 더 선호함
    
    // 구조 분해 할당을 통해서 손쉽게 변수화 하자!
    //const {name, location} = props;
    console.log(name, location);

    return (
        <div className="body">
            {name}은 {location}에 거주합니다.
        </div>
    );


    // 구조분해 할당 전
    // return (
    //     <div className="body">
    //         {props.name}은 {props.location}에 거주합니다.
    //     </div>
    // );

    // return (
    //     // 객체형태로 작성한다. 스타일 규칙이 많으면 코드가 복잡해져 가독성이 낮아진다.
    //     // 페이지가 스타일을 계싼할 떄 불필요한 연산을 수행할 가능성이 있다.
    //     <div style={{ backgroundColor: "red", color: "blue" }}>
    //         <h1>body</h1>
    //     </div>
    // )

    // const numA = 1;
    // const numB = 2;

    // return (
    //     <div>
    //         <h1>body</h1>
    //         {/* JSX 표현식을 사용하면 아래처럼 변수 사용가능. 단, 원시 타입만 사용해야한다. */}
    //         <h2>{numA + numB}</h2>
    //     </div>
    // );

    // return (
    //     // 항상 최상위 태그는 있어야한다. 없다면 아래처럼 표기해줘야함. 아래 태그는 렌더링 후에 보여지지 않음.
    //     <>
    //         <div>div 1</div>
    //         <div>div 2</div>
    //     </>
    // )
    
    //표현식에는 삼항 연산자도 포함되므로 아래와 같이 삼항연산자를 활용할 수 있다.
    // const num = 19;
    // return (
    //     <>
    //         <h2>
    //             {num}은(는) {num % 2 === 0 ? "짝수" :"홀수"}입니다.
    //         </h2>
    //     </>
    // )

    //조건문은 표현식이 아니므로 아래와 같이 처리하면 된다.
    // const num = 200;
    // if (num % 2 === 0) {
    //     return <div>{num}은(는) 짝수입니다.</div>
    // } else {
    //     return <div>{num}은(는) 홀수입니다.</div>
    // }

}

export default Body;