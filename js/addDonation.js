// add donate the amount 
// step:1 add an event handler to the add donate button
// step:2 get donation money to be added  account balance 
document.getElementById('btn-donate-now')
     .addEventListener('click',function(event){
    // prevent page reload after form submit 
     event.preventDefault();

    // step:2 get donation money to be added  account balance 
     const addDonationInput = document.getElementById('input-add-donation').value;
     // console.log(addDonationInput);

     // step 3:  get the pin number  
     // --- this website password no work or pin number 
     // step 3: verify pin number

     // step 4: get the current balance 
     const donate = document.getElementById('Donate-amount').innerText;
     console.log(donate);

     // step-5: add addDonationInput with amount 
     const addDonateNumber = parseFloat (addDonationInput);
     const donationNumber = parseFloat(donate) ;
     const newDonate  = addDonateNumber + donationNumber;
     console.log(newDonate);

  
  
});


 






 




// document.getElementById('btn-add-money')
//  .addEventListener('click',function(evnet){
//     evnet.preventDefault();
//    console.log('added the evnet handler')


//    //  get money and the pin number 
//    const addMoney = document.getElementById('input-add-money').value;
//    const addMoneyNumber = parseFloat (addMoney);
//    const pinNumber = document.getElementById('input-pin-number').value;


// //    console.log(addMoney,pinNumber)
//   if(pinNumber === '1234'){
//         // add money  to the account 
//         const  balance = document.getElementById('account-balance').innerText;
//         const balanceNumber = parseFloat(balance);


//        // new balance 
//        const newBalance = balanceNumber + addMoneyNumber;

//             // update the DOM With updated balance
//             document.getElementById('account-balance').innerText = newBalance;
//   }
//    else{
//     alert('Failed to add money Please try to agagin later.')
//    }

//  })