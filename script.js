

const titleAr=document.querySelector(".country-title-ar");
const titleEng=document.querySelector(".country-title-eng");
const menu=document.querySelector(".select-lang");
let flag=true;









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
    "CAR": "سيارة",
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
    "Uzbekistan":"أوزبكستان"
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
            countryData =resp['countries_stat'].find(elm=> elm.country_name==country);

            // console.log(countryData)

            const counters=document.querySelectorAll(".counter");
            counters.forEach(counter=>{
                counter.innerHTML=0;
            })
            counters.forEach(counter => {
                
                const updateCounter= () =>{

                    let target=countryData[counter.id];
                    target=target.replace(/,/g,"");
                    target=+target;
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
    data.countries_stat.forEach(elm =>{
        const option=document.createElement("option");
        option.innerHTML=elm.country_name;
        if (option.text == 'Egypt') {
            option.setAttribute('selected', true);
        }
        option.value=elm.country_name;
        menu.appendChild(option);
    })
    
}

updateData("Egypt");
let h1="حالات ڤيروس كورونا في " +countries["Egypt"];     
titleAr.innerHTML=h1;
titleEng.innerText="COVID-19 "+"Egypt";
let oldValue="Egypt";
menu.addEventListener('click',()=>{
if(oldValue!=menu.value){
    updateData(menu.value);
    oldValue=menu.value;
    h1="حالات ڤيروس كورونا في " +countries[menu.value];     
    titleAr.innerHTML=h1;
    titleEng.innerText="COVID-19 "+menu.value;
}

    });







