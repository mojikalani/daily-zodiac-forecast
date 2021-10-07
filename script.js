
var zodiacValue = document.getElementById('');
var searchButton = document.getElementById('');
var nextButton = document.getElementById('');
var previousButton = document.getElementById('');

const apiKey= "88503906b02b071fb3edb90dc301ba75";
const inputVal= input.value;
const url= 
//id = 617815
//api = "https://json.astrologyapi.com/v1/sun_sign_prediction/daily/:"+zodiacValue""

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
clearHistory.addEventListener("click", function() {
    zodiacSearches= [];
});

function searchAPIHoroscope(){
    searchButton.addEventListener("submit", e => {
        e.preventDefault();
        const inputVal=input.value
    
    fetch("https://json.astrologyapi.com/v1/romantic_forecast_report/tropical"+)
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

function previousButton  () {
    previousButton.addEventListener("click",function(){
        fetch("https://json.astrologyapi.com/v1/romantic_forecast_report/tropical"+)
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
}

function nextButton  () {
    nextButton.addEventListener("click",function(){
        fetch("https://json.astrologyapi.com/v1/romantic_forecast_report/tropical"+)
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
}

function getParameters (){
    var parameters = document.location.search.split (&);
    console.log(parameters)
    var querySearch= parameters[0].split("="[1]);
    console.log(querySearch);
    var format=parameters[1].split("=")[1];
    console.log(format)
    getSearchResult(querySearch, format)

  
}





//Get values from parameters 
const form = document.querySelector (".row");

function myFunction() {
    var elements = document.getElementById("myForm").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        obj[item.name] = item.value;
    }

    document.getElementById("demo").innerHTML = JSON.stringify(obj);
}

//function displayHoroscope(){
//let horoscopeCardHTML =
//<h2>Horoscope</h2> 
//<div id= "horoscope" class= "d-inline-flex flex-wrap>";
//horoscopeCardHTML =</div>
//$(zodiacSearches).html(horoscopeCardHTML);
//dailyHoroscope();


function getZodiacSearch(){
    var x= document.getElementById("myForm").elements[0];

}
//append form input value to the action url as path 
function changeURL(){
    var x = document.getElementById('userInput').value.trim();
    var url = document.getElementById('url');
    lnk.href = "https://json.astrologyapi.com/v1/romantic_forecast_report/tropical" + x;
    window.location = "https://json.astrologyapi.com/v1/romantic_forecast_report/tropical" + x;
  }
}


//output data into the HTML 
function displayHoroscope(data) {
    const zodiac = data.zodiac [0];
    const zodiacHealth = document.getElementById("zodiac");
    const zodiacName = zodiac.strZodiac;
    const heading = document.createElement (<div></div>)
    heading.innterHTML = zodiacName 
    zodiacDiv.appendChild (heading);
}

