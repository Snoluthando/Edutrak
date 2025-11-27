document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (!loginForm) return; // Prevent errors if script loads on other pages

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const studentNumber = document.getElementById("studentNumber").value.trim();
    const password = document.getElementById("password").value.trim();

    // Retrieve registered students from localStorage
    const students = JSON.parse(localStorage.getItem("students")) || [];

    // Check if student exists
    const user = students.find(
      (student) => student.studentNumber === studentNumber && student.password === password
    );

    if (user) {
      alert("✅ Login successful!");
      // Redirect to dashboard
      window.location.href = "dashboard.html";
    } else {
      alert("❌ Invalid student number or password. Please try again.");
    }

    document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");

  if (!registerForm) return;

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const studentNumber = document.getElementById("studentNumber").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Load existing students
    let students = JSON.parse(localStorage.getItem("students")) || [];

    // Validate student number
    if (Number(studentNumber) < 2025001 || Number(studentNumber) > 2025999) {
      alert("⚠️ Invalid student number. Must be between 2025001 and 2025999.");
      return;
    }

    // Check if already registered
    if (students.some((s) => s.studentNumber === studentNumber)) {
      alert("⚠️ Student already registered!");
      return;
    }

    // Add new student
    students.push({ studentNumber, email, password });
    localStorage.setItem("students", JSON.stringify(students));

    alert("✅ Registration successful! You can now log in.");
    window.location.href = "login.html";
  });
});
    });