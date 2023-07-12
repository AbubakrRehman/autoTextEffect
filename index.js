const text = document.getElementById("text");
let data = text.dataset.text;




function writeText() {
    text.innerHTML = "";
    let i = 0;
    let timer = setInterval(() => {
        if (i < data.length) {
            console.log(data[i]);
            text.innerHTML += data[i];
            i++;
        } else {
            i = 0;
            text.innerHTML = "";
            // clearInterval(timer);
        }

    }, 150)
}

writeText();

