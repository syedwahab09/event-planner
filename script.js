 //---------------- script for home ------------------//

 let image=document.getElementById('image');
 let images=['/Images/home/img1.jpg','/Images/home/img2.webp','/Images/home/img3.jpg','/Images/home/img4.jpg']
 setInterval(function(){

    let random=Math.floor(Math.random()*4);
    image.src= images[random];

 },2000)


 //----------------- script for register---------------//

 function check(){
   const password=document.getElementById('pass').value;
   const conf_password=document.getElementById('conf-pass').value;
   const msgNot=document.getElementById('msg-not');
   const msgYes=document.getElementById('msg-yes');
   const form = document.forms['form']
   const formF=document.getElementById('form-s');
   const paraLog=document.getElementById('log-in');
   const log_act=document.getElementById('log-act');
   
   
   if(password !=0){
       if(password==conf_password){
         msgYes.innerHTML="You Are Successfully Registered"
         paraLog.innerHTML=""
         formF.style.display="none"
         log_act.innerHTML="Click here to Login"
         log_act.style.textDecoration="none"
         log_act.style.backgroundColor="Green"
         log_act.style.padding="8px 16px"
         log_act.style.borderRadius="8px"
         log_act.style.color="white"
         log_act.style.fontSize="20px"
         log_act.style.fontWeight="700"
         msgYes.style.backgroundColor="green";
           
   setTimeout(function(){
      msgYes.innerHTML=""
       },5000)
       form.reset()
       }
       else{
         msgNot.innerHTML="Password Does Not Match. Try Again!!"
         msgNot.style.backgroundColor="red";
         setTimeout(function(){
            msgNot.innerHTML=""
         },5000)
         form.reset()
       }
   }
   
}

console.log(conf_password);

//-------------------script for login---------------//



function clickL1(){


const passwordL=document.getElementById('password').value; 
const msgNotL=document.getElementById('msg-notL');
const wahab="wahab";
const formL=document.forms['login']

if(passwordL !=0){
   if(passwordL==wahab){
      window.location.href="/homen.html"
      
   }
   else{
      msgNotL.innerHTML="Incorrect Password";
      setTimeout(function(){
         msgNotL.innerHTML="";
      },5000)
      formL.reset()
   }
}
}


