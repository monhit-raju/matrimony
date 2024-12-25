function register() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Store user details in local storage
    localStorage.setItem(email, password);
    alert('Registration successful');
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve user details from local storage
    const storedPassword = localStorage.getItem(email);

    if (storedPassword === password) {
        alert('Login successful');
    } else {
        alert('Invalid email or password');
    }
}
