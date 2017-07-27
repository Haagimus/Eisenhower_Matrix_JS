function setup() {
  document.getElementById("task").value = "";
  document.getElementById("radio1").checked = true;
  document.getElementById("radio3").checked = true;
}

function addTask() {
  var task = document.getElementById("task").value;
  var radioI = document.getElementsByName("importance");
  var radioU = document.getElementsByName("urgency");
  var grid;

  for (var i = 0; i < 2; i++) {
    if (radioI[i].checked) {
      radioI = document.getElementById("radio" + (i + 1)).value;
      break;
    }
  }
  for (var i = 0; i < 2; i++) {
    if (radioU[i].checked) {
      radioU = document.getElementById("radio" + (i + 3)).value;
      break;
    }
  }

  switch (true) {
    case radioI == "Important" && radioU == "Urgent":
      grid = "iu";
      console.log(grid);
      break;
    case radioI == "Not Important" && radioU == "Urgent":
      grid = "nu";
      console.log(grid);
      break;
    case radioI == "Important" && radioU == "Not Urgent":
      grid = "in";
      console.log(grid);
      break;
    case radioI == "Not Important" && radioU == "Not Urgent":
      grid = "nn";
      console.log(grid);
      break;
  }

  // var entry = document.createElement("li");
  // entry.appendChild(document.createTextNode(task));


  reset();
}

function reset() {
  document.getElementById("task").value = "";
  document.getElementById("radio1").checked = true;
  document.getElementById("radio3").checked = true;
}
