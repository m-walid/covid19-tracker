






const countries={
    "China": "الصين",
    "Italy": "إيطاليا",
    "Iran": "إيران",
    "S. Korea": "كوريا الجنوبية",
    "Spain": "إسبانيا",
    "Germany": "ألمانيا",
    "France": "فرنسا",
    "USA": "الولايات المتحدة الأمريكية",
    "Switzerland": "سويسرا",
    "UK": "المملكة المتحدة",
    "Norway": "النرويج",
    "Netherlands": "هولندا",
    "Sweden": "السويد",
    "Belgium": "بلجيكا",
    "Denmark": "الدنمارك",
    "Austria": "النمسا",
    "Japan": "اليابان",
    "Diamond Princess": "الأميرة الماسية",
    "Malaysia": "ماليزيا",
    "Qatar": "دولة قطر",
    "Australia": "أستراليا",
    "Canada": "كندا",
    "Portugal": "البرتغال",
    "Finland": "فنلندا",
    "Czechia": "تشيكيا",
    "Greece": "اليونان",
    "Singapore": "سنغافورة",
    "Slovenia": "سلوفينيا",
    "Bahrain": "البحرين",
    "Israel": "إسرائيل",
    "Iceland": "أيسلندا",
    "Hong Kong": "هونج كونج",
    "Philippines": "الفلبين",
    "Romania": "رومانيا",
    "Estonia": "إستونيا",
    "Ireland": "أيرلندا",
    "Brazil": "البرازيل",
    "Poland": "بولندا",
    "Indonesia": "إندونيسيا",
    "Thailand": "تايلاند",
    "Kuwait": "الكويت",
    "Iraq": "العراق",
    "Egypt": "مصر",
    "India": "الهند",
    "Saudi Arabia": "المملكة العربية السعودية",
    "San Marino": "سان مارينو",
    "Lebanon": "لبنان",
    "UAE": "الإمارات العربية المتحدة",
    "Russia": "روسيا",
    "Chile": "تشيلي",
    "Luxembourg": "لوكسمبورج",
    "Taiwan": "تايوان",
    "Vietnam": "فيتنام",
    "Slovakia": "سلوفاكيا",
    "Pakistan": "باكستان",
    "Bulgaria": "بلغاريا",
    "South Africa": "جنوب أفريقيا",
    "Brunei": "بروناي",
    "Croatia": "كرواتيا",
    "Algeria": "الجزائر",
    "Serbia": "صربيا",
    "Argentina": "الأرجنتين",
    "Panama": "بنما",
    "Peru": "بيرو",
    "Albania": "ألبانيا",
    "Mexico": "المكسيك",
    "Palestine": "فلسطين",
    "Colombia": "كولومبيا",
    "Georgia": "جورجيا",
    "Hungary": "هنغاريا",
    "Latvia": "لاتفيا",
    "Ecuador": "إكوادور",
    "Morocco": "المغرب",
    "Belarus": "روسيا البيضاء",
    "Costa Rica": "كوستا ريكا",
    "Cyprus": "قبرص",
    "Senegal": "السنغال",
    "Azerbaijan": "أذربيجان",
    "Armenia": "أرمينيا",
    "Moldova": "مولدوفا",
    "Oman": "سلطنة عمان",
    "Bosnia and Herzegovina": "البوسنة والهرسك",
    "Malta": "مالطا",
    "North Macedonia": "مقدونيا الشمالية",
    "Tunisia": "تونس",
    "Afghanistan": "أفغانستان",
    "Maldives": "جزر المالديف",
    "Lithuania": "ليتوانيا",
    "Dominican Republic": "جمهورية الدومنيكان",
    "Sri Lanka": "سيريلانكا",
    "Faeroe Islands": "جزر فارو",
    "Macao": "ماكاو",
    "Bolivia": "بوليفيا",
    "Martinique": "مارتينيك",
    "Venezuela": "فنزويلا",
    "Kazakhstan": "كازاخستان",
    "Jordan": "الأردن",
    "New Zealand": "نيوزيلاندا",
    "Jamaica": "جامايكا",
    "Cambodia": "كمبوديا",
    "French Guiana": "غيانا الفرنسية",
    "Liechtenstein": "ليختنشتاين",
    "Paraguay": "باراغواي",
    "Réunion": "جمع شمل",
    "Ghana": "غانا",
    "Turkey": "ديك رومي",
    "Uruguay": "أوروغواي",
    "Bangladesh": "بنغلاديش",
    "Guyana": "غيانا",
    "Ivory Coast": "ساحل العاج",
    "Cuba": "كوبا",
    "Puerto Rico": "بورتوريكو",
    "Ukraine": "أوكرانيا",
    "Burkina Faso": "بوركينا فاسو",
    "Channel Islands": "جزر القناة",
    "French Polynesia": "بولينيزيا الفرنسية",
    "Guadeloupe": "غواديلوب",
    "Guam": "غوام",
    "Honduras": "هندوراس",
    "Kenya": "كينيا",
    "Monaco": "موناكو",
    "Nigeria": "نيجيريا",
    "Aruba": "أروبا",
    "Cameroon": "الكاميرون",
    "Curaçao": "كوراساو",
    "DRC": "جمهورية الكونغو الديمقراطية",
    "Namibia": "ناميبيا",
    "Saint Lucia": "القديسة لوسيا",
    "Saint Martin": "القديس مارتن",
    "Seychelles": "سيشيل",
    "Trinidad and Tobago": "ترينداد وتوباغو",
    "Sudan": "السودان",
    "Andorra": "أندورا",
    "Nepal": "نيبال",
    "Antigua and Barbuda": "أنتيغوا وبربودا",
    "Bhutan": "بوتان",
    "Cayman Islands": "جزر كايمان",
    "CAR": "جمهورية افريقيا الوسطى",
    "Congo": "الكونغو",
    "Equatorial Guinea": "غينيا الإستوائية",
    "Ethiopia": "أثيوبيا",
    "Gabon": "الغابون",
    "Gibraltar": "جبل طارق",
    "Guatemala": "غواتيمالا",
    "Guinea": "غينيا",
    "Vatican City": "مدينة الفاتيكان",
    "Mauritania": "موريتانيا",
    "Mayotte": "مايوت",
    "Mongolia": "منغوليا",
    "Rwanda": "رواندا",
    "St. Barth": "سانت بارث",
    "St. Vincent Grenadines": "سانت فنسنت غرينادين",
    "Suriname":"سورينام",
    "Eswatini":"Eswatini",
    "Togo":"توجو",
    "U.S. Virgin Islands":"جزر فيرجن الأمريكية",
    "Uzbekistan":"أوزبكستان",
    "World":"في العالم"
    }







    const titleAr=document.querySelector(".country-title-ar");
    const menu=document.querySelector(".select-country");
    let flag=true;

    const globe=document.querySelector(".world");

    const world_total={
        cases:0,
        total_recovered:0,
        deaths:0,
        serious_critical:0
    }







function updateData(country){
    
    var data = null;
    let resp;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            resp=JSON.parse(this.responseText);
            
            if(flag){
                fillMenu(resp);
                flag=false;
            }
            if(country=="World"){
                countryData=world_total;
            }
            else{
                countryData =resp['countries_stat'].find(elm=> elm.country_name==country);

            }

            // console.log(countryData)

            const counters=document.querySelectorAll(".counter");
            counters.forEach(counter=>{
                counter.innerHTML=0;
            })
            counters.forEach(counter => {
                
                const updateCounter= () =>{

                    let target=removeComma(String(countryData[counter.id]));
                    const count=+counter.innerText;
                    let inc;
                    if(target<100) inc=1;
                    else inc=Math.floor(target/100);
            
                    if(count< target){
                        counter.innerText=count+inc;
                        setTimeout(updateCounter,10);
                    }
                    else{
                        counter.innerText=target;

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
}



function fillMenu(data){
    let options=[];
    data.countries_stat.forEach(elm=>{
        options.push(elm.country_name);
        world_total.cases+=removeComma(elm.cases);
        world_total.total_recovered+=removeComma(elm.total_recovered);
        world_total.deaths+=removeComma(elm.deaths);
        world_total.serious_critical+=removeComma(elm.serious_critical);
    });


    options.sort();
    // options.splice(options.indexOf("CAR"),1);
    options.splice(0,0,"World");
    options.forEach(elm =>{
        const option=document.createElement("option");
        option.innerHTML=elm;
        if (option.text == 'Egypt') {
            option.setAttribute('selected', true);
        }
        option.value=elm;
        menu.appendChild(option);
    })
    
}


function updateHeader(country){
    h1= countries[country];     
    titleAr.innerHTML=h1;
}

updateData("Egypt");
updateHeader("Egypt")

let oldValue="Egypt";
menu.addEventListener('change',()=>{
if(oldValue!=menu.value){
    updateData(menu.value);
    oldValue=menu.value;
   updateHeader(menu.value);
}

 });





function removeComma(target){
    target=target.replace(/,/g,"");
    target=+target;
    return target;
}


globe.addEventListener("click",()=>{
    updateData("World");
    updateHeader("World");
    menu.value="World";
    oldValue="World";
})