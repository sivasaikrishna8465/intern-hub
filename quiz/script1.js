function submitQuiz() {
    let score = 0;
    const answers = { 
        q1: "HyperText Markup Language", 
        q2: "HTML, Head, Title, Body",
        q3:"an empty tag",
        q4:"and tag",
        q5:"horizontal ruler",
        q6:"id"

     };
    
    Object.keys(answers).forEach(question => 
        {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) 
            {
            score++;
            }
    }
);
    
    document.getElementById("score").textContent = `Score: ${score}/6`;
}