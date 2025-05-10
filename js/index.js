const donationButton = document.getElementById("donation-tab");
donationButton.addEventListener('click',function(){
   
    const inputdonation = parseFloat(document.getElementById("inputdonation").value);
    const inputdonation1 = parseFloat(document.getElementById("inputdonation1").value);
    const inputdonation2 = parseFloat(document.getElementById("inputdonation2").value);

    console.log({inputdonation,inputdonation1,inputdonation2});
});


// history tab functionality 


 const historyTab = document.getElementById("history-tab")
 const donationtab = document.getElementById("donation-tab");
 
 historyTab.addEventListener("click",function(){

    historyTab.classList.add( 
        "bg-lime-500",
        "text-white",
        
    );

    // historyTab.classList.remove('text-gray-200');  // [note : use this line 32 but one  features ] 
    donationtab.classList.remove(  
        "bg-lime-500",
        "text-white",
        
    );
    // donationtab.classList.add("text-gray-200");   // [note : use this line 32 but one  features ] 
  
    document.getElementById("donation-form").classList.add("hidden");

    console.log("connected....")
 });