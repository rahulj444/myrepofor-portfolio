// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Dynamic Header Animation on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Portfolio Filter (if you add categories later)
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('hovered');
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('hovered');
    });
});

// Contact Form Validation
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorMessages = {
    name: 'Please enter your name.',
    email: 'Please enter a valid email address.',
    message: 'Please enter your message.',
};

form.addEventListener('submit', event => {
    event.preventDefault();

    // Clear previous error messages
    clearErrors();

    let isValid = true;

    // Name validation
    if (!nameInput.value.trim()) {
        showError(nameInput, errorMessages.name);
        isValid = false;
    }

    // Email validation
    if (!emailInput.value.trim()) {
        showError(emailInput, errorMessages.email);
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    }

    // Message validation
    if (!messageInput.value.trim()) {
        showError(messageInput, errorMessages.message);
        isValid = false;
    }

    // If form is valid, display success message and reset form
    if (isValid) {
        // Ideally, you would submit the form data to the server here using AJAX or similar method
        showSuccessMessage();
        form.reset();
    }
});

function showError(input, message) {
    const errorElement = document.createElement('span');
    errorElement.classList.add('error-message');
    errorElement.innerText = message;
    input.classList.add('input-error');
    input.parentElement.appendChild(errorElement);
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    const inputFields = document.querySelectorAll('.input-error');

    errorMessages.forEach(message => message.remove());
    inputFields.forEach(input => input.classList.remove('input-error'));
}

function showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.innerText = 'Thank you for your message! We will get back to you soon.';
    form.appendChild(successMessage);

    // Remove success message after 5 seconds
    setTimeout(() => successMessage.remove(), 5000);
}
