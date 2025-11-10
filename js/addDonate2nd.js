const donatebutton2 = document.getElementById("btn-donate-now2");
donatebutton2.addEventListener ('click',function(){

   
     const inputdonation2 = parseFloat(document.getElementById('inputdonation2').value);
     

    console.table({inputdonation2});

    // donate now  button of work  from start 

 const addDonateInput2 = document.getElementById('inputdonation2').value;
 console.table(addDonateInput2);
 

 const donate = document.getElementById('Donate-amount1').innerText;
 console.log(donate);

 const addDonateNumber  = parseFloat (addDonateInput2);
 const donatenumber = parseFloat(donate);
 console.log( typeof donatenumber);
 const  newDonate = addDonateNumber + donatenumber;
 console.log(newDonate);

 document.getElementById('Donate-amount1').innerText = newDonate;


// donate now  button of work  from end


});
