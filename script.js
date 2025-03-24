document.addEventListener("DOMContentLoaded", function () {
    let yesBtn = document.getElementById("yes-btn");
    let noBtn = document.getElementById("no-btn");
    let size = 16; // Default font size for "Yes" button

    noBtn.addEventListener("mouseover", function () {
        size += 5; // Increase size
        yesBtn.style.fontSize = size + "px";
    });
});
