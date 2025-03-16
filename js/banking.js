document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInputField = document.getElementById('deposit-input');
    const depositInput = parseInt(depositInputField.value);

    // je khane dekhabo
    const depositInputTotalField = document.getElementById('deposit-total');
    console.log(depositInputTotalField);

    const depositInputTotalNumber = parseInt(depositInputTotalField.innerText)
    const newDeposit = depositInputTotalNumber + depositInput
    depositInputTotalField.innerText = newDeposit

    // balance update
    const balanceInputField = document.getElementById('balace-total');
    const totalBalanceAmount = parseInt(balanceInputField.innerText);
    const newBalance = totalBalanceAmount + depositInput;
    balanceInputField.innerText = newBalance

    // value clear
    depositInputField.value = ""

})


// withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInputField.value;
    const withdrawAmount = parseInt(withdrawInputText)
    // console.log(withdrawAmount);

    const withdrawTotalAmountText = document.getElementById('withdraw-total').innerText;
    const withdrawTotalAmount = parseInt(withdrawTotalAmountText)
    // console.log(withdrawTotalAmount);
    const newAmount = withdrawAmount + withdrawTotalAmount;
    // set new amount
    document.getElementById('withdraw-total').innerText = newAmount


    // balance update = balance minus
    const balanceInputField = document.getElementById('balace-total');
    const totalBalanceAmount = parseInt(balanceInputField.innerText);
    const newBalance = totalBalanceAmount - withdrawAmount;
    balanceInputField.innerText = newBalance

    // from clear
    withdrawInputField.value = ""

})