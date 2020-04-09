const search = document.querySelector(".search input");
const cardContainer = document.querySelector(".card-container");


var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        const response = JSON.parse(this.responseText);
        console.log(response);
        response.countries_stat.splice(0,1);
        main(response);
    }
});

xhr.open("GET", "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php");
xhr.setRequestHeader("x-rapidapi-host", "coronavirus-monitor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "8211a3a553mshcf22a909e374e45p1b7801jsn5bafc2d59d9c");

xhr.send(data);


function main(response) {
    let flag1 = false; //rapid reloading when pressing any key in empty search bar

    if (localStorage.getItem("pinned") == null ) {
        localStorage.setItem("flag2", false); //flag to diplay hint to pin for first time users
    }

    const WorldStat = getWorldStat(response.countries_stat)

    response.countries_stat.push(WorldStat);
    

    addCard(WorldStat, "disabled")
    addpinned(localStorage.getItem("pinned"))


    search.addEventListener("keyup", (e) => {
        GetCountries(search.value);
    });





    function GetCountries(text) {
        text = text.toLowerCase()


        var letters = /^[a-z]+/;
        if (text.match(letters)) { //checks that a string contains letter 
            cardContainer.innerHTML = "";
            let countries_data = response.countries_stat.filter(elm => elm.country_name.toLowerCase().includes(text));

            let max = countries_data.length > 10 ? 10 : countries_data.length;
            let i = 0
            for (let i = 0; i < max; i++) {
                addCard(countries_data[i], false); //displays only 10 results
            }
            flag1 = true;



            if (localStorage.getItem("flag2") == "false") {
                const firstCardPin = cardContainer.querySelector(".card >i");
                firstCardPin.classList.add("pin-animation");
                const pinSpan = document.createElement("span");
                pinSpan.className = "pin-span";
                pinSpan.innerHTML = `click <i class="fas fa-thumbtack"></i> to add country to home page `;
                firstCardPin.parentElement.insertBefore(pinSpan, firstCardPin.nextElementSibling);
            }


        }
        else if (flag1) {
            updateHome();
            flag1 = false;
        }


    }





    function updateHome() {
        cardContainer.innerHTML = "";
        addCard(WorldStat, "disabled")
        addpinned(localStorage.getItem("pinned"))
    }






    function addCard(data, pin) {
        const card =
            `<div class="card" pin=${pin}>
            <div class="country">
                ${data.country_name}
            </div>
            <i class="fas fa-thumbtack"></i>
            <div class="card-item cases">
                <span class="label">All cases : </span>
                <span class="counter">${data.cases}</span>
            </div>
            <div class="card-item total_recovered">
                <span class="label">Recovered : </span>
                <span class="counter">${data.total_recovered}</span>
            </div>
            <div class="card-item deaths">
                <span class="label">Deaths : </span>
                <span class="counter">${data.deaths}</span>
            </div>
            <div class="card-item active_cases">
                <span class="label">Active cases : </span>
                <span class="counter">${data.active_cases}</span>
            </div>
            <div class="card-item new_cases">
                <span class="label">New cases Today : </span>
                <span class="counter">${data.new_cases}</span>
            </div>
        </div>`;

        cardContainer.innerHTML += card;

        AddpinsClickEvent();

        const cards = cardContainer.querySelectorAll(".card");
        let delay = 0;
        cards.forEach(card => {
            card.style.animationDelay = delay + "ms";
            delay += 100;
        });
    }



    function AddpinsClickEvent() {

        

        let pinned = [];
        if (localStorage.getItem("pinned") != null && localStorage.getItem("pinned") != "") {
            pinned = localStorage.getItem("pinned").split(",")
        }
        const pins = cardContainer.querySelectorAll(".card > .fa-thumbtack")
        pins.forEach(pin => {
            let pinCountry = pin.parentElement.querySelector(".country");
            if (pin.parentElement.getAttribute("pin") == "disabled") {
                pin.style.display = "none";
            }
            else {
                if (pin.parentElement.getAttribute("pin") == "true" || pinned.includes(pinCountry.innerText)) {
                    pin.style.color = "#3f3f3f";
                }
                pin.addEventListener('click', () => {
                    localStorage.setItem("flag2", true);

                    if (pin.parentElement.getAttribute("pin") == "false" && !pinned.includes(pinCountry.innerText)) {
                        pin.parentElement.setAttribute("pin", true);
                        pinned.push(pinCountry.innerText);
                        localStorage.setItem("pinned", pinned.join(","));
                        pin.style.color = "#3f3f3f";

                        search.value = "";
                        setTimeout(updateHome, 400);


                    }
                    else if (pin.parentElement.getAttribute("pin") == "true" || pinned.includes(pinCountry.innerText)) {
                        pin.parentElement.setAttribute("pin", false);
                        pinned.splice(pinned.indexOf(pinCountry.innerText), 1);
                        localStorage.setItem("pinned", pinned.join(","));
                        pin.style.color = "white";


                        search.value = "";
                        setTimeout(updateHome, 400);

                    }
                })
            }
        })









    }

    function addComma(num) {
        //console.log(num)
        let numStr = "";
        let i = 1;
        while (num) {
            numStr += num % 10;
            num = Math.floor(num / 10);
            if (i % 3 == 0 && num) numStr += ",";
            i++;
        }
        return numStr.split("").reverse().join("");
    }





    function getWorldStat(countries) {
        const WORLD = {
            country_name: "World",
            cases: 0,
            total_recovered: 0,
            deaths: 0,
            active_cases: 0,
            new_cases: 0
        }

        countries.forEach(country => {
            WORLD.cases += +country.cases.replace(",", "");
            WORLD.total_recovered += +country.total_recovered.replace(",", "");
            WORLD.deaths += +country.deaths.replace(",", "");
            WORLD.active_cases += +country.active_cases.replace(",", "");
            WORLD.new_cases += +country.new_cases.replace(",", "");
        })


        WORLD.cases = addComma(WORLD.cases);
        WORLD.total_recovered = addComma(WORLD.total_recovered);
        WORLD.deaths = addComma(WORLD.deaths);
        WORLD.active_cases = addComma(WORLD.active_cases);
        WORLD.new_cases = addComma(WORLD.new_cases);


        return WORLD;
    }








    function addpinned(pinned) {
        if (pinned != null && pinned.length != 0) {
            pinned = pinned.split(",");
            pinned.forEach(country => {
                let country_data = response.countries_stat.find(elm => elm.country_name == country);
                addCard(country_data, true);
            })
        }
    }







    function searchBarAnimation() {

        let country = "Egypt".split("");
        let i = 0;
        search.placeholder = "";
        const forward = setInterval(() => {
            search.placeholder += country[i++];
            if (i >= country.length) {
                clearInterval(forward);
                const backward = setInterval(() => {
                    country.splice(i, 1);
                    search.placeholder = country.join("");
                    if (i <= 0) {
                        clearInterval(backward);
                        search.placeholder = "Search Country";
                    }
                    i--;
                }, 350)
            }
        }, 600)

    }
    setTimeout(searchBarAnimation, 2000);


}




