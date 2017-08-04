function setup() {
  resetForm();
}

function updateI() {
  var i = document.getElementById("importance");

  if (i.value == "Important") {
    i.value = "Not Important";
  } else {
    i.value = "Important";
  }
}

function updateU() {
  var i = document.getElementById("urgency");

  if (i.value == "Urgent") {
    i.value = "Not Urgent";
  } else {
    i.value = "Urgent";
  }
}

function addTask() {
  var task = document.getElementById("task").value;
  var radioI = document.getElementById("importance").value;
  var radioU = document.getElementById("urgency").value;
  var grid;

  //document.cookie = task=task;

  if (!task) {
    alert("A task summary is required to \r\nadd a new task to the matrix.");
  } else {
    grid = checkGrid(radioI, radioU);
  }

  var entry = document.createElement("h5");
  entry.innerHTML = task;
  document.getElementById(grid).appendChild(entry);
  //console.log(grid, entry);
  resetForm();
}

function checkGrid(i, u) {
  switch (true) {
    case i == "Important" && u == "Urgent":
      return "iu";
    case i == "Not Important" && u == "Urgent":
      return "nu";
    case i == "Important" && u == "Not Urgent":
      return "in";
    case i == "Not Important" && u == "Not Urgent":
      return "nn";
  }
}

function resetForm() {
  document.getElementById("task").value = "";
  document.getElementById("importance").value = "Important";
  document.getElementById("urgency").value = "Urgent";
}
