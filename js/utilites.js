// history and donate 
function styleChangeOfHistoryAndDonate(id){
  document.getElementById('title-donate').classList.remove('bg-[#B4F461]','text-xl')
  document.getElementById('title-history').classList.remove('bg-[#B4F461]','text-xl')
  document.getElementById(id).classList.add('bg-[#B4F461]','text-xl')

}
function validityTest(id1,id2){
  const value1=backTodigint(id1);
 const value2=document.getElementById(id2)
  if(value1<0 || isNaN(value1)){
    alert('INVALID NUMBER')
    return 0;
  }
 

}

const mainBlance=document.getElementById('myBlance')
const historyDiv=document.getElementById('historyPage')
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
   if((backTodigintFormString('myBlance')-backTodigint)<0){
    alert("Insufficient Blance")
    return;
   }
  mainBlance.innerText=backTodigintFormString('myBlance')-backTodigint(id1);
}
function addhistory(donate,place){

   const div=document.createElement('div');
   
   const div1=document.createElement('div');
   div1.innerHTML=`<p>${backTodigint(donate)}  ${document.getElementById(place).innerText} </p>
   
   <h5>${new Date()}</h5>
   
   `
   div1.classList.add('p-3', 'border','space-y-2','rounded-xl')
   div.appendChild(div1)
   
   historyDiv.appendChild(div)
  



}