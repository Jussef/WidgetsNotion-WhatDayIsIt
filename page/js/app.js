let today = new Date();
let dateStart = new Date("11/22/2021");
let dateEnd = new Date("12/19/2021");


let milisegundosDia = 24 * 60 * 60 * 1000;
let milisegundosTranscurridos = Math.abs(dateStart.getTime() - today.getTime());
let diasTranscurridos = Math.round(milisegundosTranscurridos / milisegundosDia);


var text = document.createElement("P");

if (diasTranscurridos < 27) {
    text.innerHTML = "<p>Today is day <span class='date'>" + diasTranscurridos + "</span> of the challenge</p>";
} else if (diasTranscurridos == 27) {
    text.innerHTML = "<p>Last day of the challenge 🏁</p>";
} else if (diasTranscurridos > 27) {
    text.innerHTML = "<p>The challenge is over 💚</p>";
}

document.getElementById("section").appendChild(text);


console.log(diasTranscurridos);