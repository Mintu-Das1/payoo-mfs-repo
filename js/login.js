// console.log('lagse angta')

// Step-1 Set event Handler
document.getElementById('btn-login').addEventListener('click',function(event){

    //Step-2 prevent default behaviour (prevent reloading browser)
    event.preventDefault();  // <----- confusing for beginners
    console.log('login button clicked')

    //Step-3 get the phone number and Pin Number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value
    console.log(phoneNumber , pinNumber)

    //Step-4 Validate Phone and pin ( it's not a standard way that's why we never use that process)
    if(phoneNumber === '01534736442' && pinNumber === '1234'){
        console.log('your are logged In')
        window.location.href = '/home.html'
    }else{
        alert('Wrong phone number or Pin')
    }
})