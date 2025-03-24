document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");

    let yesSize = 16; // Default font size in pixels

    noBtn.addEventListener("click", function () {
        yesSize += 5; // Palakihin ang "Yes" button kada click ng "No"
        yesBtn.style.fontSize = yesSize + "px";
        yesBtn.style.padding = (yesSize / 2) + "px"; // Adjust padding for better appearance
    });
});
