//document.getElementById("hibaszam").innerHTML=szavak;
var szo = szavak [Math.floor(Math.random()*szavak.length)].toUpperCase();
//document.getElementById("hibaszam").innerHTML=szo;
var betuk = szo.split("");
//document.getElementById("hibaszam").innerHTML=betuk;
var abc = "AÁBCDEÉFGHIÍJKLMNOÓÖŐPQRSTUÚÜŰVWXYZ";


for ( var i = 0; i< abc.length; i++)
{
    var button = document.createElement("button");
    button.innerHTML = abc [i]

    button.className = "betugomb";
    button.id = abc [i];

    button.addEventListener("click", function()
    {
        tipp(this.innerHTML); //a függvény leelenőrzi, hogy a betű szerepel-e a szóban
        this.disabled=true;
        this.style="color: red;"
        //document.getElementById("tippek").innerHTML += this.innerHTML
    });

    document.body.appendChild(button);
}

var hibak = 0;
var megjelenites = "";
for ( var i = 0; i <betuk.length; i++)megjelenites+="_";
//document.getElementById("tippek").innerHTML=megjelenites

var megjelenitesDiv = document.createElement("div");
megjelenitesDiv.innerHTML = megjelenites;
megjelenitesDiv.className = "szomegjelenites"
document.body.appendChild(megjelenitesDiv); //vonalak bazdmeg

//új játék gombocska
var ujjatek = document.createElement("button");
ujjatek.innerHTML = "új játék";
ujjatek.className = "uj";


ujjatek.addEventListener("click",function()
{
    window.location.reload();

});
document.body.appendChild(ujjatek);


function tipp(betu)
{
    document.getElementById("tippek").innerHTML += betu + ", ";
    var talalt = false;
    for ( var i = 0; i <betuk.length; i ++)
    {
        if(betuk[i] === betu){
            megjelenites = megjelenites.substring(0,i)+betu+megjelenites.substring(i+1);
            talalt = true;
        }
    }
    if(!talalt){
        hibak++;
        document.getElementById("hibaszam").innerHTML = "Hibák száma: "+hibak
    }
    

    
    megjelenitesDiv .innerHTML = megjelenites

    if(megjelenites.indexOf("_")===-1){
        alert("Kurvajóvagy")
    }
    if(hibak ===9)
    {
        alert("jó csicska vagy")
        
    }
}

