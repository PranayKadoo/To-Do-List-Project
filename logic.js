

let add = document.getElementById("button");
let text = document.getElementById("text");
let result = document.getElementById("res");

add.addEventListener("click",function(){
let para = document.createElement("P");
para.innerText = text.value;
result.appendChild(para);

text.value = "";

let btndone = document.createElement("button");
btndone.innerHTML = "Done";
result.appendChild(btndone);
btndone.addEventListener("click", function(){
    para.style.textDecoration = "line-through";
})

let btnremove = document.createElement("button");
btnremove.innerHTML = "X";
result.appendChild(btnremove);
btnremove.addEventListener("click", function(){
    res.removeChild(para);
    res.removeChild(btndone);
    res.removeChild(btnremove);
    res.removeChild(btnedit);

})

let btnedit = document.createElement("button")
btnedit.innerHTML = "Edit";
result.appendChild(btnedit);
btnedit.addEventListener("click", function(){
    document.getElementById("text").value = para.innerText;
    res.removeChild(para);
    res.removeChild(btndone);
    res.removeChild(btnremove);
    res.removeChild(btnedit);

})
})

function clear1(){
   let div = document.getElementById("res");
      div.remove();
      location.reload();
    }
    

