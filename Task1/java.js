//declaration of boxes
let Box1=document.getElementById("Box1");
let Box2=document.getElementById("Box2");
let Box3=document.getElementById("Box3");

//to remove the error in colors of boxes on their first click
Box1.style.backgroundColor = "red";
Box2.style.backgroundColor = "blue";
Box3.style.backgroundColor = "green";

//declaration of counts
let count1=document.getElementById("count1");
let count2=document.getElementById("count2");
let count3=document.getElementById("count3");

let totalclicks=document.getElementById("totalClicks");
let reset =document.getElementById("reset");

//initialising counts and total
let c1=0,c2=0,c3=0;
let total=0;

//function to change the colour of boxes
function change_colour(box){
    if(box.style.backgroundColor==="red"){
        box.style.backgroundColor="blue";
    }
    else if(box.style.backgroundColor==="blue"){
        box.style.backgroundColor="green";
    }
    else{
        box.style.backgroundColor="red";
    }
}

//box1 modify
Box1.onclick=function(){
    change_colour(Box1);
    c1++; 
    total++;
    count1.innerText="Box1 count : "+c1;
    totalclicks.innerText="Total clicks: "+total
}

//box2 modify
Box2.onclick=function(){
    change_colour(Box2);
    c2++; 
    total++;
    count2.innerText="Box2 count : "+c2;
    totalclicks.innerText="Total clicks: "+total
}

//box3 modify
Box3.onclick=function(){
    change_colour(Box3);
    c3++; 
    total++;
    count3.innerText="Box3 count : "+c3;
    totalclicks.innerText="Total clicks: "+total
}

//reset all boxes
reset.onclick=function(){
    Box1.style.backgroundColor="red";
    Box2.style.backgroundColor="blue";
    Box3.style.backgroundColor="green";

    c1=0; c2=0; c3=0 ; total=0;

    count1.innerText="Box1 count : 0";
    count2.innerText="Box2 count : 0";
    count3.innerText="Box3 count : 0";
    totalclicks.innerText="Total clicks : 0";

}