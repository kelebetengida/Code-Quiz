var highScore=document.querySelector("#highScore");
var clear=document.querySelector("#clear");
var back =document.querySelector("#back");


clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();

});

var highScores=localStorage.getItem("highScores");
highScores=JSON.parse(highScores);

if(highScores !== null){
    for(var i=0; i<highScores.length; i++){
        var list=document.createElement("list");
        list.textContent=highScores[i].intials+ ""+ highScores[i].score;
        highScore.appendChild(list);
    }
}

back.addEventListener("click", function(){
    window.location.replace("./index.html")
})