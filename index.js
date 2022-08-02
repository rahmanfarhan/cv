var randomNumber = Math.floor(Math.random() * 4 + 1); //1-4

var randomFarhanImage = "Farhan" + randomNumber + ".png" // Farhan1.png - Farhan4.png

var randomImageSource = "images/" + randomFarhanImage;

var profileImage = document.querySelectorAll("img")[0];

profileImage.setAttribute("src", randomImageSource);
