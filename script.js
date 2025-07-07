document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!name || !email) {
    alert("Error: All fields must be filled.");
  } else if (!email.includes("@")) {
    alert("Error: Email must contain '@'.");
  } else {
    alert("Success! Form submitted correctly.");
  }
});
