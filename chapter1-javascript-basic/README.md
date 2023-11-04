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

# 원시 Data Type

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



