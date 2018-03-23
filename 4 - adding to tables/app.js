document.body.onload = () => {
   addPokemon(pokemonToAdd)
};

let pokemonToAdd = [{
      id: 10,
      name: "Caterpie",
      type: "Bug"
   },
   {
      id: 25,
      name: "Pikachu",
      type: "Electric"
   },
   {
      id: 27,
      name: "Sandshrew",
      type: "Ground"
   },
]

function addPokemon(data) {
   var table = document.getElementById('theTable');
   var row = table.insertRow(3);
   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);
   cell1.innerHTML = "1";
   cell2.innerHTML = "2";
   cell3.innerHTML = "3";
   for (let i = 0; i < pokemonToAdd.length; i++) {
      pokemonToAdd[i].id = cellId;
      pokemonToAdd[i].name = cellName;
      pokemonToAdd[i].type = cellType;
   }
   /*var table = document.getElementById('theTable');
   var row = table.insertRow(3);
   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);
   cell1.innerHTML = "1";
   cell2.innerHTML = "2";
   cell3.innerHTML = "3";*/



   //for (let i = 0; i < pokemonToAdd.length; i++)
   //pokemonToAdd[i].name

}

// Use the data that you take in and itterate through it and add each pokemon to the table.
// your code here

/*var tableRef = document.getElementByTagName('table').getElementsByTagName('tbody')[0];
var newRow = tableRef.insertRow(tableRef.rows.length);
var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);
var newText = document.createTextNode('New row');
cell1.appendChild(newText);
cell2.appendChild(newText);
cell3.appendChild(newText);*/
