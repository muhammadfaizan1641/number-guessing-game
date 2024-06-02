let x;
let count;
function generateRandom(){
    x = Math.floor(Math.random()*101);
    count = 0;
}
generateRandom();
const box = document.querySelector(".box");
const form = document.querySelector("form");
const output = document.querySelector(".output");
const reset = document.querySelector("#reset");
const SbmtBtn = document.querySelector("#SbmtBtn");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    count++;
    if(box.value<x){
        output.innerHTML = `THINK GREATER THAN ${box.value}`;
    }
    else if(box.value>x){
        output.innerHTML = `THINK LESS THAN ${box.value}`;
    }
    else{

        output.innerHTML = `YOU WON IT WAS ${box.value} YOU TOOK ${count} ATTEMPTS;`
        reset.style.display="block";
        // box.disabled = true;
        // SbmtBtn.disabled = true;
        SbmtBtn.style.display="none";

    }
    box.value = null;
})

reset.addEventListener("click",()=>{
    SbmtBtn.style.display="block";
    output.innerHTML = "";
    reset.style.display = "none";
    generateRandom();
    // box.disabled = false;
    SbmtBtn.disabled = false;
    // form.reset(); Use in other place
    output.innerHTML = "GUESS THE RANDOM NUMBER BETWEEN<br> 1-100"
})

