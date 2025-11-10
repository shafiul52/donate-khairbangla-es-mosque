const donatebutton3 = document.getElementById("btn-donate-now3");
donatebutton3.addEventListener ('click',function(){

   
     const inputdonation3 = parseFloat(document.getElementById('inputdonation3').value);
     

    console.table({inputdonation3});

    
    // donate now  button of work  from start 

 const addDonateInput4 = document.getElementById('inputdonation3').value;
 console.log(addDonateInput4);
 

 const donate = document.getElementById('Donate-amount3').innerText;
 console.log(donate);

 const addDonateNumber  = parseFloat (addDonateInput4);
 const donatenumber = parseFloat(donate);
 console.log( typeof donatenumber);
 const  newDonate = addDonateNumber + donatenumber;
 console.log(newDonate);

 document.getElementById('Donate-amount3').innerText = newDonate;


// donate now  button of work  from end





});
