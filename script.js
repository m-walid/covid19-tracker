var data = null;
let resp;
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        resp=JSON.parse(this.responseText);
        egyptData =resp['countries_stat'].find(elm=> elm.country_name=='Egypt');
        console.log(egyptData);


        const counters=document.querySelectorAll(".counter");
        console.log(counters)
        
        counters.forEach(counter => {
            
            const updateCounter= () =>{

                const target=egyptData[counter.id];
                const count=+counter.innerText;
        
                if(count< target){
                    counter.innerText=count+1;
                    setTimeout(updateCounter,10);
                }
                else{
                    count.innerText=target;
                }
            }
        
            updateCounter();
        });
        









	}
});

xhr.open("GET", "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php");
xhr.setRequestHeader("x-rapidapi-host", "coronavirus-monitor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "8211a3a553mshcf22a909e374e45p1b7801jsn5bafc2d59d9c");
xhr.send(data);







