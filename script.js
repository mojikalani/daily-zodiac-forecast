
var zodiacValue = document.getElementById('');
var searchButton = document.getElementById('');
var nextButton = document.getElementById('');
var previousButton = document.getElementById('');

let apikey= "88503906b02b071fb3edb90dc301ba75"
id = 617815
api = "https://json.astrologyapi.com/v1/sun_sign_prediction/daily/:"+zodiacValue

function displayHoroscope(){
    //searchButton.addhttps://json.astrologyapi.com/v1/western_horoscopeEventListener("click",function(){
    fetch("https://json.astrologyapi.com/v1/sun_sign_prediction/daily/:"+zodiacValue)
        .then((response) => {
        })
        .then(data => {
            var zodiacValue = data ['sun_sign'];
            var emotionsValue = data['emotions'];
            var healthValue = data ['health'];

            containerCity.innerHTML= zodiacValue
            temperature.innerHTML=emotionsValue
            wind.innerHTML=healthValue
                
        })
    }

function previousButton  () {
    previousButton.addEventListener("click",function(){
        fetch("https://json.astrologyapi.com/v1/sun_sign_prediction/daily/previous/:"+zodiacValue)
            .then((response) => {
            })
            .then(data => {
                var zodiacValue = data ['sun_sign'];
                var emotionsValue = data['emotions'];
                var healthValue = data ['health'];
    
                containerCity.innerHTML= zodiacValue
                temperature.innerHTML=emotionsValue
                wind.innerHTML=healthValue
                    
            })
        })}


function nextButton  () {
    nextButton.addEventListener("click",function(){
        fetch("https://json.astrologyapi.com/v1/sun_sign_prediction/daily/next/:"+zodiacValue)
            .then((response) => {
            })
            .then(data => {
                var zodiacValue = data ['sun_sign'];
                var emotionsValue = data['emotions'];
                var healthValue = data ['health'];
    
                containerCity.innerHTML= zodiacValue
                temperature.innerHTML=emotionsValue
                wind.innerHTML=healthValue
                    
            })
        })}


function getParameters (){
   // var parameters = document.location.search.split(&);
    console.log(parameters)
    var querySearch= parameters[0].split("="[1]);
    console.log(querySearch);
    var format=parameters[1].split("=")[1];
    console.log(format)
    getSearchResult(querySearch, format)

  
}
// Fetch data from the Geo coder API for lat lon and timezone.
var weatherApiKey = "1c72e10c1966cc56d5ada2f30bd1c3c6";
var locationSearch; // = code from html for the location form menu
// ---- Will use later ----
// function formSubmit() {
//      var query = searchInput.val().trim();
//      if (query) {
//          searchCity(query);
//          searchInput.val("");
//      }
// }
// ---- searching user location and time zone
function searchLocation() {
    // --- Placeholder for the query for search form
    var location = "Tokyo"
    var query = location.trim();
    // ----------------------------------------------
    var reqCoordinate = "http://api.openweathermap.org/geo/1.0/direct?q=" + query + "&appid=" + weatherApiKey;
    console.log(reqCoordinate)
fetch(reqCoordinate)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        //console.log(data);
        var lat = data[0].lat;
        var lon = data[0].lon;
        console.log(lat)
        console.log(lon)
        localStorage.setItem("lat", lat); 
        localStorage.setItem('lon', lon)
        // Gathering Time Zone
        var reqTimeZone = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + weatherApiKey;
        
        fetch(reqTimeZone)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
        console.log(data)
        var timeZone = data.timezone;
        console.log(timeZone)
        localStorage.setItem("timeZone", timeZone)
    })
    })
}

searchLocation();
// ----------- Section for storing the user searches ---------------
// Array for storing the zodiac search.
var zodiacSearches= [];
var clearHistory = document.querySelector("#clear-history");
// Will display a previous zodiac as a "button"
var button = document.querySelector("#button");
function displayLHoroscope() {
    button.setAttribute("button", "button");
    zodiacSearches.append(button);
}
// "query" will be the string that the user will input in the form page for location
function addZodiacSign(query) {
    zodiacSearches.push(query);
    localStorage.setItem("zodiac-search", JSON.stringify(zodiacSearches));
    displayLHoroscope();
}
zodiacSearches = localStorage.getItem("zodiac-search");
if (zodiacSearches) {
    zodiacSearches = JSON.parse(zodiacSearches);
} else {
    zodiacSearches= [];
}

// clearHistory.addEventListener("click", function() {



























// ------------------------------------------------------------------------
var zodiacSearches= [];
var citySearch = document.querySelector("#cityName");
var monthSearch = document.querySelector("#month");
var daySearch = document.querySelector("#day"); 
var yearSearch = document.querySelector("#year");
var form = document.querySelector("#form");

// Will display a previous zodiac as a "button"
var button = document.querySelector("#button");

function searchValues() {
     
    let values = { 
        cityname: document.getElementById("cityName").value,
        month: document.getElementById("month").value,
        day: document.getElementById("day").value, 
        year: document.getElementById("year").value,
    };
    zodiacSearches.push(values);

    localStorage.setItem("userValues", JSON.stringify(zodiacSearches));
    getValues()
}
 localStorage

document.getElementById("submit").addEventListener('click', searchValues);
function myFunction() { 
    var x = localStorage.getItem("userValues")
    console.log(x)
}
myFunction(); 

const apiKey= "88503906b02b071fb3edb90dc301ba75";
const inputVal= input.value;
const url= "https://json.astrologyapi.com/v1/general_sign_report/tropical/:planetName"

//get API data 
function getAPIHoroscope(){
    searchButton.addEventListener("click",function(){
    fetch("https://json.astrologyapi.com/v1/general_sign_report/tropical/:"+inputVal)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error ("NETWORK RESPONSE ERROR");
            }
        })
        .then(data => {
            console.log(data)
            var inputVal = data ['sign_name'];
            var planetVal = data['planet_name'];
            var reportVal = data ['report'];

            // containerZodiac.innerHTML= inputVal
            // planet.innerHTML= planetVal
            // report.innerHTML=reportVal
                
        })
    }
                                  
    //get form input value                           
    function getZodiacSearch(){
        var x= document.getElementById("myForm").elements[0];
    }

    //append form input value to the action url as path 
    function changeURL(){
        var inputVal = document.getElementById('userInput').value.trim();
        var url = document.getElementById('url');
        lnk.href = "https://json.astrologyapi.com/v1/general_sign_report/tropical/:" + inputVal;
        window.location = "https://json.astrologyapi.com/v1/general_sign_report/tropical/:" + inputVal;
    }
    
    
    //output data into the HTML 
    function displayHoroscope(data) {
        const zodiac = data.zodiac [0];
        const zodiacDiv = document.getElementById("search-form");
        const zodiacName = inputVal;
        const heading = document.createElement ("h1");
        heading.innterHTML = zodiacName 
        zodiacDiv.appendChild (heading);
    }
    















































































// function getValues() { 
//     var retrievedData = localStorage.getItem("userValues"); 
//     var data = JSON.parse(retrievedData); 
//     var birthday = data[0].month + " "+  data[0].day + " "+ data[0].year;
//     console.log(data);
//     console.log(retrievedData)
//     console.log(data[0].cityname); 
//     console.log(birthday);
    
// } 

document.getElementById("submit").addEventListener('click', searchValues);




















//------------------------------------------------------------
var monthInput = document.querySelector('#month')
var cityInput = document.querySelector('#cityname')
var dayInput = document.querySelector('#day')
var yearInput = document.querySelector('#year')
var zodiactitle = document.querySelector('#zodiactitle')
var info1El = document.querySelector('#info1')
var info2El = document.querySelector('#info2')
var compatibilityEl = document.querySelector('#compatibility')
var prevsearchlist = document.querySelector('#prev-searches')
