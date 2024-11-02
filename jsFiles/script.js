var Name = document.getElementById("Name")
var url = document.getElementById("url")

var Container;

if (localStorage.getItem("DATA") == null) {
    Container = [];
} else {
    Container = JSON.parse(localStorage.getItem("DATA"));
    display();
}

function add() {
    var data = {
        wName: Name.value,
        UrL: url.value,
    }
    Container.push(data);
    localStorage.setItem("DATA", JSON.stringify(Container));
    display();
    clearValue();
}

function display() {
    var arr = ""
    for (var i = 0; i < Container.length; i++) {
        arr += `
            <tr>
                <td>${i + 1}</td>
                <td>${Container[i].wName}</td>
                <td> <button class="btn btn-warning" id="visit" onclick="VISIT(${i})"><i class="fa-solid fa-eye"></i> Visit</button> </td>
                <td> <button class="btn btn-danger" onclick="deleteRow(${i})"><i class="fa-solid fa-trash-can"></i>Delete</button> </td>
            </tr> `
    }
    document.getElementById("tBody").innerHTML = arr;
}

function clearValue() {
    Name.value = "";
    url.value = "";
}

function deleteRow(i) {
    Container.splice(i, 1);
    localStorage.setItem("DATA", JSON.stringify(Container));
    display();
}

function VISIT(i) {
    window.open(Container[i].UrL , "_blank");
}

