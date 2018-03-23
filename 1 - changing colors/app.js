document.body.onload = changeColors;

function changeColors() {
   document.getElementById("change-header").style.color = "red";

}


let blue = document.querySelectorAll('p')
for (let i = 0; i < 4; i++) {
   blue[i].style.color = "blue";
   blue[i].style.fontSize = "10px";
   console.log(blue)
}



// Change the color of the header text to red and change the color of the p tags to blue and the font size of the p tags to 10px.
// your code here

//let x = document.innerHTML;
//for (let i = 0, i < x.length, i++)
//   x[i].style.backgroundColor = "blue";
