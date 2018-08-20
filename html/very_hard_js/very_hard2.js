// create names
var names ="Luis Quevedo, Derik Solis, Horacio Hernandez, Seyfat Khamidov";
// splits it by the comma 
var arrayNames = names.split(",");
// array to hold last names 
var lastNames = [];
// array to hold final names 
var finalNames = [];
// loops the names and assigns them to last names array
for(var i = 0; i <arrayNames.length; i++) {
// trims the white space between the names and reverses to last name
    var currentName = arrayNames[i].trim().split(" ").reverse()
// pushes currentName to the last names variable
    lastNames.push(currentName)
}
// sorts last names alphabetically
lastNames.sort()
// reverses the reverses and joins the names
for(var j = 0; j < lastNames.length; j++) {
// reverses the previous reverse
    var currentLastName = lastNames[j].reverse().join(" ")
// 
    finalNames.push(currentLastName)

}

var namesContainer = document.getElementById('names-container')

for(var k = 0; k < finalNames.length; k++) {

    var nameParts = finalNames[k].split(" ")

    var pEl = document.createElement("p")

    pEl.innerHTML = nameParts[0] + "<span>" + nameParts[1] + "</span>"

    namesContainer.appendChild(pEl);
}