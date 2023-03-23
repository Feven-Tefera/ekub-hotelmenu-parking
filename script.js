//get element id 

var names = document.getElementById('name');
var amount = document.getElementById('amount');
var getsum = document.getElementById("sum");
var random = document.getElementById("Random")
var sum = 0;
let arraycounter = 0;
let counter = 0;
var emp = [];
var sname = [];
var i=0; 
function createTable(){
  let x = document.forms["RegForm"]["name"].value;
  if (x == "") {
    alert("Plate must be filled out");
    return false;
  }
  let y = document.forms["RegForm"]["amount"].value;
  if (y == "") {
    alert("Model must be filled out");
    return false;
  }
    var table = document.getElementById("mytable");
    var row = table.insertRow();
    var cell0 = row.insertCell(0)
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    counter++;
    cell0.innerHTML = counter;
    cell1.innerHTML = names.value;
    cell2.innerHTML = amount.value;
   
emp[arraycounter]=amount.value;
const ConstRan = Math.floor(Math.random() * emp.length-1) + 1;
sname[arraycounter]=names.value;
random.innerHTML="winner is "+ sname[ConstRan];
arraycounter++;   

    sum+= Number(emp[i]); 
    i++;
console.log(sum);
getsum.innerHTML="Sum is: "+ sum;

}
/*
button.addEventListener('click', e => {
   let table_row = document.createElement("tr")
   table_row.setAttribute("id","mytr")
   document.getElementById("table").appendChild(table_row)

   var table_col = document.createElement("td")
   var t = document.createTextNode("new cell");
   table_col.appendChild(t);
   document.getElementById("mytr").appendChild(table_col)

    console.log('e gives the event listener object:', e)
  console.log('e.target gives the selected element: ', e.target)
  console.log(
    'e.target.textContent gives content of selected element: ',
    e.target.textContent
  )
  */
