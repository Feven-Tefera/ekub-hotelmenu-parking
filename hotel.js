var namee = document.getElementById('food');
var ingg = document.getElementById('ingri');
var prices = document.getElementById('prices');
let counter = 0;
function createTable() {
    let x = document.forms["RegForm"]["food"].value;
    if (x == "") {
        alert("Plate must be filled out");
        return false;
    }
    let y = document.forms["RegForm"]["ingri"].value;
    if (y == "") {
        alert("Model must be filled out");
        return false;
    }
    let z = document.forms["RegForm"]["prices"].value;
    if (z == "") {
        alert("Model must be filled out");
        return false;
    }
    var table = document.getElementById("mytable");
    var row = table.insertRow();
    var Rows = document.getElementById('mytable').rows.length;
    row.id = Rows;
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    counter++;
    cell0.innerHTML = counter;
    cell1.innerHTML = namee.value;
    cell2.innerHTML = ingg.value;
    cell3.innerHTML = prices.value + " birr";
    var remover = document.createElement('input');
    remover.type = "button";
    remover.value = "remove";
    remover.style = " background: linear-gradient(to bottom right, #EF4765, #FF9A5A); border: 0; font-size: 16px; font-weight: 500; line-height: 2.5;  outline: transparent; padding: 0 1rem; text-align: center; transition: box-shadow .2s ease-in-out;user-select: none;touch-action: manipulation; white-space: nowrap;";
    remover.onmouseover = "this.style.box-shadow=' 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5)'"
    cell4.appendChild(remover);
    remover.onclick = function () {
        const element = document.getElementById(Rows);
        element.remove(Rows);
    }


}