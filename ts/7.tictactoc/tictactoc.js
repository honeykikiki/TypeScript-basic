"use strict";
const horizontal = 4;
const vertical = 3;
const colors = [
    "red",
    "red",
    "orange",
    "orange",
    "green",
    "green",
    "yellow",
    "yellow",
    "white",
    "white",
];
let colorCandidate = colors.slice();
let color = [];
let clickFlag = true;
let clickCard = [];
let completedCard = [];
let stateTime;
function shuffle() {
    for (let i = 0; colorCandidate.length > 0; i += 1) {
        color = color.concat(colorCandidate.splice(Math.floor(Math.random() * colorCandidate.length), 1));
    }
}
function setCard(horizontal, vertical) {
    var _a;
    clickFlag = false;
    for (let i = 0; i < horizontal * vertical; i++) {
        const card = document.createElement("div");
        card.className = "card";
        const cardInner = document.createElement("div");
        cardInner.className = "card-inner";
        const cardFront = document.createElement("div");
        cardFront.className = "card-front";
        const cardBack = document.createElement("div");
        cardBack.className = "card-back";
        cardBack.style.backgroundColor = color[i];
        cardInner.append(cardFront);
        cardInner.append(cardBack);
        card.append(cardInner);
        card.addEventListener("click", function () {
            if (clickFlag && !completedCard.includes(this)) {
                this.classList.toggle("flipped");
                clickCard.push(this);
                if (clickCard.length === 2) {
                    const clickCardOne = clickCard[0].querySelector(".card-back").style
                        .backgroundColor;
                    const clickCardTwo = clickCard[1].querySelector(".card-back").style
                        .backgroundColor;
                    if (clickCardOne === clickCardTwo) {
                        completedCard.push(clickCard[0], clickCard[1]);
                        clickCard = [];
                        if (completedCard.length === horizontal * vertical) {
                            const endTime = new Date().getTime();
                            alert(`축하합니다   ${(endTime - stateTime.getTime()) / 1000}초 걸렸습니다`);
                            document.querySelector("#wrapper").innerHTML = "";
                            colorCandidate = colors.slice();
                            color = [];
                            completedCard = [];
                            stateTime = null;
                            shuffle();
                            setCard(horizontal, vertical);
                        }
                    }
                    else {
                        clickFlag = false;
                        setTimeout(() => {
                            clickCard[0].classList.remove("flipped");
                            clickCard[1].classList.remove("flipped");
                            clickFlag = true;
                            clickCard = [];
                        }, 1000);
                    }
                }
            }
        });
        (_a = document.querySelector("#wrapper")) === null || _a === void 0 ? void 0 : _a.append(card);
    }
    document.querySelectorAll(".card").forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("flipped");
        }, 1000 + 100 * index);
        setTimeout(() => {
            document.querySelectorAll(".card").forEach((card, index) => {
                card.classList.remove("flipped");
            });
            clickFlag = true;
            stateTime = new Date();
        }, 5000);
    });
}
shuffle();
setCard(horizontal, vertical);
