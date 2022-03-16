document.getElementById("texte").addEventListener('input', function(e){
    e.preventDefault();
    document.getElementById("copie").value=document.getElementById("texte").value;
})