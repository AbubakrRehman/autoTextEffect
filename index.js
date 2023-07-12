const text = document.getElementById("text");
const speedElement = document.getElementById("speed");


let speed = 200 / parseInt(speedElement.value);
let data = text.dataset.text;
text.innerHTML = "";
let i = 0;
let timer = null;




function writeText() {

    if (i < data.length) {
        console.log(data[i]);
        text.innerHTML += data[i];
        i++;
    } else {
        i = 0;
        text.innerHTML = "";
        
    }
    // clearInterval(timer);
    // timer = setInterval(writeText, speed);

    
    timer = setTimeout(writeText, speed);

}

writeText();


speedElement.addEventListener("input", (e) => {
    // clearInterval(timer);
    console.log("spedd");
    speed = 200 / parseInt(e.target.value);
    // timer = setInterval(writeText, speed);
})

