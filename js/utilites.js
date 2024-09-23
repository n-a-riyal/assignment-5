// history and donate 
function styleChangeOfHistoryAndDonate(id){
  document.getElementById('title-donate').classList.remove('bg-[#B4F461]','text-xl')
  document.getElementById('title-history').classList.remove('bg-[#B4F461]','text-xl')
  document.getElementById(id).classList.add('bg-[#B4F461]','text-xl')

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