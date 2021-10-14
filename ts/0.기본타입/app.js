"use strict";
// 기본 타입, 배열, 튜플
exports.__esModule = true;
var num = 0;
var str = String(num);
console.log(num + str);
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = [true, 2, "3"];
("한가지의 값만 들어오지 않을떄 배열에 어떤 값이 들어올지 정해준다");
var arr4 = [true, 2, "3"]; // tuple
// "한가지의 값만 들어오지 않을떄 배열에 정해진 위치에 고정된 값이 들어오게 정해준다 배열의 수고 정해져있다";
arr4[2] = "3"; // 가능
arr4[2] = 3; // 타입 오류
arr4[3] = 1; // 배열의 수가 정해져 있어서 타입 오류가 작동한다.
arr4.push(2); // 단 tuple에 push 하는 행위는 막지 못한다.
console.log(arr4); // (5) [true, 2, 3, 1, 2]
var arr5 = [true, 2, "3"]; // 더 엄격하게 배열 위치에 값을 고정도 가능
arr5[1] = "s"; // 타입오류
arr5[1] = 3; // 타입오류
// 값으로는 숫자 2 밖에 들어가지 못한다
// let arr: Array<제네릭> = [1, 2, 3];
// 상수, enum, 함수, 객체 타입
// 상수를 만들고 싶을떄
var arr6 = [true, 2, "3"];
arr6[0] = false; // 타입오류
var obj1 = { a: "b" };
obj1.a = "c"; //  as const 를 쓰면 타입 오류가 뜬다
var obj2 = { a: "b" }; // 사용하지않는다
var obj3 = { a: "b", b: 3 };
var obj4 = { a: "b" }; // b가 나중에 생기는 경우
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
Color[0] === "Red";
Color["Red"] === 0;
// 함수
function add(a, b) {
    return a + b;
}
function add2(a, b) {
    console.log(a, b);
} // void는 함수에 return을 넣어주지 않았을떄 리턴 값이다.
function add3(a, b) {
    return function (c) {
        return 3;
    };
}
function add4(a, b) {
    return function (c) {
        return function (d) {
            return false;
        };
    };
}
// 객체타입
var obj5 = {
    a: function (b, c) {
        return "hello";
    }
};
obj5.a(); //타입오류 b자리에 값이 들어가지 않아서
obj5.a(3);
obj5.a(3, "hello");
// never, any, 타입 캐스팅
// naver 대부분 배열을 잘못만든경우
var arr7 = [];
arr7.push(3); // 타입을 잘못만든경우 push할떄 에러가 뜬다.
// any 아무값이든 들어갈수있다
var hi = [true, 2, "as"];
// d.ts
var hello;
hello.substr();
//  타입캐스팅
var hello2;
hello2.substr(1, 2); // 어쩔수 없을떄 강제로 다른 타입을 바꾸는 방법
hello2.substr(1, 2); // 어쩔수 없을떄 강제로 다른 타입을 바꾸는 방법
var div = document.createElement("div");
var a = div; // 상속관계의 타입으로는 변경 가능
var b = div; // 완전히 다른 타입은 불가능
var d = div; // as unknown을 쓰면 가능
