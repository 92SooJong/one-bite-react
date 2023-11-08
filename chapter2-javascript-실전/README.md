# truthy & falsy
Javascript는 Boolean의 참이나 거짓이 아닌 값도 참,거짓으로 평가하는 특성이 있음

`undefined, null, 0, -0, NaN, ""(작은 따옴표, 백틱 포함), 0n` 7가지를 falsy한 값으로 판단함. 조건식에서 모두 거짓으로 판명됨.

# 단락 평가
예를 들어 `if(A || B)` 에서 A가 참이면 B를 검사할 필요가 없다. 

이런식으로 논리 연산자의 특성을 이용해서 두번째 값을 평가하지 않는 것을 `단락 평가(Short-Circuit Evaluatio)`라고 한다.

단락평가를 활용한 예시
```javascript

function getName(person) {
    return person && person.name;
}
```

# 객체 자료형 자세히 살펴보기

## 배열과 함수는 객체다.

Javascript의 배열은 객체 자료형에 몇가지 기능을 추가해 다른 언어의 배열처럼 동작하도록한 '객체'이다. 따라서 Javascript의 배열은 객체의 특성인 프로퍼티와 메소들를 가진다.

예를 들면 배열의 길이를 나타내는 length 프로퍼티, 가장 마지막 요소에 값을 추가하는 push 메소드가 있다.

Javascript의 함수 또한 객체이며, 값으로 취급되어 변수에 저장이 가능하다.

## 객체 자료형은 참조 주소를 저장하고 있다.
자바의 Object와 같다고 보면 됨.

```javascript
let  person = {
    name: "Joey"
}

let man = {
    name: "Joey"
}

console.log(person === man); // false가 출력. 참조값을 비교하기 때문임.
```

# 반복문

```javascript
let food = ['짜장면', '피자']

for (let item of food) { // java의 foeEach문과 같음.
    console.log(item);
}

```

객체의 Key 순회하는 방법 - 1

```javascript
let food = {
    "name" : "짜장면"
    "price" : 7000
}

const keyArr = Object.keys(food);
// const valueArr = Object.values(food); // value순회도 됨!

for (let key of keyArr) {
    console.log(key);
}

 // name, price가 출력

```

객체의 Key 순회하는 방법 - 2

`for...in` 문을 통해서 간결하게 표기가 가능하다.

```javascript
let food = {
    "name" : "짜장면"
    "price" : 7000
}

for (let key in food) {
    console.log(key);
}

 // name, price가 출력

```



