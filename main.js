

setTimeout( () => {
    document.querySelector("#easter-egg").innerText = "Hehe, om en tänker...";
}, 10000);


let clock = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    let time = `${hrs}:${mins}:${secs}`;

    document.querySelector("#clock").innerText = time;
    setInterval ( () => clock(), 1000);
}

clock();