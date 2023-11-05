_자바랑 차이가 없는 부분은 기록하지 않았음_

# Chapter 1 - Javascript Basic

React is Javascript library based on Node.js

Javascript is compiled by `Javascript Engine`

Basically, every web browser has a Javascript Engine.

You must run Javascript code in a web browser, unless you use a different environment such as Node.js

Chrome is most widely used web browser, which utilizes the V8 Engine.

When you use Chrome Developer Tools, you can only run code one line at a time.
So we recommend to use a third party web editor like `https://codesandbox.io`


# Variable & Constant

`let age;`와 같이 변수를 선언할 수 있다. 초기화를 반드시 선언과 함께 하지 않아도 된다. 

## let과 var의 차이점

`let`은 한번 사용한 변수명은 재선언할 수 없으나 `var`를 사용하면 재선언 가능하다. (`var`를 사용하면 코드 복잡도를 높일 수 있기 때문에 가능하면 사용하지 않는게 좋다.)

```javascript
let name = 'joey'
let name = 'joey' // 불가능함

var age = 24;
var age = 25; // 가능함.
```

## 상수
Javascript에서 상수 선언 및 초기화는 `const` 키워드를 사용한다. 상수이므로 프로그램 실행중에 값 변경이 불가능하다. (즉, 선언과 초기화를 함께 해줘야한다)

## 명명규칙
변수에 `$` 기호를 사용함으로써 해당 변수가 jQuery같은 라이브러리 객체라는 걸 의미하도록 한다.

# 원시 Data Type 살펴보기
(Object 타입은 책 후반에 나오는듯하다)

## Number Type
Java와 달리 Javascript는 정수와 소수를 다른 타입으로 구분하지 않고 `Number` 타입 하나로 처리한다.

Javascript는 `Infinity, -Infinity`라는 값을 제공하는데 이는 양의 무한대, 음의 무한대를 의미한다.
0으로 나눗셈 연산을 하면 Infinity 결과를 얻을 수 있다. (Java와 달리 0을 분모로하는 연산을 해도 런타임 에러가 발생하지 않는다.)

`NaN`은 Not-a-Number라는 뜻으로 연산의 결과를 숫자로 표현할 수 없을때 나오는 결과다. 예를 들면, 숫자와 문자를 연산하려고 하는 경우.

## String Type

문자타입에서 + 연산을 사용하면 2개의 문자열을 붙일 수 있다.

큰 따옴표, 작은 따옴표를 모두 사용할 수 있다. 추가로 백틱을 사용하면 문자열내 변수를 적용 할 수 있다.

백틱을 이용한 문자열을 `Template Literal`이라고 한다.
```javascript
let name = "joey";
let template = `hello ${name}!`;
```

## Boolean, null, undefined

Javascript에서는 null을 하나의 값으로 취급한다. 자바나 C언어의 null은 Javascript에서 `undefined`로 사용한다.

즉, Javascript에서 변수에 값을 할당하지 않으면 null이 아닌 `undefined`가 할당된다.


# 형변환

## 묵시적 형변환
엔진이 알아서 서로 다른 두개 타입에 대한 연산을 수행 해주는데 이때 묵시적 형변환이 이뤄진다.

```javascript
let number = 10;
let string = "20"

console.log(number + string); // 1020이 출력됨

```

## 명시적 형변환
개발자가 자신의 의도대로 데이터 타입의 형변환을 적용한걸 말한다.

```javascript
console.log(Number("10")); // 10 출력
console.log(Number("10개")); // NaN 출력
```


`parseInt` 를 통해 진법을 지정해 숫자 타입으로 형변환 가능하다. `String`을 통해 문자형으로 형변환 가능하다. `Boolean`을 통해서 불리언 타입으로 형변환 가능하다.

자바스크립트에서 Boolean 변환은 truthy & falsy 규칙을 따른다. (이후에 설명 예정)

# 연산자

## 동등 비교

Javascript에는 `===` 연산자와 `==` 연산자가 있음.

`==` 연산자는 값 비교만 할뿐 데이터 타입까지는 확인해주지 않기 때문에 안전하게 `===`를 통해서 비교연산을 하는게 좋다.

## null 병합 연산자

null 병합 연산자인 `??`를 사용하면 값이 확정된 변수를 찾을 수 있다.
```javascript
let varA = 10;
let varB = 20;
let varC;

console.log(varA ?? varB); // 10이 출력됨. 둘다 값이 확정되어 있으면 좌측값 사용
console.log(varC ?? varB); // 20이 출력된. 값이 있는 varB의 값이 출력됨
```

Javascript는 변수에 숫자를 저장했다가 문자를 저장 해도 정상적으로 작동함. 변수의 자료형은 값을 저장할때 동적으로 변경되기 때문이다. `동적 타이핑`이라 부른다.

동적 타이핑 때문에 문제가 발생하곤한다. (문자값이 저장되어 있는지 모르고 `++` 연산을 한다던지...)

`typeof`를 사용하면 현재 변수에 할당된 값의 데이터 타입을 알 수 있음.

# 함수

`인수`는 함수를 호출하면서 넘겨주는 값이고, `매개변수`는 함수에서 그 값을 저장할 변수.

## 함수와 호이스팅

`호이스팅`은 프로그램에서 변수나 함수를 호출학나 접근하는 코드가 함수 선언보다 위에 있음에도 불구하고, 마치 선언 코드가 위에 있는것처럼 동작하는 Javascript만의 기능.

아래 코드를 보면 함수 선언보다 호출이 먼저 있음에도 불구하고 에러가 발생하지 않음. 자바스크립트의 알고리즘상 코드를 실행할때 중첩함수를 제외한 함수들을 미리 생성해둔다. 

덕분에 함수 작성위치를 구애받지 않고 작성할 수 있게 됨.
```javascript
func();

function func() {
    console.log("Hello");
}
```

## 함수 표현식
Javascript는 함수를 변수처럼 취급할 수 있음. 다만 함수를 변수에 저장할때는 호이스팅되지 않는점, 변수에 함수를 저장할떄는 괄호를 사용하지 않는 점을 유의한다.

```javascript
funcB(); // 호이스팅 적용 안됨. 작동 안함

let funcB = function {
    console.log("hello");
}
```

## 콟백 함수
앞에서 함수를 값처럼 취급할 수 있음을 알았다. 따라서 함수를 또 다른 함수의 인자로서 사용이 가능하다. 

다른 함수의 인자로 사용되는 함수를 `콜백 함수` 라고 부른다.

# 스코프

스코프는 변수와 함수의 영향 범위를 의미한다.

조건문이나 반복문 안에 선언된 변수 및 함수도 지역 스코프를 적용한다.

```javascript
if(true) {
    function foo() {
        console.log("bar");
    }
}

foo(); // 작동 안함
```

## 블록 스코프와 함수 스코프
블록 스코프는 대다수의 개발언어에 적용되어 있는 블록(주로 중괄호) 스코프 생각하면 됨.

Javascript에는 함수 스코프가 있는데 `var`가 그 역할을 한다. `let`, `const`는 블록 스코프

함수 스코프를 사용하는 `var`는 혼란을 야기하는 경우가 많아서 가능하면 쓰지말자
```javascript
if (true) {
    var a = 1;
}

console.log(a); // 함수 스코프에 의해 1이 출력됨
```

# 객체

Javascript에서는 객체의 key-value를 `프로퍼티`라고 부름

객체에서 key가 중복되면 마지막 key만 적용된다.
```javascript
let person = {
    name: "Joey", // 여기를 '프로퍼티'라 부름
    age : 30 // 여기를 '프로퍼티'라 부름
}
```

## in 연산자
객체에 존재하지 않는 프로퍼티에 접근하면, undefined를 반환한다.

`in` 연산자를 통해서 객체내에 프로퍼티가 존재하는지 확인할 수 있다.

```javascript
let person = {
    age : 10
};

let isNameExist = "name" in person;

console.log(isNameExist); // false가 출력된다
```

## 메서드

객체의 프로퍼티에서 value가 함수인 경우를 `메서드`라 부른다.

```javascript
let person = {
    name : "joey",
    sayHi : function() {
        console.log("안녕");
    }
}
```

# 배열
배열의 값으로는 어떤 자료형도 올 수 있음.

Javascript의 배열은 다른 언어와 달리 길이가 고정되어 있지 않아서 배열 요소 추가,삭제시 길이가 동적으로 변함.
```javascript
let arr = [
    1,
    "1",
    true,
    null,
    () => {},
    function () {}
];
```
