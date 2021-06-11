var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomImage = "dice" + randomNumber1 + ".png";
var imageSource = "images/" + randomImage;
var leftimage = document.querySelectorAll("img")[0];

leftimage.setAttribute("src",imageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var imageSource2 = "images/" + randomImage2;
var rightImage = document.querySelectorAll("img")[1];

rightImage.setAttribute("src", imageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Hurray! Player 1 wins..."
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Hurray! Player 2 wins..."
}
else{
    document.querySelector("h1").innerHTML = "Its a draw...refresh again to win.."
}