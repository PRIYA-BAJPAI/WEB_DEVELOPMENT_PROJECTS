let input=document.getElementById("input");
let exact=document.getElementById("exact");
let upper=document.getElementById("uppercase");
let lower=document.getElementById("lowercase");
let count=document.getElementById("count");

function display(){
    let val=input.value;
    exact.textContent=val;
    upper.textContent=val.toUpperCase();
    lower.textContent=val.toLowerCase();
    count.textContent=val.length;
}

function clearall(){
    input.value="";
    exact.textContent="";
    upper.textContent="";
    lower.textContent="";
    count.textContent="0";
    
}