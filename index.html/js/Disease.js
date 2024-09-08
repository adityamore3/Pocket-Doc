document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('prediction-form');
    const resultsDiv = document.getElementById('results');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the form from submitting the traditional way

        // Get symptom values from form inputs
        const symptom1 = document.getElementById('symptom1').value.trim();
        const symptom2 = document.getElementById('symptom2').value.trim();
        const symptom3 = document.getElementById('symptom3').value.trim();

        // Check if any of the fields are empty
        if (!symptom1 || !symptom2 || !symptom3) {
            resultsDiv.innerHTML = '<p class="error">Please fill out all fields.</p>';
            return;
        }

        // Placeholder for disease prediction logic
        // For demonstration purposes, we'll just show the input values
        // You can replace this with actual prediction logic or API call
        const predictedDisease = `Disease predicted based on symptoms: ${symptom1}, ${symptom2}, ${symptom3}`;

        resultsDiv.innerHTML = `<p class="success">${predictedDisease}</p>`;
    });
});
