const search = document.querySelector(".search input");
const cardContainer=document.querySelector(".card-container");


var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        let response=JSON.parse(this.responseText);
        const WorldStat=getWorldStat(response.countries_stat)
        addCard(WorldStat,"disabled")
        response.countries_stat.push(WorldStat);
        addpinned(localStorage.getItem("pinned"),response)


        search.addEventListener("keyup",()=>{
            GetCountries(search.value,response);
        });
	}
});

xhr.open("GET", "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php");
xhr.setRequestHeader("x-rapidapi-host", "coronavirus-monitor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "8211a3a553mshcf22a909e374e45p1b7801jsn5bafc2d59d9c");

xhr.send(data);







function GetCountries(text,response){
    text=text.toLowerCase()
    
    cardContainer.innerHTML="";
    var letters = /^[a-z]+/;
    if(text.match(letters)){ //checks that a string contains letter 
        let countries_data=response.countries_stat.filter(elm=>elm.country_name.toLowerCase().includes(text));
        
        let max= countries_data.length>10 ? 10 :countries_data.length ;
        let i=0
        for(let i=0; i<max; i++){
            addCard(countries_data[i],false); //displays only 10 results
        } 

        


        // countries_data.forEach(element => {
        //     addCard(element,false);
        // });
    }
    else{
        addCard(response.countries_stat[response.countries_stat.length-1],"disabled")
        addpinned(localStorage.getItem("pinned"),response)
    }
}












function addCard(data,pin){
    const card=
    `<div class="card" pin=${pin}>
        <div class="country">
            ${data.country_name}
        </div>
        <i class="fas fa-thumbtack"></i>
        <div class="card-item cases">
            <span class="label">all cases : </span>
            <span class="counter">${data.cases}</span>
        </div>
        <div class="card-item total_recovered">
            <span class="label">recovered : </span>
            <span class="counter">${data.total_recovered}</span>
        </div>
        <div class="card-item deaths">
            <span class="label">deaths : </span>
            <span class="counter">${data.deaths}</span>
        </div>
        <div class="card-item active_cases">
            <span class="label">active cases : </span>
            <span class="counter">${data.active_cases}</span>
        </div>
        <div class="card-item new_cases">
            <span class="label">new cases Today : </span>
            <span class="counter">${data.new_cases}</span>
        </div>
    </div>`;

    cardContainer.innerHTML+=card;

    const pins=cardContainer.querySelectorAll(".card .fa-thumbtack")
    pins.forEach(pin=>{
        
        if(pin.parentElement.getAttribute("pin")=="disabled"){
            pin.style.display="none";
        }
        else{
            if(pin.parentElement.getAttribute("pin")=="true"){
                pin.style.color="#3f3f3f";
            }
            pin.addEventListener('click',()=>{
                let pinCountry=pin.parentElement.querySelector(".country");
                let pinned=[];
                if(localStorage.getItem("pinned")!=null && localStorage.getItem("pinned")!=""){
                    pinned=localStorage.getItem("pinned").split(",")
                }

                if(pin.parentElement.getAttribute("pin")=="false" && !pinned.includes(pinCountry.innerText)){
                    pin.parentElement.setAttribute("pin",true);
                    pinned.push(pinCountry.innerText);
                    localStorage.setItem("pinned", pinned.join(","));
                    pin.style.color="#3f3f3f";
                }
                else if(pin.parentElement.getAttribute("pin")=="true"){
                    pin.parentElement.setAttribute("pin",false);
                    pinned.splice(pinned.indexOf(pinCountry.innerText),1);
                    localStorage.setItem("pinned", pinned.join(","));
                    pin.style.color="white";
                }
            })
        }
    })

    const cards=cardContainer.querySelectorAll(".card");
    let delay=0;
     cards.forEach(card=>{
        card.style.animationDelay=delay+"ms";
        delay+=100;
});
}


function addComma(num){
    //console.log(num)
    let numStr="";
    let i=1;
    while(num){
        numStr+=num%10;
        num=Math.floor(num/10);
        if(i%3==0 && num)numStr+=",";
        i++;
    }
    return numStr.split("").reverse().join("");
}


function getWorldStat(countries){

    const WORLD={
        country_name:"World",
        cases: 0,
        total_recovered: 0,
        deaths: 0,
        active_cases: 0,
        new_cases: 0
    }

    countries.forEach(country=>{
        WORLD.cases+=+country.cases.replace(",","");
        WORLD.total_recovered+=+country.total_recovered.replace(",","");
        WORLD.deaths+=+country.deaths.replace(",","");
        WORLD.active_cases+=+country.active_cases.replace(",","");
        WORLD.new_cases+=+country.new_cases.replace(",","");
    })


        WORLD.cases=addComma(WORLD.cases);
        WORLD.total_recovered=addComma(WORLD.total_recovered);
        WORLD.deaths=addComma(WORLD.deaths);
        WORLD.active_cases=addComma(WORLD.active_cases);
        WORLD.new_cases=addComma(WORLD.new_cases);
       
    
        return WORLD;
}


function addpinned(pinned,response){
    if(pinned!=null && pinned.length!=0){
        pinned=pinned.split(",");
        pinned.forEach(country => {
            let country_data=response.countries_stat.find(elm => elm.country_name==country);
                addCard(country_data,true);
        })
    }
}


// function cardAnimation(card){
//     console.log(card);
//     const interval=setInterval(()=>{
//         if (card.style.left=="0%"){
//             clearInterval(interval);
//         }
//         let x=card.style.left.split("");
//         x.pop();
//         x=Number(x.join(""));
//         card.style.left=(x+1)+"%";

//     },6);
// }



function searchBarAnimation(){
  
    let country="Egypt".split("");
    let i=0;
    search.style.color="#616161"
    const forward=setInterval(()=>{
        search.value+=country[i++];
        if(i>=country.length){
            clearInterval(forward);
            const backward=setInterval(()=>{
                country.splice(i,1);
                search.value=country.join("");
                if(i<=0){
                    clearInterval(backward);
                } 
                i--;
            },400)
        } 
    },600)

}
setTimeout(searchBarAnimation,2000);