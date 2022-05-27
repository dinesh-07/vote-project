const cnt1 = document.querySelector("#count1");
const cnt2 = document.querySelector("#count2");
const cnt3 = document.querySelector("#count3");

const totalCnt = document.querySelector("#totalCount");

var count1 = 0; var count2 = 0; var count3 = 0;
var sum =0;

function counter1() {
    count1 += 1;
    cnt1.innerHTML = count1;
}
function counter2() {
    count2 += 1;
    cnt2.innerHTML = count2;
}
function counter3() {
    count3 += 1;
    cnt3.innerHTML = count3;
}

function total(){
    sum = count1+count2+count3;
    totalCnt.innerHTML = sum;
    totalCnt.style.display="Inline";
}