document.getElementById('submit-password').addEventListener('click', function() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Set your password here
    const correctPassword = 'shadow'; // Change this to the password you want

    if (password === correctPassword) {
        document.getElementById('password-screen').style.display = 'none'; // Hide password screen
        document.getElementById('main-content').classList.remove('hidden'); // Show main content
    } else {
        errorMessage.style.display = 'block'; // Show error message if password is incorrect
    }
});

// Optional: Allow Enter key to submit the password
document.getElementById('password').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('submit-password').click();
    }
});

