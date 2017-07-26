function setup() {
  document.getElementById("submit").style.display = "none";
  document.getElementById("task").value = "";
  document.getElementById("radio1").checked = true;
  document.getElementById("radio3").checked = true;
}

function update() {
  var task = document.getElementById("task").value;
  console.log(task);
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

  for (var i = 0; i < radioI.length; i++) {
    if (radioI[i].checked) {
      radioI = document.getElementById(radioI[i]).value;
      break;
    }
  }
  for (var i = 0; i < radioU.length; i++) {
    if (radioU[i].checked) {
      radioU = document.getElementById(radioU[i]).value;
      break;
    }
  }
  console.log(summary, importance, urgency);
}
