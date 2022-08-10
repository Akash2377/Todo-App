document.querySelector("form").addEventListener("submit", createTodo);
function createTodo(e) {
  e.preventDefault();
  var task = document.querySelector("#task").value;
  var priority = document.getElementById("priority").value;
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");

  td1.innerText = task;
  td2.innerText = priority;
  td3.innerText = "Delete";
  if (priority == "High") {
    td2.style.backgroundColor = "red";
  } else {
    td2.style.backgroundColor = "green";
  }
  td3.addEventListener("click", deleteData);
  tr.append(td1, td2, td3);
  document.querySelector("tbody").append(tr);
}
function deleteData(e) {
  e.target.parentNode.remove();
}
