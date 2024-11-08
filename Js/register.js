document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".register-form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();

         const firstName = form.querySelector("input[placeholder='First Name']").value.trim();
        const lastName = form.querySelector("input[placeholder='Last Name']").value.trim();
        const email = form.querySelector("input[placeholder='Email']").value.trim();
        const password = form.querySelector("input[placeholder='Password']").value;
        const confirmPassword = form.querySelector("input[placeholder='Confirm Password']").value;

         if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert("Please complete all fields before submitting.");
            return;
        }

         if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

         alert("Register successfully!");
         window.location.href = "../html/login.html";

    });
});
