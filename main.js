let count=document.querySelector(".count")
let p=document.querySelector(".para")
let coun=0

function inc(){
    coun+=1
    count.textContent=coun
}
function sav(){
    p.textContent+=coun+" - "
    coun=0
    count.innerHTML=coun
}





