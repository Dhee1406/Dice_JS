var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var diceImage1 = "dice" + randomNumber1 + ".png";

var imagesfol1 = "./images/" + diceImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imagesfol1);




var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imagesfol2 = "./images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute('src', imagesfol2);




if (randomNumber1 > randomNumber2) {
    document.querySelector("h3").innerHTML = "🚩Player 1 wins";

}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h3").innerHTML = "Player 2 wins🚩";
}

else {
    document.querySelector("h3").innerHTML = "🚩Draw🚩";
}