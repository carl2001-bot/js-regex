<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Validation</title>
  
</head>
<body>
  <div class="container">
    <h2>Awesome Form Validator</h2>
    <form id="validationForm">
      <label>Full Name:</label>
      <input type="text" id="fullName" placeholder="John Doe">
      <small></small>

      <label>Email Address:</label>
      <input type="email" id="email" placeholder="example@mail.com">
      <small></small>

      <label>Phone Number:</label>
      <input type="text" id="phone" placeholder="1234567890">
      <small></small>

      <label>Password:</label>
      <input type="password" id="password" placeholder="At least 8 characters">
      <small></small>

      <button type="submit">Submit</button>
    </form>
    <p id="successMessage" style="display:none; color:green;">Form submitted successfully!</p>
  </div>

  <script src="script.js"></script>
</body>
</html>
