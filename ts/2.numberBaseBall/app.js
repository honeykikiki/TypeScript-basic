var body = document.body;
var cadidate;
var array = [];
function choseNumber() {
    cadidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array = [];
    for (var i = 0; i < 4; i++) {
        var chose = cadidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chose);
    }
}
choseNumber();
console.log(array);
var result = document.createElement("h1");
body.append(result);
var form = document.createElement("form");
document.body.append(form);
var input = document.createElement("input");
form.append(input);
input.type = "text";
input.maxLength = 4;
var button = document.createElement("button");
button.textContent = "입력!";
form.append(button);
var wrongCount = 0;
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var answer = input.value;
    if (answer === array.join("")) {
        result.textContent = "홈런";
        input.value = "";
        input.focus();
        choseNumber();
        wrongCount = 0;
    }
    else {
        // 틀리면
        var answerArray = answer.split("");
        var strike = 0;
        var ball = 0;
        wrongCount += 1;
        if (wrongCount > 10) {
            result.textContent = "\uB2F5\uC740 " + array.join("") + "\uC785\uB2C8\uB2E4";
            input.value = "";
            choseNumber();
            wrongCount = 0;
        }
        else {
            console.log("답이 틀리면 ", answerArray);
            for (var i = 0; i <= 3; i++) {
                if (Number(answerArray[i]) === array[i]) {
                    console.log("같은 자리?");
                    strike += 1;
                }
                else if (array.indexOf(Number(answerArray[i])) > -1) {
                    // 같은 자리는 아니지만, 숫자가 겹치는지 확인
                    console.log("겹치는 숫자?");
                    ball += 1;
                }
            }
        }
        result.textContent = strike + "\uC2A4\uD2B8\uB77C\uC774\uD06C " + ball + "\uBCFC\uC785\uB2C8\uB2E4. / " + wrongCount;
        input.value = "";
        input.focus();
    }
});
