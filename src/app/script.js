const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  alert("Feedback submitted successfully!"); // Display the prompt
  // Additional code to handle form submission (e.g., send data using AJAX)
});