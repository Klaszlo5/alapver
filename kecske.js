
function $(elem){
    return document.querySelectorAll(elem);
}
function init(){
    $("footer p")[0].innerHTML="Kádár László";
    $("footer p")[0].style.textAlign="center";
    $("footer p")[0].style.fontSize="20px";
    var kepTomb= document.querySelectorAll("#bal img");
    for (let index=0;index<kepTomb.length;index++){
        kepTomb[index].addEventListener("click",kepEleres);

        kepTomb[index].addEventListener("mouseover",stilusFel);
        kepTomb[index].addEventListener("mouseout",stilusLe);
    }
}
function ID(elem){
    elem=("csonak")
    return document.getElementById(elem);
}
function stilusFel(event){
    console.log("kiemel");
    event.target.className="kiemel";
}
function stilusLe(event){
    event.target.className="";
}
function kepEleres(event){
    var tomb=[];
    tomb.push(event.target.alt);
    console.log(tomb);
    if (tomb.indexOf("kecske") >= 0 && tomb.indexOf("farkas") >= 0){
        alert("nem jo választás");
    }else{
        event.target.style.display="none";
        var kep= `<img src='${event.target.src}' alt='${event.target.alt}`
        console.log(kep);
        ID("csonak").innerHTML +=kep;
        tomb.pop();
        event.target.removeEventListener("click", kepEleres)
    }  
}
function kattintas(event){
    if (ID.click());
    {

    }
}
window.addEventListener("load", init)