

setTimeout( () => {
    console.log("Hehe så att säga...");
}, 5000);






let clockEl = document.querySelector("#clock")
let easterEgg = document.querySelector("#easter-egg")

let clock = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let time = `${hrs}:${mins}:${secs}`;
    clockEl.innerText = time;
}

// let tick = 0;
setInterval ( () => {
    // tick++;
    clock();
}, 1000);

setTimeout( () => {
    easterEgg.innerText = "Hehe, om en tänker...";
}, 10000);