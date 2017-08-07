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
    return;
  } else {
    grid = checkGrid(radioI, radioU);
  }

  var entry = document.createElement("h5");
  entry.innerHTML = task;
  entry.className = "no-select";
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

function strikeOut(e) {
  // e.target is the clicked element
  // if the item clicked was an h5 element
  if(e && e.localName == "h5") {

    var isStruck = (e.style.textDecorationLineThrough);

    if (isStruck) {
      e.style.textDecorationLineThrough = false;
      e.style.color = "black";
    } else {
      e.style.textDecorationLineThrough = true;
      e.style.color = "grey";
    }
  }
}

function resetForm() {
  document.getElementById("task").value = "";
  document.getElementById("importance").value = "Important";
  document.getElementById("urgency").value = "Urgent";
}

document.getElementById("iu").addEventListener("dblclick", function(e) {
  strikeOut(e.target);
});
document.getElementById("in").addEventListener("dblclick", function(e) {
  strikeOut(e.target);
});
document.getElementById("nu").addEventListener("dblclick", function(e) {
  strikeOut(e.target);
});
document.getElementById("nn").addEventListener("dblclick", function(e) {
  strikeOut(e.target);
});
