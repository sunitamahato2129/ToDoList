let inputs = document.querySelectorAll("input");
let button = document.querySelector("button");
let table = document.querySelector("table");
let row;

function formHandle() {
  event.preventDefault();
  let name = inputs[0].value;
  let salary = inputs[1].value;
  let company = inputs[2].value;

  
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let update = document.createElement("button");
  let deletee = document.createElement("button");

 if (button.innerText == "Submit") {
    update.innerText = "Update";
    deletee.innerText = "Delete";

    td1.innerText = name;
    td2.innerText = salary;
    td3.innerText = company;
    td4.appendChild(update);
    td4.appendChild(deletee);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    table.appendChild(tr);

    update.addEventListener("click", () => {
      inputs[0].value = name;
      inputs[1].value = salary;
      inputs[2].value = company;

      button.innerText = "Update";
      row = tr;
    });


    button.addEventListener("click", () => {
        if (btn.innerText == "Update") {
          btn.innerText = "Submit";
        }
      });



    deletee.addEventListener("click", () => {
      tr.remove();
    });

    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
  } else if (button.innerText == "Update") {
    row.cells[0].innerText = name;
    row.cells[1].innerText = salary;
    row.cells[2].innerText = company;

    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
  }
}
function x() {
  let name = inputs[0].value;
  let salary = inputs[1].value;
  let company = inputs[2].value;

  if (name == "" || salary == "" || company == "") {
    button.style.cursor = "not-allowed";
    button.style.backgroundColor = "red";
    button.disabled = true


    // button.style.display="none"
  } else {
    button.style.cursor = "pointer";
    button.style.backgroundColor = "green";
    button.disabled = false
  }
}

function y() {
  button.style.backgroundColor = "black";
  // button.style.display="inline"
}

// if(name==""|| salary==""|| company==""){
//     alert("input fields are empty")
// }