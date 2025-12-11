let item = document.querySelectorAll("#list li");
let count=document.getElementById("completion_counter");
let bar=document.getElementById("innerbar");
let markall=document.getElementById("MarkAll");
let unmark=document.getElementById("UnmarkAll");

//Adding click toggle to each list item
item.forEach(item => {
    item.addEventListener("click",()=>{
        item.classList.toggle("completed");
        updateProgress();
    });
});

function updateProgress(){
    let completed=document.querySelectorAll(".completed").length;
    count.textContent = `Completed : ${completed}/5`;
    let percent=(completed/5)*100;
    bar.style.width=percent +"%";
}

//Mark all item
markall.addEventListener("click",()=>{
    item.forEach(item=>item.classList.add("completed"));
    updateProgress();
});

//unmark all items
unmark.addEventListener("click",()=>{
    item.forEach(item=>item.classList.remove("completed"));
    updateProgress();
});