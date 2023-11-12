function Body() {

    const numA = 1;
    const numB = 2;

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
    const num = 200;
    if (num % 2 === 0) {
        return <div>{num}은(는) 짝수입니다.</div>
    } else {
        return <div>{num}은(는) 홀수입니다.</div>
    }

}

export default Body;