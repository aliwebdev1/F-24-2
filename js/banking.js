document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInputField = document.getElementById('deposit-input');
    const depositInput = depositInputField.value;


    // je khane dekhabo
    const depositInputTotalField = document.getElementById('deposit-total');
    console.log(depositInputTotalField);

    const depositInputTotalNumber = parseInt(depositInputTotalField.innerText)
    const newDeposit = depositInputTotalNumber + parseInt(depositInput)
    depositInputTotalField.innerText = newDeposit


    depositInputField.value = ""

})
