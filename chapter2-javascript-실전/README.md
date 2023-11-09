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

# 스프레드 연산자와 rest 매개변수

`...`을 사용해서 배열이나 객체를 펼칠 수 있다. 이를 Spread 또는 전개 연산자라고 부른다.

```javascript
let arrA = [1, 2, 3];
let arrB = [...arrA, 4, 5, 6];

console.log(arrB); // [1,2,3,4,5,6] 출력
```

인수로도 활용이 가능하지만 매개변수로도 활용이 가능하다.

```javascript
function func(...rest) {
    console.log(rest); // [1, 2, 3, 4] 출력
}

func(1,2,3,4);
```

아래와 같이 처리도 가능하다. (참고로 전개 연산자 매개변수는 항상 마지막에 작성해야한다)
```javascript
function func(param, ...rest) {
    console.log(param); // 1 출력
    console.log(rest); // [2, 3, 4] 출력
}

func(1,2,3,4);
```

# 배열과 메서드

- `push` 배열 끝에 요소 추가
- `pop` 배열 끝 요소 제거
- `shift` 제일 앞 요소 제거 (순서를 재할당 해야하므로 느리다)
- `unshift` 제일 앞 요소 추가 (순서를 재할당 해야하므로 느리다)
- `slice` 배열의 특정 부분을 잘라서 가져온다
- `concat` 2개의 배열을 연결한다.
- `forEach` 배열을 순회한다.
- `indexOf` 배열의 요소를 검색해서 인덱스를 반환한다.
- `includes` 특정 요소가 있는지 확인한다.
- `findIndex` indexOf처럼 인덱스를 반환하긴하는데 인수로 콜백 함수를 넘기는게 다르다.(즉, 검색에 로직 부여가 가능함)
- `find` findIndex와 같이 콜백함수를 넘기는데 반환값으로 요소를 반환함
- `filter` 배열을 필터링해서 새로운 배열 반환
- `map` Java Stream API의 map과 같음. 배열의 값을 변형해서 반환하는 역할
- `sort` 배열의 요소를 정렬한다. (기존의 값이 수정되는 것에 주의한다)
- `join` 배열의 요소를 모두 연결해 하나의 문자열로 반환한다.
- `reduce` 배열의 요소를 모두 순회하고 단하나의 결과값만 반환한다. (주로 평균이나 전체합 같은 통계정보를 낼때 사용한다. 누산기 느낌)