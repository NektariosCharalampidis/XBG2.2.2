function startQuiz() {
    document.getElementById("quiz-container").style.display = "block";
}

function submitQuiz() {
    let answers = {
        q1: "α",
        q2: "γ",
        q3: "β",
        q4: "β",
        q5: "α",
        q6: "β",
        q7: "γ",
        q8: "β",
        q9: "α",
        q10: "γ"
    };

    let userAnswers = {};
    let correctCount = 0;
    let totalQuestions = Object.keys(answers).length;

    for (let key in answers) {
        let selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected) {
            userAnswers[key] = selected.value;
            if (selected.value === answers[key]) {
                correctCount++;
            }
        } else {
            userAnswers[key] = null;
        }
    }

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>Σωστές απαντήσεις: ${correctCount} / ${totalQuestions}</p>`;

    if (correctCount === totalQuestions) {
        resultDiv.innerHTML += `<p>Μπράβο! Τα κατάφερες τέλεια!</p>`;
    } else {
        resultDiv.innerHTML += `<h3>Λάθη & Σωστές Απαντήσεις:</h3><ul>`;
        for (let key in answers) {
            if (userAnswers[key] !== answers[key]) {
                resultDiv.innerHTML += `<li>Ερώτηση ${key.slice(1)}: 
                <span style="color: red;">Λάθος</span>, η σωστή απάντηση είναι <b>${answers[key]}</b></li>`;
            }
        }
        resultDiv.innerHTML += `</ul>`;
    }
}
