
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
//Clear search history
// clearHistory.addEventListener("click", function() {
//     zodiacSearches= [];
// });


























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
}
document.getElementById("submit").addEventListener('click', searchValues);
function myFunction() { 
    var x = localStorage.getItem("userValues")
    console.log(x)
}
myFunction(); 
























