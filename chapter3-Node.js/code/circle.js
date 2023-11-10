const PI = 3.141592;

function getArea(radius) {
    return PI * radius * radius;
}

function getCircumference(radius) {
    return 2 * PI * radius;
}

// 내보낼 변수나 메소드에 export를 붙이거나 아래처럼 한번에 내보내기도 가능함.
// export { PI, getArea, getCircumference };

// default를 함꼐 사용하면 import하는 쪽에서 명시적으로 선언하지 않아도 아래 상수나 함수를 기본적으로 사용가능함
export default {
    PI,
    getArea,
    getCircumference,
}