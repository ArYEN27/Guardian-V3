topBtn=document.getElementById("t1");
rightBtn=document.getElementById("tr");
bottomBtn=document.getElementById("br");
leftBtn = document.getElementById("b1");
addbtn = document.getElementById("addbtn");


function showBtn() {
    console.log("Hello");
  rightBtn.innerHTML= `<img src="./images/pin.png" alt="">`;
  bottomBtn.innerHTML= `<img src="./images/web.png" alt="">`;
  leftBtn.innerHTML= `<img src="./images/lock.png" alt="">`;
  topBtn.innerHTML= `<img src="./images/web.png" alt="">`;
}



function hideBtn() {
console.log("Hide btn");
topBtn.innerHTML= ``
  rightBtn.innerHTML= ``
  bottomBtn.innerHTML= ``
  leftBtn.innerHTML= ``
}

// addbtn.addEventListener('mouseover', showBtn);
// addbtn.addEventListener('mouseout', hideBtn);

window.onload = function () {
  }