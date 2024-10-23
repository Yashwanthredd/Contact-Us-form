// Validation function for the name
function validateName(name) {
    if (name === "") {
        return "Enter your name";
    }
    return ""; // No error for valid name
}

// Validation function for the email
function validateEmail(email) {
    if (email === "") {
        return "Enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return "Invalid email format";
    }
    return ""; // No error for valid email
}

// Validation function for the message
function validateMessage(message) {
    if (message === "") {
        return "Enter your message";
    } else if (message.length < 10) {
        return "Message must be at least 10 characters long";
    }
    return ""; // No error for valid message
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the form fields
    const name = document.getElementById('user-name').value.trim();
    const email = document.getElementById('user-email').value.trim();
    const message = document.getElementById('user-message').value.trim();

    // Separate validation functions for better readability
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const messageError = validateMessage(message);

    // Display error messages if any validation fails
    if (nameError) {
        document.getElementById('name-error').textContent = nameError;
    } else {
        document.getElementById('name-error').textContent = ""; // Clear previous error
    }

    if (emailError) {
        document.getElementById('email-error').textContent = emailError;
    } else {
        document.getElementById('email-error').textContent = ""; // Clear previous error
    }

    if (messageError) {
        document.getElementById('message-error').textContent = messageError;
    } else {
        document.getElementById('message-error').textContent = ""; // Clear previous error
    }

    // Submit the form only if all validations pass
    if (!nameError && !emailError && !messageError) {
        // Show success message
        document.getElementById('success-message').textContent = 'Message has been submitted!';
        document.getElementById('success-message').style.display = 'block';

        // Change submit button color to green
        const submitButton = document.getElementById('submit-button');
        submitButton.style.backgroundColor = 'green';
        submitButton.style.color = 'white';

        // Optionally reset the form
        document.querySelector('.contact-form').reset();
    }
}
