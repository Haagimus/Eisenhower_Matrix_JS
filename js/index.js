function setup() {
  document.getElementById("submit").style.display = "none";
  document.getElementById("task").value = "";
  document.getElementById("radio1").checked = true;
  document.getElementById("radio3").checked = true;
}

function update() {
  var task = document.getElementById("task").value;
  if (!task) {
    document.getElementById("submit").style.display = "none";
  } else {
    document.getElementById("submit").style.display = "inline-block";
  }
}

function addTask() {
  var task = document.getElementById("task").value;
  var radioI = document.getElementsByName("importance");
  var radioU = document.getElementsByName("urgency");

  for (var i = 0; i < 2; i++) {
    if (radioI[i].checked) {
      // if (i = 0) {i = 1;} else {i = 2;};
      radioI = document.getElementById("radio" + (i + 1)).value;
      break;
    }
  }
  for (var i = 0; i < 2; i++) {
    if (radioU[i].checked) {
      // if (i = 0) {i = 3;} else {i = 4;};
      radioU = document.getElementById("radio" + (i + 3)).value;
      break;
    }
  }
  console.log(task, radioI, radioU);
  reset();
}

function reset() {
  document.getElementById("task").value = "";
  document.getElementById("radio1").checked = true;
  document.getElementById("radio3").checked = true;
}
