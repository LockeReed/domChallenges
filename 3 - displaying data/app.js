document.body.onload = () => {
   displayData(person)
};

let person = {
   name: "race",
   age: 25,
   city: "Phoenix"
}
let theElement = [];
let newList = "";

function displayData(data) {
   var body = document.querySelector("body");
   let newList = document.createElement("ul");

   for (var key in person) {
      let li = document.createElement("li");
      li.textContent = key + " - " + person[key];
      newList.appendChild(li);
   }
   console.log(newList);
   body.appendChild(newList);

}

// Use the data that you take in to create an unordered list containing the persons information.
// your code here

//var newList = document.createElement("ul");
//var newElement = document.createElement("li");
