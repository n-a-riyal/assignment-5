document.getElementById('btn1').addEventListener('click',function(){
          validityTest('donate1','donate1');
          
                calculateDonate('donate1', 'addMoney1','noakhali','modal1')
            
        
   document.getElementById('donate1').value="";

})
document.getElementById('btn2').addEventListener('click',function(){
    validityTest('donate2','donate2');
    calculateDonate('donate2', 'addMoney2','feni','modal2')
    
   

    document.getElementById('donate2').value="";
})
document.getElementById('btn3').addEventListener('click',function(){
    validityTest('donate3','donate3');
    calculateDonate('donate3', 'addMoney3','movment','modal3')
   
    document.getElementById('donate3').value="";
    
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

const blogs1=document.getElementById("blogs")

blogs1.addEventListener('click',function(){
   
 

    const link1=document.getElementById('link1')
    link1.setAttribute('href','./blog.html')
    
       
    })
   
document.getElementById('dmodal1').addEventListener('click',function(){
    document.getElementById('modal1').classList.add('hidden');
})
document.getElementById('dmodal2').addEventListener('click',function(){
    document.getElementById('modal2').classList.add('hidden');
})
document.getElementById('dmodal3').addEventListener('click',function(){
    document.getElementById('modal3').classList.add('hidden');
})
   
    
   

