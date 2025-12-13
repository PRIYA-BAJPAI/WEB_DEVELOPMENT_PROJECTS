let red=0,blue=0,green=0,yellow=0;
function clicked(colour){
    if(colour==="red")red++;
    if(colour==="blue")blue++;
    if(colour==="green")green++;
    if(colour==="yellow")yellow++;

    document.getElementById("red-click").innerText="Red : "+red+" clicks";
    document.getElementById("blue-click").innerText="Blue : "+blue+" clicks";
    document.getElementById("green-click").innerText="Green : "+green+" clicks";
    document.getElementById("yellow-click").innerText="Yellow : "+yellow+" clicks";

    updateLeader();
}

function updateLeader(){
    document.getElementById("red").classList.remove("highlight");
    document.getElementById("blue").classList.remove("highlight");
    document.getElementById("green").classList.remove("highlight");
    document.getElementById("yellow").classList.remove("highlight");

    let max=Math.max(red,blue,green,yellow);
    if(max===0){
        document.getElementById("leader").innerText="Leader: none";
        return;
    }
    let maxCount=0;
    if(red===max)maxCount++;
    if(green===max)maxCount++;
    if(blue===max)maxCount++;
    if(yellow===max)maxCount++;

    if(maxCount>1){
        document.getElementById("leader").innerText= "Leader: Tie";
    }else{
        let leadercolour="";
        if(red===max) leadercolour="Red";
        if(blue===max) leadercolour="Blue";
        if(green===max) leadercolour="Green";
        if(yellow===max) leadercolour="Yellow";
        document.getElementById("leader").innerText= "Leader: "+leadercolour+" with "+max+" clicks";
    }
    if(red===max) document.getElementById("red").classList.add("highlight");
    if(blue===max) document.getElementById("blue").classList.add("highlight");
    if(green===max) document.getElementById("green").classList.add("highlight");
    if(yellow===max) document.getElementById("yellow").classList.add("highlight");

}

function resetAll(){
    red=blue=green=yellow=0;
    document.getElementById("red-click").innerText="Red : 0 clicks";
    document.getElementById("blue-click").innerText="Blue : 0 clicks";
    document.getElementById("green-click").innerText="Green : 0 clicks";
    document.getElementById("yellow-click").innerText="Yellow : 0 clicks";

    document.getElementById("red").classList.remove("highlight");
    document.getElementById("blue").classList.remove("highlight");
    document.getElementById("green").classList.remove("highlight");
    document.getElementById("yellow").classList.remove("highlight");

    document.getElementById("leader").innerText="Leader: None";
}