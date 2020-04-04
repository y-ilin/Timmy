let i = 0;

const upButton = document.getElementsByClassName("upButton")[0];
const downButton = document.getElementsByClassName("downButton")[0];
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetbutton");


upButton.addEventListener("click", function(){
    i+=2;
    counter.innerHTML=i;
    if (i>=10){
        resetButton.style.display = "block";
        document.body.style.backgroundColor = "red";
    }
})

downButton.addEventListener("mouseover", function(){
    i-=1;
    counter.innerHTML=i;
})

resetButton.addEventListener("click", function(){
    i=0;
    counter.innerHTML=i;
    document.body.style.backgroundColor = "white";
    resetButton.style.display = "none";
})