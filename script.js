const b1 = document.querySelector("#b1")
const b2 = document.querySelector("#b2")
const b3 = document.querySelector("#b3")
const b4 = document.querySelector("#b4")
const b5 = document.querySelector("#b5")

const tHead = document.querySelector(".evt-head")
const tDate = document.querySelector(".evt-date")
const tPara = document.querySelector(".evt-para")

const e1 = {h:"Heading 1", para:"lorem ipsom", date:"2021"};
const e2 = {h:"Heading 2", para:"lorem ipsom", date:"2021"};
const e3 = {h:"Heading 3", para:"lorem ipsom", date:"2021"};
const e4 = {h:"Heading 4", para:"lorem ipsom", date:"2021"};
const e5 = {h:"Heading 5", para:"lorem ipsom", date:"2021"};

b1.addEventListener("click", () => {
    tHead.innerText = e1.h;
    tDate.innerText = e1.date;
    tPara.innerText = e1.para;

    console.log("click");
  })

b2.addEventListener("click", () => {
    tHead.innerText = e2.h;
    tDate.innerText = e2.date;
    tPara.innerText = e2.para;

    console.log("click");
  })
b3.addEventListener("click", () => {
    tHead.innerText = e3.h;
    tDate.innerText = e3.date;
    tPara.innerText = e3.para;

    console.log("click");
  })
b4.addEventListener("click", () => {
    tHead.innerText = e4.h;
    tDate.innerText = e4.date;
    tPara.innerText = e4.para;

    console.log("click");
  })
b5.addEventListener("click", () => {
    tHead.innerText = e5.h;
    tDate.innerText = e5.date;
    tPara.innerText = e5.para;

    console.log("click");
  })