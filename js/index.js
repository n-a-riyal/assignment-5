document.getElementById('btn1').addEventListener('click',function(){
          const text1=validityTest('donate1','donate1');
            calculateDonate('donate1', 'addMoney1')
            addhistory('donate1','noakhali')
         function   showModal(){

            }
          
   document.getElementById('donate1').value="";

})
document.getElementById('btn2').addEventListener('click',function(){
    validityTest('donate2','donate2');
    calculateDonate('donate2', 'addMoney2')
    addhistory('donate2','feni')
    my_modal_1.showModal()
    
})
document.getElementById('btn3').addEventListener('click',function(){
    validityTest('donate3','donate3');
    calculateDonate('donate3', 'addMoney3')
    addhistory('donate3','movment')
    my_modal_1.showModal()
    
})
document.getElementById('title-donate').addEventListener('click',function(){

styleChangeOfHistoryAndDonate('title-donate')
document.getElementById('historyPage').classList.add('hidden')
document.getElementById('donatePage').classList.remove('hidden')
document.getElementById('title-history').classList.add('border')

})
document.getElementById('title-history').addEventListener('click',function(){
styleChangeOfHistoryAndDonate('title-history')
document.getElementById('donatePage').classList.add('hidden')
document.getElementById('historyPage').classList.remove('hidden')
document.getElementById('title-donate').classList.add('border')
})

const blogs=document.getElementById("blogs")

blogs.addEventListener('click',function(){
   
        window.location.href='/blog.html';
    
   
})
const blogs1=document.getElementById("blogs1")

blogs1.addEventListener('click',function(){
   
        window.location.href='/index.html';
    
   
})