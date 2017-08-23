// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(click) {
    if (click.target === modal) {
        modal.style.display = "none";
    }
};
