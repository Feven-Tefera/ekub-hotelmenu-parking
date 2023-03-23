//get element id 
var Plate = document.getElementById('Plate');
var model = document.getElementById('model');
let arraycounter = 0;
let counter = 0;
var emp = [];
var sname = [];
function createTable(){
    let x = document.forms["RegForm"]["Plate"].value;
    if (x == "") {
      alert("Plate must be filled out");
      return false;
    }
    let y = document.forms["RegForm"]["model"].value;
    if (y == "") {
      alert("Model must be filled out");
      return false;
    }
    var date = new Date();
    var table = document.getElementById("mytable");
    var row = table.insertRow();
    var Rows = document.getElementById('mytable').rows.length;
    row.id=Rows;
    var cell0 = row.insertCell(0)
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    counter++;
    cell0.innerHTML = counter;
    cell1.innerHTML = Plate.value;
    cell2.innerHTML = model.value;
    cell3.innerHTML = date.getHours()+':' + date.getMinutes()+ ':' +date.getSeconds(); 
    var remover=document.createElement('input');
    remover.type = "button"; 
    remover.value = "remove";
    remover.style = " background: linear-gradient(to bottom right, #EF4765, #FF9A5A); border: 0; font-size: 16px; font-weight: 500; line-height: 2.5;  outline: transparent; padding: 0 1rem; text-align: center; transition: box-shadow .2s ease-in-out;user-select: none;touch-action: manipulation; white-space: nowrap;";
    remover.onmouseover="this.style.box-shadow=' 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5)'"
    cell4.appendChild(remover); 
    remover.onclick = function(){
        const element = document.getElementById(Rows);
        element.remove(Rows);
    }

}

