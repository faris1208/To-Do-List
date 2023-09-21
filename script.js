const input1 = document.getElementById('input1');
const input3 = document.getElementById('input3');
const listContainer = document.getElementById('list-container');
const btn1 = document.getElementById('btn1');

function addTask(e){
    e.preventDefault()
    if(input1.value === ''){
        // alert("You Must Write Something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input1.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "Delete";
        li.appendChild(span);
    }
    input1.value = "";
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);

btn1.addEventListener('click',addTask);
input3.addEventListener('submit',addTask);

