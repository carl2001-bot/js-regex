const form = document.getElementById('validationForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const fullName = validateField('fullName', /^[a-zA-Z\s]+$/, 'Full name must only contain letters and spaces.');
  const email = validateField('email', /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address.');
  const phone = validateField('phone', /^\d{10,15}$/, 'Phone number must be 10-15 digits.');
  const password = validateField('password', /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 
    'Password must be at least 8 characters, include one uppercase, one lowercase, and one number.');

  if (fullName && email && phone && password) {
    document.getElementById('successMessage').style.display = 'block'
    
    // Enable real-time validation
document.getElementById("fullName").addEventListener("input", () => 
    validateField(document.getElementById("fullName"), namePattern, "Only alphabetic characters allowed.")
);
document.getElementById("email").addEventListener("input", () => 
    validateField(document.getElementById("email"), emailPattern, "Enter a valid email address.")
);
document.getElementById("phone").addEventListener("input", () => 
    validateField(document.getElementById("phone"), phonePattern, "Enter a valid phone number (10-15 digits).")
);
document.getElementById("password").addEventListener("input", () => 
    validateField(document.getElementById("password"), passwordPattern, "Password must be at least 8 characters long, with one uppercase letter, one lowercase letter, and one number.")
);

    
  }
}

function validateField(id, regex, errorMsg) {
  const input = document.getElementById(id);
  const small = input.nextElementSibling;
  if (!regex.test(input.value.trim())) {
    input.classList.add('invalid');
    small.innerText=";
      return true;
  }
}
    small.innerText = errorMsg;
    return false;
  } else {
    input.classList.remove('invalid');
