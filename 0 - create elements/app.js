document.body.onload = addElement;

function addElement() {
   let newElement = document.createElement("div");
   newElement.appendChild(document.createTextNode("Place Holder Text"));
   document.body.appendChild(newElement);
}


//var newdiv = document.createElement("DIV");
//newdiv.appendChild(document.createTextNode("some text"));
//document.body.appendChild(newdiv);
//newElement.classList.add("myDiv");
//newElement.appendChild(document.createTextNode("Place Holder Text"));
