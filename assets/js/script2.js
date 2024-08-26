document.addEventListener("DOMContentLoaded", function () {
  // Prompt the user to enter the current date
  let date = "";
  while (!date || isNaN(Date.parse(date))) {
    date = prompt("Please enter the current date (e.g., YYYY-MM-DD):");
    if (date === null) return; // If user cancels the prompt
    if (!date || isNaN(Date.parse(date))) {
      alert("Invalid date format. Please enter a valid date.");
    }
  }

  const dateElement = document.querySelector("h2:nth-of-type(1)");
  if (dateElement) {
    dateElement.textContent = new Date(date).toLocaleDateString();
  }

  // Prompt the user to enter their email address
  let email = "";
  while (!email || !email.includes("@")) {
    email = prompt("Please enter your email address:");
    if (email === null) return;
    if (!email || !email.includes("@")) {
      alert("Invalid email format. Please enter a valid email.");
    }
  }

  const emailElement = document.querySelector("h2:nth-of-type(2)");
  if (emailElement) {
    emailElement.textContent = email;
  }
});
