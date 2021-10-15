# TypeScript-basic

# 타입스크립트 시작

> 타입스크립트란 ?

    타입스크립트는 MS에서 개발하고 관리하는 오픈소스 프로그래밍 언어로 어떤 브라우저나 호스트, 운영체제에서도 동작한다. 타입스크립트는 자바스크립트의 상위 집합으로서 ECMA의 최신 표준을 충분히 지원한다. 타입이라는 특징을 가지고 ES7이하의 표준을 포함하고 있다. 타입스크립트는 ES5를 포함하는 집합이기 때문에 기존의 ES5 자바스크립트 문법을 그대로 사용할 수 있다. 또한, ES6의 새로운 기능들을 사용하기 위해 Babel과 같은 별도 트랜스파일러를 사용하지 않아도 ES6의 새로운 기능을 기존의 자바스크립트 엔진에서 사용할 수 있다.

    장점 : 타입스크립트의 장점은 정적 타입 언어(static type language)이기 때문에 컴파일 시 시간이 조금 걸리더라도 안정성을 보장한다는 점이다.

## 타입스크립트 컴파일

<!-- > npm npx 차이 : https://seizemymoment.tistory.com/106 -->

> 타입스크립트 컴파일

    1. npm i typescript
    2. npm tsc [filename]

    npx 이용
    1. npx tsc [filename]

> 자동 컴파일

    1. npm i typescript
    2. npm tsc [filename] -w

    npx 이용
    1. npx tsc [filename] -w

## d.ts 파일

> d.ts파일이란 타입스크립트 선언 파일 d.ts 는 타입스크립트 코드의 타입 추론을 돕는 파일입니다.

## tsconfig.json 설정

### 공식문서 참고하기

<a href='https://www.typescriptlang.org/ko/docs/handbook/compiler-options.html' target='blank'>공식문서</a>

> {
> "compilerOptions": {

    "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
    "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd','es2015',  'esnext'
    "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지
    "checkJs": true, // 일반 js 파일에서도 에러체크 여부
    "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve',     'react-native', 'react'
    "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된     파일)
    "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일     때만 가능)
    "outDir": "./", //js파일 아웃풋 경로바꾸기
    "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
    "removeComments": true, //컴파일시 주석제거

    "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
    "noImplicitAny": true, //any타입 금지 여부
    "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기
    "strictFunctionTypes": true, //함수파라미터 타입체크 강하게
    "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
    "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
    "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기

    "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
    "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
    "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기
    "noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기

}
}

## 타입스크립트 기본 타입

> 1.기본타입

    변수에 타입을 지정해준다.

```JS
let num: number = 0;
let str: string = String(num);
```

> 2.배열

```js
let arr1: number[] = [1, 2, 3]; // 보편적으로 사용
let arr2: Array<number> = [1, 2, 3];

let arr3: (string | number | boolean)[] = [true, 2, "3"];
```

    배열안에 어떤 값이 들어오는지 여러가지 선택할수있다.

---

```js
let arr4: [boolean, number, string] = [true, 2, "3"]; // tuple
arr4[2] = "3"; // 가능
arr4[2] = 3; // 타입 오류
arr4[3] = 1; // 배열의 수가 정해져 있어서 타입 오류가 작동한다.
arr4.push(2); // 단 tuple에 push 하는 행위는 막지 못한다.
console.log(arr4); // (5) [true, 2, 3, 1, 2]
```

    한가지의 값만 들어오지 않을떄 배열에 정해진 위치에 고정된 값이 들어오게 정해준다 배열의 수고 정해져있다

```js
let arr5: [boolean, 2, string] = [true, 2, "3"]; // 더 엄격하게 배열 위치에 값을 고정도 가능
arr5[1] = "s"; // 타입오류
arr5[1] = 3; // 타입오류
```

    정해진 값으로 숫자 2 밖에 들어가지 못한다

> 3.  상수

     상수를 만들고 싶을떄 **as const** 를 사용한다

```js
let arr6 = [true, 2, "3"] as const;
arr6[0] = false; // 타입오류

const obj1 = { a: "b" } as const;
obj1.a = "c"; //  as const 를 쓰면 타입 오류가 뜬다

const obj2: object = { a: "b" } as const; // 사용하지않는다
const obj3: { a: string; b: number } = { a: "b", b: 3 } as const;
const obj4: { a: string; b?: number } = { a: "b" } as const; // b가 나중에 생기는 경우 ? 옵셔널 체이닝을 사용한다

```

> 4.  enum

```js
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
Color[0] === "Red";
Color["Red"] === 0;
```

> 5. 함수

```js
function add(a: number, b: number): number {
  return a + b;
}

function add2(a: number, b: number): void {
  console.log(a, b);
} // void는 함수에 return을 넣어주지 않았을떄 리턴 값이다.

function add3(a: number, b: number): (c: string) => number {
  return (c: string) => {
    return 3;
  };
}
function add4(a: number, b: number): (c: string) => (d: string) => boolean {
  return (c: string) => {
    return (d: string) => {
      return false;
    };
  };
}
```

    인자에 들어오는 값 과 리턴값의 타입을 정해준다.
    return 값이 들어가지 않을떄는 void를 넣어준다

> 6.  객체타입

```js
const obj5: { a: (b: number, c?: string) => string } = {
  a(b: number, c?: string) {
    return "hello";
  },
};

obj5.a(); //타입오류 b자리에 값이 들어가지 않아서
obj5.a(3);
obj5.a(3, "hello");
```

    각 객체의 값을 지정해주고
    정해지지 않은 값은 옵셔널 체이닝으로 보호해준다

> 7.  naver

```js
const arr7: [] = [];
arr7.push(3); // 타입을 잘못만든경우 push할떄 에러가 뜬다.
```

    naver 대부분 배열을 잘못만든경우이다.

> 8.  any

    아무값이나 들어갈수 있다.

```js
const hi: any = [true, 2, "as"];
```

> 9.  타입 캐스팅

```js
const div = document.createElement("div");
const a = div as HTMLElement; // 상속관계의 타입으로는 변경 가능
const b = div as number; // 완전히 다른 타입은 불가능
const d = div as unknown as number; // as unknown을 쓰면 가능

const hello2: number;
(hello2 as unknown as string).substr(1, 2); // 어쩔수 없을떄 강제로 다른 타입을 바꾸는 방법
(<string>(<unknown>hello2)).substr(1, 2); // 어쩔수 없을떄 강제로 다른 타입을 바꾸는 방법
```

## 인터페이스 특성과 type alias 오퍼레이터

> 1.인터페이스

    인터페이스는 타입을 정의한 규칙을 의미합니다.

```js
interface User {
  age: number;
  name: string;
}
```

    • 변수와 함수에 활용한 인터페이스

```js
var person: User = {
  age: 30,
  name: "aa",
};

function getUser(user: User) {
  console.log(user);
}
```

    • 인덱싱
      타입스크립트에서 배열 요소와 객체의 속성을 접근할 때는 인터페이스를 사용하면 됩니다.

```js
interface StringArray {
  [index: number]: string;
}

var arr2: StringArray = ["a", "b", "c"];
arr[0] = 10; //Error;
```

    • 인터페이스 확장

```js
interface Example {
  a: 3;
  b: 7;
  [key: string]: number;
}

const example: Example = {
  a: 3,
  b: 7,
};
```

    • 들어올 타입이 명확하지 않을떄

```js
interface Person {
  name: string;
  age: number;
}

interface User extends Person {
  language: string;
}
```

> 2.type

    하나의 타입이 아닌 여러가지 타입이 적용될떄 사용

```js
type RSP = {
  readonly Hello: "a";
};

type Hello = string | number; // 다재다능한
type Hello2 =
  | {
      ROCK: string;
      SCISSORS: string;
    }
  | string; // 객체 또는 문자가 들어갈수 있다
const hi1: Hello2 = "string";
const hi2: Hello2 = {
  ROCK: "0",
  SCISSORS: "-142px",
};
```

> 2.오버레이터

    • Union 타입: 자바스크립트의 OR 연산자와 같은 의미의 타입입니다. Union 타입으로 지정하면 각 타입의 공통된(보장된) 속성에만 접근 가능합니다.

```js
function askSomeone(someone: Developer2 | Person) {
  console.log(someone);
}
```

    • Intersection 타입: 자바스크립트의 AND 연산자와 같은 의미의 타입입니다. 각각의 모든 타입이 포함된 객체를 넘기지 않으면 에러가 발생합니다.

```js
function askSomeone(someone: Developer & Person) {
  console.log(someone);
}
```

## this와 타입 범위 이해

    this의  타입을 지정해줘야한다

```js
const button = document.createElement("button");
button.addEventListener("click", function (this: HTMLButtonElement, e: Event) {
  const myChoice = this.textContent;
});
```

## 클래스 / null, undefined / 제네릭
