// Dummy data
const dummyPatients = [
    { id: 1, name: 'John Doe', summary: 'Recent check-up', medicalHistory: 'No significant issues', age: 34, contact: 'john@example.com' },
    { id: 2, name: 'Jane Smith', summary: 'Routine check-up', medicalHistory: 'Diabetes', age: 29, contact: 'jane@example.com' },
    { id: 3, name: 'Emily Johnson', summary: 'Annual physical', medicalHistory: 'High blood pressure', age: 45, contact: 'emily@example.com' },
    { id: 4, name: 'Michael Brown', summary: 'Consultation for headache', medicalHistory: 'Migraines', age: 51, contact: 'michael@example.com' },
    { id: 5, name: 'Jessica Taylor', summary: 'Follow-up visit', medicalHistory: 'Asthma', age: 38, contact: 'jessica@example.com' },
];

// Function to toggle the mobile menu
function toggleMenu() {
    const header = document.querySelector('.header');
    header.classList.toggle('active');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Fetch and display patient history data
document.getElementById('search-btn').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.toLowerCase();
    if (query.trim() === '') {
        alert('Please enter a search query');
        return;
    }
    fetchPatientHistory(query);
});

// Clear search input and results
document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('search-input').value = '';
    document.getElementById('history-container').innerHTML = '';
});

// Fetch patient history from dummy data
function fetchPatientHistory(query) {
    // Show loading spinner
    document.getElementById('history-container').innerHTML = '<div class="loading-spinner"></div>';
    
    // Filter dummy data based on the query
    const results = dummyPatients.filter(patient => patient.name.toLowerCase().includes(query));

    setTimeout(() => {
        const container = document.getElementById('history-container');
        container.innerHTML = ''; // Clear previous results

        if (results.length === 0) {
            container.innerHTML = '<p>No results found.</p>';
            return;
        }

        results.forEach(patient => {
            const patientDiv = document.createElement('div');
            patientDiv.className = 'patient-record';
            patientDiv.innerHTML = `
                <h3>${patient.name}</h3>
                <p>${patient.summary}</p>
                <button class="view-details" data-id="${patient.id}">View Details</button>
            `;
            container.appendChild(patientDiv);
        });

        // Add pagination if needed
        addPagination(results);
    }, 1000); // Simulate network delay
}

// Show detailed view for a patient record
document.getElementById('history-container').addEventListener('click', function(event) {
    if (event.target.classList.contains('view-details')) {
        const patientId = event.target.getAttribute('data-id');
        fetchPatientDetails(patientId);
    }
});

function fetchPatientDetails(id) {
    // Find patient details from dummy data
    const patient = dummyPatients.find(p => p.id == id);
    if (!patient) {
        document.getElementById('history-container').innerHTML = '<p>Patient not found.</p>';
        return;
    }

    const container = document.getElementById('history-container');
    container.innerHTML = `
        <div class="patient-details">
            <h2>${patient.name}</h2>
            <p><strong>Age:</strong> ${patient.age}</p>
            <p><strong>Medical History:</strong> ${patient.medicalHistory}</p>
            <p><strong>Contact:</strong> ${patient.contact}</p>
            <button id="back-btn">Back to Results</button>
        </div>
    `;

    document.getElementById('back-btn').addEventListener('click', function() {
        fetchPatientHistory(document.getElementById('search-input').value);
    });
}

// Example function to add pagination (you may need to adjust based on your requirements)
function addPagination(data) {
    // Placeholder for pagination logic
    // For example, you can limit the number of results per page and provide navigation controls
}
