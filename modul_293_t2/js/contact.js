// Save form data in localStorage after each field is filled out
function attachEventListeners() {
    const formFields = ['name', 'email', 'phone', 'message'];

    formFields.forEach(field => {
        document.getElementById(field).addEventListener('input', () => {
            saveFormData(); // Save form data whenever any field is updated
        });
    });
}

// Save the entire form data as an object in localStorage
function saveFormData() {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    localStorage.setItem('form_data', JSON.stringify(formData));
}

// Open modal and display stored data, but only if all fields are filled
function openModal(event) {
    event.preventDefault(); // Prevent the form from submitting

    const formData = JSON.parse(localStorage.getItem('form_data')) || {};
    const nav = document.getElementById('nav');

    // Validation: Check if any field is empty
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
        alert('Please fill out all fields before submitting.');
        return; // Don't open the modal if any field is empty
    } else {
        nav.classList.remove('w3-hide')
    }

    // If all fields are filled, display the data in the modal as a list
    const modalList = document.getElementById('modal-list');
    modalList.innerHTML = `
        <li><strong>Name:</strong> ${formData.name}</li>
        <li><strong>Email:</strong> ${formData.email}</li>
        <li><strong>Phone:</strong> ${formData.phone}</li>
        <li><strong>Message:</strong> ${formData.message}</li>
    `;

    const modal = document.getElementById('id01');
    modal.style.display = 'block';
}

// Close the modal
function closeModal() {
    const modal = document.getElementById('id01');
    modal.style.display = 'none';
}

// Submit form, close the modal, and show alert
function submitForm() {
    const nav = document.getElementById('nav');
    nav.classList.remove('w3-hide');

    closeModal();
    alert('Message has been sent!');

    // Clear the form and localStorage
    localStorage.clear();
    document.getElementById('contactForm').reset();
}