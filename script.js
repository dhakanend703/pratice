let selecTed = null;

function sub(){
    event.preventDefault();
    let formData = readFormdata();

    if(selecTed === null){
        insertNewRecord(formData);

    }
    else{
        Update(formData);
    }
}

function readFormdata(){
    let formData ={};
    formData["name"]=document.getElementById("name").value;
    formData["email"]=document.getElementById("email").value;
    formData["Number"]=document.getElementById("Number").value;
    formData["Dob"]=document.getElementById("Dob").value;

    return formData;
}
function insertNewRecord(data){
    let table = document.getElementById("userlist").getElementsByTagName(`tbody`)[0];
    let newRow = table.insertRow(table.length);

    let cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.name;

        let cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.email;

        let cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Number;

        let cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.Dob;
       
        let cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button class="onn"  onClick="onEdit(this)"> edit</button>
        <button class="off" onClick="dell(this)">delete</button>`;
}
function onEdit(td){
    selecTed = td.parentElement.parentElement;
    document.getElementById("name").value = selecTed.cells[0].innerHTML;
    document.getElementById("email").value = selecTed.cells[1].innerHTML;
    document.getElementById("Number").value = selecTed.cells[2].innerHTML;
    document.getElementById("Dob").value = selecTed.cells[3].innerHTML;

}
function Update(formData){
    selecTed.cells[0].innerHTML = formData.name;
    selecTed.cells[1].innerHTML = formData.email;
    selecTed.cells[2].innerHTML = formData.Number;
    selecTed.cells[3].innerHTML = formData.Dob;
}
function dell(td){
    row = td.parentElement.parentElement;
    document.getElementById("userlist").deleteRow(row.rowIndex);
}