// Step-1: added an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click',function(event){

    //prevent page reload after the form
    event.preventDefault();

    //step-2: get money to be added to the account
    const addMoney=document.getElementById('add-amount').value;
    console.log(addMoney);

    // get the pin number provided
    const pinNumberInput= document.getElementById('pin-number-input').value;
    console.log(pinNumberInput)

    //step-3: Verify pin Number
    // wrong way to validate pin number
    if(pinNumberInput==='1234'){
        console.log('Successfully money added.');

        //step-4: get the current balance
        const balance = document.getElementById('current-balance').innerText;
        console.log(balance)


        //step-5: add addMoney with balance
        const addMoneyNumber = parseFloat(addMoney);
        const addBalance = parseFloat(balance);
        const newBalance = addMoneyNumber + addBalance;
        console.log(newBalance)

        //step-6: Update the balance in the UI/DOM
        document.getElementById('current-balance').innerText= newBalance;
        
    }else{
        alert('Wrong Password try again.')
    }
})