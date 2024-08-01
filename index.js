const btn = document.getElementById("btn");
const output = document.querySelector(".output");
const h3 = document.querySelector("h3");


let quote = [
    "Light travels faster than sound. This is why some people appear bright until you hear them speak",
    "Light travels faster than sound. This is why some people appear bright until you hear them speak.",
    "A bank is a place that will lend you money if you can prove that you don’t need it.",
    "My favorite machine at the gym is the vending machine.",
    "Don’t worry about the world coming to an end today. It is already tomorrow in Australia.",
    "If you think you are too small to make a difference, try sleeping with a mosquito.",
];



btn.addEventListener("click", ()=>{
    let random = Math.floor(Math.random()*quote.length) 
    h3.textContent = quote[random]
})



