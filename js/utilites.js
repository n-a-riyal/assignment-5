
const mainBlance=document.getElementById('myBlance')

function backTodigint(id){
    const number1=document.getElementById(id).value;
 return parseFloat(number1);
}
function backTodigintFormString(id){
   const number1=document.getElementById(id).innerText;
return parseFloat(number1);
}
function calculateDonate(id1,id2){
   const addMoney= document.getElementById(id2);
   addMoney.innerText=backTodigint(id1)+backTodigintFormString(id2);
  mainBlance.innerText=backTodigintFormString('myBlance')-backTodigint(id1);
}