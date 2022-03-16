mouvement=0;

document.getElementById("bouton").addEventListener("click", function(e){
    e.preventDefault();
    if(mouvement==0){
        document.getElementById("blue").style.marginLeft="300px";
        mouvement++;
    }else if(mouvement==1){
        document.getElementById("blue").style.marginTop="100px";
        mouvement++;
    }else if(mouvement==2){
        document.getElementById("blue").style.marginLeft="100px";
        mouvement++;
    }else if(mouvement==3){
        document.getElementById("blue").style.marginTop="300px";
        mouvement=0;
    }
})