const probleminput = document.querySelector('.problem-input');
const problembtn = document.querySelector('.problem-button');
const problemlist = document.querySelector('.problem-list');
const filteroption = document.querySelector('.filter-problems');

problembtn.addEventListener('click', addproblem);
problemlist.addEventListener('click', deletecheck);
filteroption.addEventListener('click', filterit);

function addproblem(event) {
    event.preventDefault();
    if (probleminput.value === "") probleminput.value = "Abhinav";
    //Div
    const problemdiv = document.createElement('div');
    problemdiv.classList.add('problem');

    const logoimg = document.createElement('img');
    logoimg.classList.add('logoimg');

    //li
    const newproblem = document.createElement('li');

    let textval = probleminput.value;
    if (textval.indexOf("codeforces") != -1) {
        logoimg.src = "./codeforces.png";
        problemdiv.classList.add('codeforces');
        probleminput.value="Codeforces";
    }
    else if (textval.indexOf("leetcode") != -1) {
        logoimg.src = "./leetcode.png";
        problemdiv.classList.add('leetcode');
        probleminput.value="Leetcode";
    }
    else if (textval.indexOf("codechef") != -1) {
        logoimg.src = "./codechef.png";
        problemdiv.classList.add('codechef');
        probleminput.value="Codechef";
    }
    else {
        logoimg.src = "./others.png";
        problemdiv.classList.add('others');
        probleminput.value="Problem";
    }

    newproblem.innerText = probleminput.value;
    newproblem.classList.add('problem');






    problemdiv.append(logoimg);
    problemdiv.append(newproblem);

    //Button Tick
    const checkicon = document.createElement('button');
    checkicon.innerHTML = '<a href="' + probleminput.value + '" target="_blank"><i class="fa fa-link"></i></a>';
    checkicon.classList.add('btncheck');
    checkicon.classList.add('btnadd');


    const trashicon = document.createElement('button');
    trashicon.innerHTML = '<i class=" fa fa-solid fa-trash"></i>';
    trashicon.classList.add('btntrash');
    trashicon.classList.add('btnadd');


    problemdiv.appendChild(checkicon);
    problemdiv.appendChild(trashicon);

    //Append Final
    problemlist.append(problemdiv);
    probleminput.value = "";
}

function deletecheck(event) {
    const tar = event.target;
    if (tar.classList[0] === 'btntrash') {
        const item = tar.parentElement;
        item.remove();
    }
    else if (tar.classList[0] === 'btncheck') {
        // const item=tar.parentElement;
        // if(item.classList.contains('checkk')){
        //     item.classList.remove('checkk');
        //    }else 
        // item.classList.add('checkk');
        return;
    }
}

function filterit(event) {
    const problems = problemlist.childNodes;
    problems.forEach(function (problem1) {
        switch (event.target.value) {
            case "all": problem1.style.display = 'flex'; break;
            case "codeforces":
                if (problem1.classList.contains('codeforces')) problem1.style.display = 'flex'; else problem1.style.display = "none"; break;
            case "codechef":
                if (problem1.classList.contains('codechef')) problem1.style.display = 'flex'; else problem1.style.display = "none"; break;
            case "leetcode":
                if (problem1.classList.contains('leetcode')) problem1.style.display = 'flex'; else problem1.style.display = "none"; break;
            case "others":
                if (problem1.classList.contains('others')) problem1.style.display = 'flex'; else problem1.style.display = "none"; break;
        }
    })
}
