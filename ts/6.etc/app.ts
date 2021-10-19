// type A = string | number
interface A {
  hello: true;
}
interface B {
  bye: true;
}
type C = {
  hi: false;
};

const a: A = {
  hello: true,
};
const b: B = {
  bye: true,
};
const c: C = {
  hi: false,
};

const d: A & B & C = {
  hello: true,
  bye: true,
  hi: false,
};

const result = Array.prototype.map.call<number[], [(item: number) => string], string[]>(
  [1, 2, 3],
  (item) => {
    return item.toFixed(1);
  }
);
const result2 = Array.prototype.map.apply<number[], [(item: number) => string], string[]>(
  [1, 2, 3],
  [
    (item) => {
      return item.toFixed(1);
    },
  ]
);
//  유틸리티 타입 보기 https://typescript-kr.github.io/pages/utility-types.html
