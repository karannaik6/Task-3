document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let errorMessage = document.getElementById('error-message');
    
    if (name === '' || email === '') {
        errorMessage.textContent = 'All fields are required.';
    } else {
        errorMessage.textContent = '';
        // Perform form submission
        alert('Form submitted successfully!');
    }
});
