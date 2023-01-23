var tomb =[
    "Mi a legtöbb válás legfőbb oka? A házasság ",
    "Mi az? Feldobod zöld, leesik ugat? Mindegy, csak kutyára essen!",
    "Mi az? Reggel ugat este úszik? Az anyós műfogsora",
    "Egyszer egy bölcs kínai ezt mondta: - 精神和平永遠是重要的",
    "Mi van, ha elütnek egy matematikust? - Már nem oszt, nem szoroz..."


]
var kepek=[
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.png"
]


vicc()

function vicc(){
    //alert("Hello")

    var veletlen=Math.floor(Math.random()*tomb.length)
    console.log(veletlen)

    document.getElementById("vicchelye").innerHTML=tomb[veletlen]
    document.getElementById("vicckepe").src =kepek[veletlen]
}


