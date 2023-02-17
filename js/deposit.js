// task: deposit money and update total deposit amount and total balance

// step1 : add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2: get deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);
    // step 3 : clear the deposit field after getting the new deposit amount 
    depositField.value = '';

    // step 4 : get previos total deposit amount
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);
    // step 5: calculate and update total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    //step 6: get previous total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    // step 7: calculate and update total balance
    const currentBalanceTotal = newDepositAmount + previousBalanceTotal;
    balanceTotalElement.innerText = currentBalanceTotal;
});