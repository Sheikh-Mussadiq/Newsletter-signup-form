const form = document.getElementById("form");
const dismissBtn = document.getElementById("dismiss-btn");
const email = document.getElementById("email");
const container = document.querySelectorAll(".container");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailValue = email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValue.match(emailRegex)) {
        document.getElementById("error-message").textContent = "Valid email required.";
        document.querySelector(".form__input").style.borderColor = "var(--Tomato)";
    } else {
        document.getElementById("error-message").textContent = "";
        document.querySelector(".form__input").style.borderColor = "var(--Dark-Slate-Grey)";
        updateUI();
    }
    
});

dismissBtn.addEventListener("click", () => {
    form.submit();
})


const updateUI = () => { 
    const userEmail = email.value;
    console.log(userEmail)
    document.getElementById("user-email").textContent = userEmail;
    
    container.forEach((el) => el.classList.toggle('hidden'))
}