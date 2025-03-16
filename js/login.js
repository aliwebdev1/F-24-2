document.getElementById('submit-button').addEventListener('click', function () {
    //email
    const emailInput = document.getElementById('user-email');
    const email = emailInput.value;

    // password
    const password = document.getElementById('user-password').value;
    // add

    if (email !== "admin@gmail.com" && password !== "admin123456") {
        alert("valo  hoye jaw masud, valo hoye jaw")
        return
    }

    if (email == "admin@gmail.com" && password == "admin123456") {
        window.location.href = "../banking.html";
    }

})


