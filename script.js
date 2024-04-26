const id = document.getElementById("searchWord");


id.addEventListener("click",()=>{

    const word = document.getElementById("word");
    const data = word.value;
    alert(data);
})