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
   var tableRef = document.getElementByTagName('table').getElementsByTagName('tbody')[0];
   var newRow = tableRef.insertRow(tableRef.rows.length);
   var cell1 = newRow.insertCell(0);
   var cell2 = newRow.insertCell(1);
   var cell3 = newRow.insertCell(2);
   var newText = document.createTextNode('New row');
   cell1.appendChild(newText);
   cell2.appendChild(newText);
   cell3.appendChild(newText);
}

// Use the data that you take in and itterate through it and add each pokemon to the table.
// your code here
