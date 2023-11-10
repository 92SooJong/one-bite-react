//import { PI, getArea, getCircumference } from "./circle.js"; // 확장자 안붙여서 에러 났었음
//console.log(PI, getArea(1), getCircumference(1));

// import * as circle from "./circle.js"; // 이런식으로 모두 불러오기 가능

import circle from "./circle.js"; // default 내보내기가 적용된 상수나 함수를 자동으로 불러옴.

console.log(circle.PI, circle.getArea(1), circle.getCircumference(1));
