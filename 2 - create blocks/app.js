document.body.onload = genBlocks;

let newDiv = getElementsByTagName('body');

function genBlocks() {
   for (let i = 0, i < 10, i++) {
      let blocks[i] = document.createElement("div");
      blocks.classList.add("x");
      newDiv.appendChild(blocks);
      if (blocks[i] % 2 === 0) {
         x = "black"
      } else {
         x = "red"
      }
   }
}

// Create 10 divs with the classes 'red' and 'black'. Interchange these to create a checkerboard pattern.
// your code here
