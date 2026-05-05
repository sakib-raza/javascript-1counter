const countEl = document.querySelector(".count");
const addEl = document.querySelector(".plus-btn");
const subEl = document.querySelector(".minus-btn");
const changeByEl = document.querySelector(".changeby");
const resetEl = document.querySelector(".reset-btn");

addEl.addEventListener("click", ()=>{
    const counText = parseInt(countEl.innerText);
    const changeByValue = parseInt(changeByEl.value);
    countEl.innerText = counText+changeByValue;
})
subEl.addEventListener("click", ()=>{
    const counText = parseInt(countEl.innerText);
    const changeByValue = parseInt(changeByEl.value);
    countEl.innerText = counText-changeByValue;
})
resetEl.addEventListener("click", ()=>{
    countEl.innerText = "0";
})