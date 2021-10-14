// 기본 타입, 배열, 튜플

let num: number = 0;
let str: string = String(num);

let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

let arr3: (string | number | boolean)[] = [true, 2, "3"];
// 한가지의 값만 들어오지 않을떄 배열에 어떤 값이 들어올지 정해준다

// 한가지의 값만 들어오지 않을떄 배열에 정해진 위치에 고정된 값이 들어오게 정해준다 배열의 수고 정해져있다";
let arr4: [boolean, number, string] = [true, 2, "3"]; // tuple
arr4[2] = "3"; // 가능
arr4[2] = 3; // 타입 오류
arr4[3] = 1; // 배열의 수가 정해져 있어서 타입 오류가 작동한다.
arr4.push(2); // 단 tuple에 push 하는 행위는 막지 못한다.
console.log(arr4); // (5) [true, 2, 3, 1, 2]

let arr5: [boolean, 2, string] = [true, 2, "3"]; // 더 엄격하게 배열 위치에 값을 고정도 가능
arr5[1] = "s"; // 타입오류
arr5[1] = 3; // 타입오류
// 값으로는 숫자 2 밖에 들어가지 못한다

// let arr: Array<제네릭> = [1, 2, 3];

// 상수, enum, 함수, 객체 타입
// 상수를 만들고 싶을떄
let arr6 = [true, 2, "3"] as const;
arr6[0] = false; // 타입오류

const obj1 = { a: "b" } as const;
obj1.a = "c"; //  as const 를 쓰면 타입 오류가 뜬다

const obj2: object = { a: "b" } as const; // 사용하지않는다
const obj3: { a: string; b: number } = { a: "b", b: 3 } as const;
const obj4: { a: string; b?: number } = { a: "b" } as const; // b가 나중에 생기는 경우

// enum
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
Color[0] === "Red";
Color["Red"] === 0;

// 함수
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

// 객체타입
const obj5: { a: (b: number, c?: string) => string } = {
  a(b: number, c?: string) {
    return "hello";
  },
};

obj5.a(); //타입오류 b자리에 값이 들어가지 않아서
obj5.a(3);
obj5.a(3, "hello");

// never, any, 타입 캐스팅

// naver 대부분 배열을 잘못만든경우
const arr7: [] = [];
arr7.push(3); // 타입을 잘못만든경우 push할떄 에러가 뜬다.

// any 아무값이든 들어갈수있다

const hi: any = [true, 2, "as"];

// d.ts
const hello: number;
// 다른 사람이 만든것 중 타입을 잘못만든경우 any를 써서 강제로 만든다.
import hello from "hello";
hello.substr();

//  타입캐스팅
const hello2: number;
(hello2 as unknown as string).substr(1, 2); // 어쩔수 없을떄 강제로 다른 타입을 바꾸는 방법
(<string>(<unknown>hello2)).substr(1, 2); // 어쩔수 없을떄 강제로 다른 타입을 바꾸는 방법

const div = document.createElement("div");
const a = div as HTMLElement; // 상속관계의 타입으로는 변경 가능
const b = div as number; // 완전히 다른 타입은 불가능
const d = div as unknown as number; // as unknown을 쓰면 가능
