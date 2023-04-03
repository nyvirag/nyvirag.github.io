
    function gomb(){
        var keresszo = document.getElementById("keresszo").value 
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '87d465b1dfmshaf96fb2848ed683p1cbcfbjsn3c12814d54fa',
                'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }
        };
        
        fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q='+keresszo, options)
            .then(response => response.json())
            .then(response => kiir(response))
            .catch(err => console.error(err));
        

    }

    function kiir(response){
        console.log(response)
        var szam = 1

        if ( response.d.length ==0)
        document.getElementById("talalat").innerHTML = "nincs találat"
        else
            
        for (const elem of response.d) {
            console.log(elem.l)
            var div = document.createElement("div")
            document.getElementById("talalat").appendChild(div);
            div.style.border = "1px solid lightblue"
            var kep = document.createElement("img")
            div.appendChild(kep)
            kep.src = elem.i.imageUrl
            kep.style.width = "300px"


            var p1 = document.createElement("p")
            div.appendChild(p1)
            p1.innerHTML = szam + ". találat: " + elem.l
            szam++


            var p2 = document.createElement("p")
            div.appendChild(p2)
            p2.innerHTML = elem.s
            


            var p3 = document.createElement("p")
            div.appendChild(p3)
            p3.innerHTML = "Értékelés: " + elem.rank


            var p4 = document.createElement("p")
            div.appendChild(p4)
            if(typeof elem.y === "undefined" )
            p4.innerHTML ="Év: Nincsen adat. "
            else
            p4.innerHTML ="Év: "+ elem.y

            div.style.textAlign = "center"
            
            
        }
    }