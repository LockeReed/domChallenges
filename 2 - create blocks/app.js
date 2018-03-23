// Create 10 divs with the classes 'red' and 'black'. Interchange these to create a checkerboard pattern.

for (let i = 1; i < 11; i++) {
   let newDiv = document.createElement("div");

   //newDiv.classList.add("black");
   document.getElementsByTagName('body')[0].appendChild(newDiv);
   if ((newDiv[i] % 2) === 0) {
      newDiv.classList.add("red");
   } else {
      newDiv.classList.add("black");
   }
   //if (newDiv[i] % 2 === 0) {
   //
   //    let x = ('black')
   // } else {
   //  let x = ('red')
}
//}





//for (let i = 0; i < 10; i++) {
//   let newDiv = document.createElement("div");
//console.log(i)
// newDiv.classList.add('red')

//document.getElementsByTagName('body')[0].appendChild(newDiv);
//console.log(newDiv);
