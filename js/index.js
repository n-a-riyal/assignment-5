document.getElementById('btn1').addEventListener('click',function(){
             validityTest('donate1');
    calculateDonate('donate1', 'addMoney1')
    addhistory('donate1','noakhali')

})
document.getElementById('btn2').addEventListener('click',function(){

    calculateDonate('donate2', 'addMoney2')
    addhistory('donate2','feni')
    
})
document.getElementById('btn3').addEventListener('click',function(){

    calculateDonate('donate3', 'addMoney3')
    addhistory('donate3','movment')
    
})
document.getElementById('title-donate').addEventListener('click',function(){

styleChangeOfHistoryAndDonate('title-donate')
document.getElementById('historyPage').classList.add('hidden')
document.getElementById('donatePage').classList.remove('hidden')

})
document.getElementById('title-history').addEventListener('click',function(){
styleChangeOfHistoryAndDonate('title-history')
document.getElementById('donatePage').classList.add('hidden')
document.getElementById('historyPage').classList.remove('hidden')
})

const blogs=document.getElementById("blogs")
blogs.addEventListener('click',function(){
   window.location.href='../blog.html';
})