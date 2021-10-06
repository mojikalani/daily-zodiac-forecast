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