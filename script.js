const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

document.getElementById("goToLogin").onclick = () => {
    signupForm.classList.remove("active");
    loginForm.classList.add("active");
};

document.getElementById("goToSignup").onclick = () => {
    loginForm.classList.remove("active");
    signupForm.classList.add("active");
};

function togglePassword(id) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}

function showError(input, message) {
    input.classList.add("error");
    input.classList.remove("success");
    input.nextElementSibling.innerText = message;
}

function showSuccess(input) {
    input.classList.remove("error");
    input.classList.add("success");
    input.nextElementSibling.innerText = "";
}

/* SIGNUP */
signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const city = document.getElementById("city");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const phonePattern = /^[0-9]{10}$/;
const cityPattern = /^[A-Za-z ]+$/;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (name.value === "") {
    showError(name, "Name required");
    valid = false;
    } else showSuccess(name);
    if (!emailPattern.test(email.value)) {
    showError(email, "Invalid email");
    valid = false;
    } else showSuccess(email);
    if (!phonePattern.test(phone.value)) {
    showError(phone, "10 digits only");
    valid = false;
    } else showSuccess(phone);
    if (!cityPattern.test(city.value)) {
    showError(city, "Only letters");
    valid = false;
    } else showSuccess(city);
    if (!passwordPattern.test(password.value)) {
    showError(password, "Min 8 chars, letters & numbers");
    valid = false;
    } else showSuccess(password);
    if (password.value !== confirmPassword.value) {
    showError(confirmPassword, "Passwords do not match");
    valid = false;
    } else showSuccess(confirmPassword);

    if (valid) {
    localStorage.setItem(
        "user",
        JSON.stringify({
        email: email.value,
        password: password.value,
        }),
    );
    alert("Registered Successfully");
    signupForm.reset();
    loginForm.classList.add("active");
    signupForm.classList.remove("active");}
});

/* LOGIN */
loginForm.addEventListener("submit", function (e) {
e.preventDefault();

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
    alert("No user found");
    return;
    }

    if (
    loginEmail.value === user.email &&
    loginPassword.value === user.password
    ) {
    alert("Login Successful");
    window.location.href = "https://wandhub.netlify.app/";
    } else {
    alert("Invalid credentials");
    }
});
