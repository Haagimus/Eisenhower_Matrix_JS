var txtSize = "";
var taskCnt = 0;

function resetCookies() {
  document.cookie = "txtSize=14;";
  ldText();
}

function getCookie(cname) {
  var cookie = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(cookie) === 0) {
      return c.substring(cookie.length, c.length);
    }
  }
  return "";
}

function checkCnt() {
  var tC = getCookie("taskCnt");
  if (tC !== "") {
    taskCnt = tC;
  } else {
    taskCnt = 0;
  }
}

function setup() {
  // Reset the form after the page is loaded
  resetForm();
  ldText();
  checkCnt();
  // SQLConnect();
}

function login() {

}

function ldText() {
  var temp = getCookie("txtSize");
  if (temp === "") {
    txtSize = 14;
  } else {
    txtSize = temp;
    document.getElementById("textSize").value = txtSize;
    setText();
  }
}

function setText() {
  var cmbSize = document.getElementById("textSize");
  txtSize = cmbSize.options[cmbSize.selectedIndex].value + "px";

  var tasks = document.getElementsByClassName("task");

  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    task.style.fontSize = txtSize;
  }
  if(txtSize.length === 4) {
    document.cookie = "txtSize=" + txtSize.substring(0, 2) + ";";
  } else {
    document.cookie = "txtSize=" + txtSize.substring(0, 1) + ";";
  }
}

function updateI() {
  var i = document.getElementById("importance");

  // Check the state of the importance button
  // and sway the display on the button
  if (i.value === "Important") {
    i.value = "Not Important";
  } else {
    i.value = "Important";
  }
}

function updateU() {
  var i = document.getElementById("urgency");

  // Check the state of the urgency button
  // and sway the display on the button
  if (i.value === "Urgent") {
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
  var d = new Date();
  var y = d.getFullYear() + 5;

  taskCnt++;
  document.cookie = "taskCnt=" + taskCnt + y + ";";

  // Verify the task field has an entry otherwise alert
  // the user that is a required field
  if (!task) {
    alert("A task summary is required to \r\nadd a new task to the matrix.");
    return;
  }
  // Determing the grid square location based on
  // the importance and urgency button selections
  grid = checkGrid(radioI, radioU);

  // Create the new task in the corresponding grid field
  // and set its property to no-select
  var entry = document.createElement("p");
  entry.innerHTML = task;
  entry.style.fontSize = txtSize;
  entry.className = "no-select task";
  entry.textDecoration = "none";
  entry.style.zIndex = 1;
  document.getElementById(grid).appendChild(entry);

  // Reset the form
  resetForm();
}

//function getFocus() {
//  // Set focus to the task field
//  document.getElementById("task").focus();
//}

function checkGrid(i, u) {
  // Check the state of the importance and urgency
  // buttons then return the correct grid id
  switch (true) {
    case i === "Important" && u === "Urgent":
      return "iu";
    case i === "Not Important" && u === "Urgent":
      return "nu";
    case i === "Important" && u === "Not Urgent":
      return "in";
    case i === "Not Important" && u === "Not Urgent":
      return "nn";
              }
}

function strikeOut(e) {
  // e.target is the clicked element
  // if the item clicked was an h5 element
  if (e.className === "no-select task") {
    var isStruck = e.style.textDecoration;

    // If the item is already marked with line-through
    // toggle it and vice versa
    if (isStruck === "line-through") {
      e.style.textDecoration = "none";
      e.style.color = "black";
    } else {
      e.style.textDecoration = "line-through";
      e.style.color = "grey";
    }
  }
}

function resetForm() {
  // Reset all fields to their defaults then set focus to task
  document.getElementById("task").value = "";
  document.getElementById("importance").value = "Important";
  document.getElementById("urgency").value = "Urgent";
  // getFocus();
}

// Get the modal
var modal = document.getElementById('settings');

// Get the button that opens the modal
var settings = document.getElementById("openSettings");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
settings.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(click) {
    if (click.target === modal) {
        modal.style.display = "none";
    }
};

// All of the following monitor for double clicks on all
// tasks that have been entered into the grid and then
// line-through or remove line-through
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

// Handler to detect enter keypress on page
function handleEnter(e) {
  var keycode = e.keyCode ? e.keyCode : e.which;
  if (keycode === 13) {
    if (document.getElementById("settingsMenu").clientWidth === 0) {
      addTask();
    } else {
      login();
    }
  }
}