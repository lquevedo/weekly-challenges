/*EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters.
Example output: “The name Thomas is longer than John by 2 characters”*/

var name1 = 'Luis';
var name2 = 'Seyfat';

function findDiff() {
    if (name1.length > name2.length) {
        var diffNames = name1.length - name2.length;
        console.log('The name ' + name1 + ' is greater than ' + name2 + ' by ' + diffNames);
    } else if (name1.length < name2.length) {
        var diffNames = name2.length - name1.length;
        console.log('The name ' + name1 + ' is less than ' + name2 + ' by ' + diffNames);
    } else if (name1.length === name2.length) {
        var diffNames = name2.length - name1.length;
        console.log('The name ' + name1 + ' has the same number of letters as ' + name2);
    }
}

findDiff();


