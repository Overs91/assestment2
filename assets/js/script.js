document.addEventListener("DOMContentLoaded", function () {
  // Function to change the name
  function typename() {
    let name = "";

    // Keep prompting until a valid string is entered
    while (!name || typeof name !== "string" || name.trim() === "") {
      name = prompt("Please type your full name, ty:");

      if (name === null) return; // If user cancels the prompt

      if (!name || typeof name !== "string" || name.trim() === "") {
        alert("Invalid name. Please type your name correctly.");
      }
    }

    const nameElement = document.querySelector("h3 span.text-danger");
    if (nameElement) {
      nameElement.textContent = name;
    }
  }

  const changeNameButton = document.querySelector(
    "a.btn.btn-sm.btn-primary.btn-pill.transition-hover-start.m-0"
  );
  if (changeNameButton) {
    changeNameButton.addEventListener("click", typename);
  }
});
