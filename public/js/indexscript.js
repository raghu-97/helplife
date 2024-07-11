/*document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/html/dashboard.html';
        } else {
            document.getElementById('error').textContent = data.message;
            document.getElementById('error').style.display = 'block';
        }
    })
    .catch(_error => {
        document.getElementById('error').textContent = 'An error occurred. Please try again.';
        document.getElementById('error').style.display = 'block';
    });
}); */
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Static credentials for validation
    const validUsername = 'raghupatijha012@gmail.com';
    const validPassword = 'Jha#7367';

    if (username === validUsername && password === validPassword) {
        window.location.href = '../html/main.html';
    } else {
        const errorElement = document.getElementById('error');
        errorElement.textContent = 'Invalid username or password';
        errorElement.style.display = 'block';
    }
});


