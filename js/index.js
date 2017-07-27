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

  if (!task) {
    alert("A task summary is required to \r\nadd a new task to the matrix.");
  } else {
    switch (true) {
      case radioI == "Important" && radioU == "Urgent":
        grid = "iu";
        // console.log(task, radioI, radioU);
        break;
      case radioI == "Not Important" && radioU == "Urgent":
        grid = "nu";
        // console.log(task, radioI, radioU);
        break;
      case radioI == "Important" && radioU == "Not Urgent":
        grid = "in";
        // console.log(task, radioI, radioU);
        break;
      case radioI == "Not Important" && radioU == "Not Urgent":
        grid = "nn";
        // console.log(task, radioI, radioU);
        break;

      resetForm();
      // var entry = document.createElement("li");
      // entry.appendChild(document.createTextNode(task));
    }
  }
}

function resetForm() {
  document.getElementById("task").value = "";
  document.getElementById("importance").value = "Important";
  document.getElementById("urgency").value = "Urgent";
}
