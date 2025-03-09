document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");

    // Regular Expressions for Validation
    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10,15}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    // Validation Function
    function validateField(input, pattern, errorMessage) {
        const errorSpan = document.getElementById(input.id + "Error");
        if (!pattern.test(input.value)) {
            errorSpan.textContent = errorMessage; // Show error message
            input.style.border = "2px solid red"; // Highlight red
            return false;
        } else {
            errorSpan.textContent = ""; // Remove error message
            input.style.border = "2px solid green"; // Highlight green
            return true;
        }
    }

    // Enable Real-Time Validation (Check as the user types)
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

    // Prevent Form Submission if Errors Exist
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const isNameValid = validateField(document.getElementById("fullName"), namePattern, "Only alphabetic characters allowed.");
        const isEmailValid = validateField(document.getElementById("email"), emailPattern, "Enter a valid email address.");
        const isPhoneValid = validateField(document.getElementById("phone"), phonePattern, "Enter a valid phone number (10-15 digits).");
        const isPasswordValid = validateField(document.getElementById("password"), passwordPattern, "Password must be at least 8 characters long, with one uppercase letter, one lowercase letter, and one number.");

        if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
            document.getElementById("successMessage").style.display = "block"; // Show success message
        }
    });
});

 
