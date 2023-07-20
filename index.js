let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 +".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 +".png");

function Winner(n1, n2) {
    if(n1 > n2) {
        document.querySelector("h1").innerHTML = "Player1 wins🚩🚩🚩 !";
    }

    else if(n1 < n2) {
        document.querySelector("h1").innerHTML = "Player2 wins🚩🚩🚩 !";
    }

    else {
        document.querySelector("h1").innerHTML = "Game Draw🏁!"
    }
}

Winner(randomNumber1, randomNumber2);

