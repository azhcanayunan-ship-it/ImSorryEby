function forgive(){
    document.getElementById("response").style.display="block";
}

function createCat(){

    const cat=document.createElement("div");

    cat.classList.add("cat");

    const emojis=["🐱","🐈","🐾","💙","🩵"];

    cat.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

    cat.style.left=Math.random()*100+"vw";

    cat.style.fontSize=(20+Math.random()*20)+"px";

    cat.style.animationDuration=(6+Math.random()*5)+"s";

    document.body.appendChild(cat);

    setTimeout(()=>{
        cat.remove();
    },11000);
}

setInterval(createCat,350);
