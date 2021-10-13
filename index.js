const promise = new Promise((resolve,reject)=>{

       
       
    resolve();
   
    
     reject();
    
    

});

promise
.then((msg)=>setTimeout(function (){
document.querySelector(".count").innerText="10";
},1000*1))
.then(msg1=>setTimeout(function(){
document.querySelector(".count").innerText="9";
},1000*2))
.then(msg2=>setTimeout(function (){
document.querySelector(".count").innerText="8";
},1000*3))
.then(msg3=>setTimeout(function(){
document.querySelector(".count").innerText="7";
},1000*4))
.then(msg4=>setTimeout(function(){
document.querySelector(".count").innerText="6";
},1000*5))
.then(msg5=>setTimeout(function(){
document.querySelector(".count").innerText="5";
},1000*6))
.then(msg6=>setTimeout(function(){
document.querySelector(".count").innerText="4";
},1000*7))
.then(msg7=>setTimeout(function(){
document.querySelector(".count").innerText="3";
},1000*8))
.then(msg8=>setTimeout(function(){
document.querySelector(".count").innerText="2";
},1000*9))
.then(msg9=>setTimeout(function(){
document.querySelector(".count").innerText="1";
},1000*10))
.then(msg10=>setTimeout(function(){
document.querySelector(".count").innerText="HAPPY INDEPENDENCE DAY!!!!!!!";
},1000*11))
.catch((errMsg)=>console.log("Error has been occured"));


