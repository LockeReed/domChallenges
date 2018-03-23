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
   var newElement = document.getElementsByTagName("body");
   let newList = document.createElement("ul");
   var newElement = person.value;
   theElement.push(newList);
   newList += "<li>" + theElement + "</li>";
   document.getElementById("newElement").innerHTML = "";
   for (var i = 0; i < person.length; i++) {
      theList = "<li>" + person[i] + "</li>";
      body.appendChild.add("theList")
      document.getElementById("newElement").innerHTML += theList;
   }

}

// Use the data that you take in to create an unordered list containing the persons information.
// your code here

//var newList = document.createElement("ul");
//var newElement = document.createElement("li");
