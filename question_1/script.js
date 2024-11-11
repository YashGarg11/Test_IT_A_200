function validateForm(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (username === "" || password === "") {
        errorMessage.textContent = "Please fill out both fields.";
    } else if(username === "admin" || password === "1234") {
        errorMessage.textContent = "";
        
        window.location.href = "dashboard.html"; 
    }
}
