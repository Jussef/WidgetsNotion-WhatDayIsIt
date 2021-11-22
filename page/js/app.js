// let dateStart = new Date("11/22/2021");
let today = new Date();
let dateEnd = new Date("12/19/2021");

var diasTranscurridos = Math.floor(( today.getTime() - dateEnd.getTime()) / 86400000 + 28)
console.log(diasTranscurridos);
///


var text = document.createElement("P");

if (diasTranscurridos < 28) {
    text.innerHTML = "<p>Today is day <span class='date'>" + diasTranscurridos + "</span> of the challenge</p>";
} else if (diasTranscurridos == 28) {
    text.innerHTML = "<p>Last day of the challenge 🏁</p>";
} else if (diasTranscurridos > 28) {
    text.innerHTML = "<p>The challenge is over 💚</p>";
}

document.getElementById("section").appendChild(text);


console.log(diasTranscurridos);