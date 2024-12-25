function register() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Store user details in local storage
    localStorage.setItem(email, password);
    alert('Registration successful');
    window.location.href = "login.html"; // Redirect to login page
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve user details from local storage
    const storedPassword = localStorage.getItem(email);

    if (storedPassword === password) {
        alert('Login successful');
        // Redirect to home page or dashboard
        window.location.href = "index.html";
    } else {
        window.location.href = "error.html"; // Redirect to error page
    }
}

function resetPassword() {
    const email = document.getElementById('forgotEmail').value;
    const newPassword = document.getElementById('newPassword').value;

    // Check if the email exists in local storage
    if (localStorage.getItem(email)) {
        // Update the password in local storage
        localStorage.setItem(email, newPassword);
        alert('Password reset successful');
        window.location.href = "login.html"; // Redirect to login page
    } else {
        alert('Email not found');
    }
}
