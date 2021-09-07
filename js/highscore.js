const allScores=JSON.parse(localStorage.getItem("highscores"))
var highScore=document.querySelector("#highScore");
var clear=document.querySelector("#clear");
var back =document.querySelector("#back");


clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();

});



if(allScores!==null){
    for(var i=0; i<allScores.length; i++){
        var list=document.createElement("list");
        list.textContent=allScores[i].intials+ ""+ allScores[i].score;
        highScore.appendChild(list);
    }
}

back.addEventListener("click", function(){
    window.location.replace("./index.html")
})