// Get the container element
var linkContainer = document.getElementById("myNav");

// Get all buttons with class="btn" inside the container
var link = linkContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
