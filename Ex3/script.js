document.getElementById("nombre").addEventListener('input', function(e){
    e.preventDefault();
    if(document.getElementById("nombre").value.match("[0-9]+")){
        document.getElementById("nb").innerHTML=document.getElementById("nombre").value;
        document.getElementById("carre").innerHTML=document.getElementById("nombre").value*document.getElementById("nombre").value;
        document.getElementById("cube").innerHTML=document.getElementById("nombre").value*document.getElementById("nombre").value*document.getElementById("nombre").value;
        document.getElementById("tableau").style.visibility="visible";
    }else{
        document.getElementById("tableau").style.visibility = "hidden";
    }
})