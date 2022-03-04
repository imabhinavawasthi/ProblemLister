const probleminput = document.querySelector('.problem-input');
const problembtn = document.querySelector('.problem-button');
const problemlist = document.querySelector('.problem-list');
const filteroption=document.querySelector('.filter-problems');

problembtn.addEventListener('click', addproblem);
problemlist.addEventListener('click',deletecheck);
filteroption.addEventListener('click',filterit);

function addproblem(event) {
    event.preventDefault();
    if(probleminput.value==="")return false;
    //Div
    const problemdiv = document.createElement('div');
    problemdiv.classList.add('problem');

    //li
    const newproblem=document.createElement('li');
    newproblem.innerText=probleminput.value;
    probleminput.value="";
    newproblem.classList.add('problem');
    problemdiv.append(newproblem);
    
    //Button Tick
    const checkicon=document.createElement('button');
    checkicon.innerHTML='<i class="fas fa-check fa-solid"></i>';
    checkicon.classList.add('btncheck');
    checkicon.classList.add('btnadd');
    

    const trashicon=document.createElement('button');
    trashicon.innerHTML='<i class=" fas fa-solid fa-trash"></i>';
    trashicon.classList.add('btntrash');
    trashicon.classList.add('btnadd');
    

    problemdiv.appendChild(checkicon);
    problemdiv.appendChild(trashicon);

    //Append Final
    problemlist.append(problemdiv);
}

function deletecheck(event){
    const tar=event.target;
    if(tar.classList[0]==='btntrash')
    {
        const item=tar.parentElement;
            item.remove();
    }
    else if(tar.classList[0]==='btncheck'){
        const item=tar.parentElement;
        if(item.classList.contains('checkk')){
            item.classList.remove('checkk');
           }else 
        item.classList.add('checkk');
    }
}

function filterit(event)
{
    const problems=problemlist.childNodes;
    problems.forEach(function(problem1){
        switch(event.target.value)
        {
            case "all": problem1.style.display='flex'; break;
            case "completed":
                if(problem1.classList.contains('checkk'))problem1.style.display='flex';else problem1.style.display="none";break;
            case "uncompleted":
                if(!problem1.classList.contains('checkk'))problem1.style.display='flex';else problem1.style.display="none";break;
        }
    })
}