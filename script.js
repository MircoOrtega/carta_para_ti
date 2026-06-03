const noBtn=document.getElementById('noBtn');
const yesBtn=document.getElementById('yesBtn');
const message=document.getElementById('message');
noBtn.addEventListener('mouseover',()=>{
noBtn.style.left=Math.random()*250+'px';
noBtn.style.top=Math.random()*80+'px';
});
yesBtn.addEventListener('click',()=>{
message.innerHTML='❤️ ¡Sabía que dirías que sí! ❤️';
for(let i=0;i<50;i++){
const h=document.createElement('div');
h.innerHTML='❤️';
h.className='heart';
h.style.left=Math.random()*window.innerWidth+'px';
h.style.top=window.innerHeight+'px';
document.body.appendChild(h);
setTimeout(()=>h.remove(),4000);
}
});