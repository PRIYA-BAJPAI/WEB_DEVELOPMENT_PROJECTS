let biobtn = document.getElementById("btnbio");
let skillbtn = document.getElementById("btnskill"); 
let hobbybtn = document.getElementById("btnhobby"); 

let showall = document.getElementById("showall");
let hideall = document.getElementById("hideall");

let counter = document.getElementById("counter");

let bio = document.getElementById("Bio");
let skill = document.getElementById("skill");
let hobby = document.getElementById("hobby");

function update_count(){
    let count=0;
    if(bio.style.display==="block") count++;
    if(skill.style.display==="block") count++;
    if(hobby.style.display==="block") count++;
    counter.innerText="Section visible : " + count;
}

function toggle(section,button,name){
    if(section.style.display==="none" || section.style.display===""){
        section.style.display="block";
        button.innerText="Hide "+name;
    }else{
        section.style.display="none";
        button.innerText="Show "+name;
    }
    update_count();
}

biobtn.onclick=function(){
    toggle(bio,biobtn,"Bio");
};
skillbtn.onclick=function(){
    toggle(skill,skillbtn,"Skills");
};
hobbybtn.onclick=function(){
    toggle(hobby,hobbybtn,"Hobbies");
};

showall.onclick=function(){
    bio.style.display="block";
    skill.style.display="block";
    hobby.style.display="block";

    biobtn.innerText="Hide Bio";
    skillbtn.innerText="Hide Skills";
    hobbybtn.innerText="Hide Hobbies";

    update_count();
}
hideall.onclick=function(){
    bio.style.display="none";
    skill.style.display="none";
    hobby.style.display="none";

    biobtn.innerText="Show Bio";
    skillbtn.innerText="Show Skills";
    hobbybtn.innerText="Show Hobbies";

    update_count();
}