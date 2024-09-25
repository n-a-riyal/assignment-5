const mainBlance = document.getElementById('myBlance')
const historyDiv = document.getElementById('historyPage')



// history and donate 
function styleChangeOfHistoryAndDonate(id) {
  document.getElementById('title-donate').classList.remove('bg-[#B4F461]', 'text-xl')
  document.getElementById('title-history').classList.remove('bg-[#B4F461]', 'text-xl')
  document.getElementById(id).classList.add('bg-[#B4F461]', 'text-xl')

}



function validityTest(id1, id2) {
  const value1 = backTodigint(id1);
  const value2 = document.getElementById(id2)
  if (value1 < 0 || isNaN(value1)) {
    document.getElementById(id1).value = "";
    alert('INVALID NUMBER')
    return trure;
  }


}


function backTodigint(id) {
  const number1 = document.getElementById(id).value;
  return parseFloat(number1);
}



function backTodigintFormString(id) {
  const number1 = document.getElementById(id).innerText;
  return parseFloat(number1);
}




function calculateDonate(id1, id2, id3, id4) {
  const addMoney = document.getElementById(id2);
  const newMyBalence = backTodigintFormString('myBlance') - backTodigint(id1);
  console.log(backTodigintFormString('myBlance'));
  if ((newMyBalence) < 0) {
    alert("Insufficient Blance")
    document.getElementById(id1).value = "";
    return;
  }
  else {
    mainBlance.innerText = backTodigintFormString('myBlance') - backTodigint(id1);
    addMoney.innerText = backTodigint(id1) + backTodigintFormString(id2);
    addhistory(id1, id3)

    document.getElementById(id4).classList.remove('hidden')
  }
}




function addhistory(donate, place) {
  const div = document.createElement('div');
  const div1 = document.createElement('div');
  div1.innerHTML = `<p>${backTodigint(donate)} Taka is donated  ${document.getElementById(place).innerText} </p>
   
   <h5>${new Date()}</h5>
   
   `
  div1.classList.add('p-3', 'border', 'space-y-2', 'rounded-xl')
  div.appendChild(div1)

  historyDiv.appendChild(div)
div1.firstChild.classList.add('font-bold','text-xl')
div1.lastChild.classList.add('text-sm')


}
