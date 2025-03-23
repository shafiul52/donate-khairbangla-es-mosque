document.getElementById('btn-donate-now3')
     .addEventListener('click',function(event){
    // prevent page reload after form submit 
     event.preventDefault();

    // step:2 get donation money to be added  account balance 
     const addDonationInput = document.getElementById('input-add-donation3').value;
     // console.log(addDonationInput);

     // step 3:  get the pin number  
     // --- this website password no work or pin number 
     // step 3: verify pin number

     // step 4: get the current balance 
     const donate = document.getElementById('Donate-amount3').innerText;
     console.log(donate);

     // step-5: add addDonationInput with amount 
     const addDonateNumber = parseFloat (addDonationInput);

     const donationNumber = parseFloat(donate) ;

     const newDonate  = addDonateNumber + donationNumber;
     console.log(newDonate);

     // Update  the dom with updated  balance 
     document.getElementById('Donate-amount3').innerText = newDonate;



    
     
  
});


 


 






 




