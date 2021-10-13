const { body } = document;
let cadidate: number[];
let array: number[] = [];

function choseNumber(): void {
  cadidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  array = [];
  for (let i = 0; i < 4; i++) {
    const chose = cadidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chose);
  }
}

choseNumber();

console.log(array);

const result = document.createElement("h1");
body.append(result);
const form = document.createElement("form");
document.body.append(form);
const input = document.createElement("input");
form.append(input);
input.type = "text";
input.maxLength = 4;
const button = document.createElement("button");
button.textContent = "입력!";
form.append(button);

let wrongCount = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const answer: string = input.value;
  if (answer === array.join("")) {
    result.textContent = "홈런";
    input.value = "";
    input.focus();
    choseNumber();
    wrongCount = 0;
  } else {
    // 틀리면
    const answerArray = answer.split("");
    let strike: number = 0;
    let ball: number = 0;
    wrongCount += 1;
    if (wrongCount > 10) {
      result.textContent = `답은 ${array.join("")}입니다`;
      input.value = "";
      choseNumber();
      wrongCount = 0;
    } else {
      console.log("답이 틀리면 ", answerArray);
      for (let i: number = 0; i <= 3; i++) {
        if (Number(answerArray[i]) === array[i]) {
          console.log("같은 자리?");
          strike += 1;
        } else if (array.indexOf(Number(answerArray[i])) > -1) {
          // 같은 자리는 아니지만, 숫자가 겹치는지 확인
          console.log("겹치는 숫자?");
          ball += 1;
        }
      }
    }
    result.textContent = `${strike}스트라이크 ${ball}볼입니다. / ${wrongCount}`;
    input.value = "";
    input.focus();
  }
});
