document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const doctorResults = document.getElementById('doctor-results');
    const appointmentFormSection = document.getElementById('appointment-form-section');
    const doctorSelect = document.getElementById('doctor');
    const appointmentForm = document.getElementById('appointment-form');
    const notification = document.getElementById('notification');

    // Example list of doctors
    const doctors = [
        { id: 1, name: "Dr. Anil Sharma", specialization: "Cardiologist", experience: "10 years", location: "Delhi", fees: "₹1500" },
        { id: 2, name: "Dr. Priya Gupta", specialization: "Cardiologist", experience: "8 years", location: "Mumbai", fees: "₹1300" },
        { id: 3, name: "Dr. Ramesh Patel", specialization: "Dermatologist", experience: "6 years", location: "Bangalore", fees: "₹1000" },
        { id: 4, name: "Dr. Neha Singh", specialization: "Dermatologist", experience: "12 years", location: "Chennai", fees: "₹1200" },
        { id: 5, name: "Dr. Arjun Rao", specialization: "Pediatrician", experience: "5 years", location: "Hyderabad", fees: "₹900" },
        { id: 6, name: "Dr. Meera Nair", specialization: "Pediatrician", experience: "15 years", location: "Kolkata", fees: "₹1100" },
        { id: 7, name: "Dr. Vikas Sharma", specialization: "Neurologist", experience: "7 years", location: "Pune", fees: "₹1700" },
        { id: 8, name: "Dr. Aarti Joshi", specialization: "Neurologist", experience: "14 years", location: "Ahmedabad", fees: "₹2000" },
        { id: 9, name: "Dr. Sanjay Kumar", specialization: "Orthopedic", experience: "9 years", location: "Jaipur", fees: "₹1400" },
        { id: 10, name: "Dr. Sangeeta Verma", specialization: "Orthopedic", experience: "20 years", location: "Lucknow", fees: "₹1600" }
    ];

    // Handle search button click
    searchButton.addEventListener('click', () => {
        const searchValue = searchInput.value.trim().toLowerCase();
        const filteredDoctors = doctors.filter(doctor => doctor.specialization.toLowerCase().includes(searchValue));

        // Clear previous results
        doctorResults.innerHTML = '';

        if (filteredDoctors.length > 0) {
            filteredDoctors.forEach(doctor => {
                const doctorDiv = document.createElement('div');
                doctorDiv.classList.add('doctor-result');
                doctorDiv.innerHTML = `
                    <h3>${doctor.name}</h3>
                    <p>Specialization: ${doctor.specialization}</p>
                    <p>Experience: ${doctor.experience}</p>
                    <p>Location: ${doctor.location}</p>
                    <p>Fees: ${doctor.fees}</p>
                    <button class="select-doctor-btn" data-doctor-id="${doctor.id}">Select Doctor</button>
                `;
                doctorResults.appendChild(doctorDiv);
            });

            // Add event listeners to the "Select Doctor" buttons
            document.querySelectorAll('.select-doctor-btn').forEach(button => {
                button.addEventListener('click', event => {
                    const doctorId = event.target.getAttribute('data-doctor-id');
                    const selectedDoctor = doctors.find(doctor => doctor.id == doctorId);
                    populateDoctorSelect(selectedDoctor);
                    appointmentFormSection.style.display = 'block'; // Show appointment form
                    window.scrollTo(0, appointmentFormSection.offsetTop);
                });
            });
        } else {
            doctorResults.innerHTML = '<p>No doctors found for the given specialization.</p>';
        }
    });

    // Populate doctor select dropdown
    function populateDoctorSelect(doctor) {
        doctorSelect.innerHTML = `<option value="${doctor.id}">${doctor.name} - ${doctor.specialization}</option>`;
    }

    // Handle form submission
    appointmentForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const doctor = document.getElementById('doctor').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // Find the selected doctor
        const selectedDoctor = doctors.find(d => d.id == doctor);

        // Show notification
        showNotification(`Appointment booked with  ${selectedDoctor.name} for ${date} at ${time}`);

        // Reset the form (optional)
        appointmentForm.reset();
        appointmentFormSection.style.display = 'none'; // Hide form after submission
    });

    // Function to show notification
    function showNotification(message) {
        notification.innerText = message;
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000); // Hide notification after 3 seconds
    }
});
