const input=document.querySelector("#inputbox")
const list=document.querySelector("#list-container")
const button=document.querySelector("button")

function addtask(){
    if(input.value === ''){
        alert("YOU MUST WRITE SOMETHING");
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=input.value
        list.appendChild(li)

        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    input.value=""
    savedata();
}
list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        savedata();
    }
})

function savedata(){
        localStorage.setItem("data", list.innerHTML);
}
function showtask(){
 list.innerHTML=localStorage.getItem("data")   
}
showtask()