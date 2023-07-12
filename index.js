const text = document.getElementById("text");
const speedElement = document.getElementById("speed");


let speed = 300 / parseInt(speedElement.value);
let data = text.dataset.text;
text.innerHTML = "";
let i = 0;
let timer = null;




function writeText() {

    timer = setInterval(function () {
        if (i < data.length) {
            console.log(data[i]);
            text.innerHTML += data[i];
            i++;
        } else {
            i = 0;
            text.innerHTML = "";
            // clearInterval(timer);
        }

    }, speed)
}

writeText();


speedElement.addEventListener("input", (e) => {
    clearInterval(timer);
    console.log("spedd");
    speed = 300 / parseInt(e.target.value);
    timer = setInterval(function () {
        if (i < data.length) {
            console.log(data[i]);
            text.innerHTML += data[i];
            i++;
        } else {
            i = 0;
            text.innerHTML = "";
            // clearInterval(timer);
        }

    }, speed)
})

