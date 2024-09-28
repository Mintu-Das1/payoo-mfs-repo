document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    
    const cashOutAmount=document.getElementById('cash-out-amount').value;
    const cashOutMoney=parseFloat(cashOutAmount);
    
    const cashOutPin= document.getElementById('cash-out-pin-number').value;

    console.log(cashOutAmount,cashOutPin)

    if(cashOutPin==='1234'){
        
        const currentBalance=document.getElementById('current-balance').innerText;
        const accountBalance = parseFloat(currentBalance);
        console.log(accountBalance)

        const newAmount= accountBalance - cashOutMoney;

        document.getElementById('current-balance').innerText = newAmount;
    }
    else{
        alert('Failed Try again later.')
    }
})