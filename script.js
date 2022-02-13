///////////////////const b1 = document.querySelector("#b1")
const b2 = document.querySelector("#b2")
const b3 = document.querySelector("#b3")
const b4 = document.querySelector("#b4")
const b5 = document.querySelector("#b5")

const tHead = document.querySelector(".evt-head")
const tDate = document.querySelector(".evt-date")
const tPara = document.querySelector(".evt-para")

   
const e1 = {h:"Got into College🦸", para:"Studying engineering  in CS majors @ MMIT, Pune", date:"2021"};
const e2 = {h:"Learning Web Development", para:"Self taught HTML, CSS, Javascript, node.js, react.js now learning backend programming.", date:"2021"};
const e3 = {h:"Making Projects", para:"Check out my web dev projects in the below section👇", date:"2021"};
const e4 = {h:"Yet to be updated", para:"this section is yet to be updated", date:"2021"};
const e5 = {h:"Yet to be updated", para:"this section is yet to be updated", date:"2021"};

b1.addEventListener("click", () => {
    tHead.innerText = e1.h;
    tDate.innerText = e1.date;
    tPara.innerText = e1.para;

    
  })

b2.addEventListener("click", () => {
    tHead.innerText = e2.h;
    tDate.innerText = e2.date;
    tPara.innerText = e2.para;

    
  })
b3.addEventListener("click", () => {
    tHead.innerText = e3.h;
    tDate.innerText = e3.date;
    tPara.innerText = e3.para;

    
  })
b4.addEventListener("click", () => {
    tHead.innerText = e4.h;
    tDate.innerText = e4.date;
    tPara.innerText = e4.para;

    
  })
b5.addEventListener("click", () => {
    tHead.innerText = e5.h;
    tDate.innerText = e5.date;
    tPara.innerText = e5.para;

    
  })

