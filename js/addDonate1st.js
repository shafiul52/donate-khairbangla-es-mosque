const donatebutton1 = document.getElementById("btn-donate-now1");
donatebutton1.addEventListener ('click',function(){

   
     const inputdonation1 = parseFloat(document.getElementById('inputdonation1').value); 
    console.table({inputdonation1});
  


// donate now  button of work  from start 

 const addDonateInput = document.getElementById('inputdonation1').value;
 console.log(addDonateInput);
 

 const donate = document.getElementById('Donate-amount').innerText;
 console.log(donate);

 const addDonateNumber  = parseFloat (addDonateInput);
 const donatenumber = parseFloat(donate);
 console.log( typeof donatenumber);
 const  newDonate = addDonateNumber + donatenumber;
 console.log(newDonate);

 document.getElementById('Donate-amount').innerText = newDonate;

 const balanceElement = document.getElementById("balance");
//  balanceElement.innerText = balance.toFixed(2);


// donate now  button of work  from end


});
