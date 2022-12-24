function posalji(){
    var patern = /^[a-zA-Z\.]{0,64}?[a-zA-Z]{2,32}@[a-z]{2,32}.[a-z]{2,6}$/gm;
    var tekst = document.forma.imejl.value;
    var test = tekst.match(patern);
    if(test!=null)
    {
        alert("Imejl je validan!");
    }
    else{
        alert("Imejl nije validan!");
    }
}