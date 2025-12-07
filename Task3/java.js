//globally defining
let input=document.getElementById("input");
let exact=document.getElementById("exact");
let upper=document.getElementById("uppercase");
let lower=document.getElementById("lowercase");
let count=document.getElementById("count");
let copied=document.getElementById("copied");

function display(){
    let val=input.value;
    exact.textContent=val;
    upper.textContent=val.toUpperCase();
    lower.textContent=val.toLowerCase();
    count.textContent=val.length;
}

function clearall(){ //clears all the text and give 0 to the value of count
    input.value="";
    exact.textContent="";
    upper.textContent="";
    lower.textContent="";
    count.textContent="0";
    
}

function CopyUpper(){
    let text=upper.textContent;
    navigator.clipboard.writeText(text); 
    //navigator is a builtin object thet can access clipboard ,device info ,online status etc
    //navigator.clipboard-to acced the clipboard of the navigator to copy,paste or read the text
    //writetext-Write this text into the clipboard so the user can paste it
    copied.textContent="Copied"; //hame clipboard me show karna hai ki line copy ho gyi hai
    setTimeout(hideCopied,2000); //jaise hi 2sec complete ho jaye to hidecopied function ko call karo
}

function hideCopied(){
    copied.textContent=""; //hidecopied function copied ke text content me blank kar dega
}