
let btn=document.querySelector('button');
btn.addEventListener('click',(e)=>{
    let un=document.getElementById('un').value;
    let pass=document.getElementById('nn').value;
    
    console.log(un,pass);
    e.preventDefault();
})