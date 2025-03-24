document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const questionText = document.getElementById("question");

    let yesIndex = 0;
    let noIndex = 0;

    let yesQuestions = [
        "220 ba ean?:<", "Baka namali kalang nang tap gi na :<",
        "22o tlga?", "weh??", "di nga?", "Bat parang napipilitan ka?",
        "D'wag na, parang napipilitan kalang eh"
    ];

    let noQuestions = [
        "Pls?:<", "C-gurado naba ean?:<<", "Last chance:<<<",
        "Baka gusto mo pag-isipan ulit?:<<<< ", "sakit mo nmn:<<<<<< peru pls?",
        "baka kaya pato late game?:<<<<<<", "ayaw mo maawa?:<<<<<<<<",
        "kung ako nlng sana~~ baks nmn:<<<<<<<<<", "awa nlng tlga baks,awa nlng:<<<<<<<<<",
        "Tigas nang hart mo!"
    ];

    yesBtn.addEventListener("click", function () {
        if (yesIndex < yesQuestions.length) {
            questionText.textContent = yesQuestions[yesIndex];
            yesIndex++;
        } else {
            questionText.textContent = "Yay! Na-convince rin kita! 💖";
        }
    });

    noBtn.addEventListener("click", function () {
        if (noIndex < noQuestions.length) {
            questionText.textContent = noQuestions[noIndex];
            noIndex++;
        } else {
            questionText.textContent = "Okay, natanggap ko na. 😢";
        }
    });
});
