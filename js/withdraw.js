// task : withdraw money, update total withdraw and total balance. 

// step1 : add event listener to the withdraw button 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step 2: get withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);
    // step 3 : clear the deposit field after getting the new deposit amount 
    withdrawField.value = '';

    // step 4 : get previous total deposit amount
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);
    // step 5: calculate and update total deposit
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step 6: get previous total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    // step 7: calculate and update total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
});