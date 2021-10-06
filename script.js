
var zodiacValue = document.getElementById('');
var searchButton = document.getElementById('');
var nextButton = document.getElementById('');
var previousButton = document.getElementById('');

let apikey= "88503906b02b071fb3edb90dc301ba75"
id = 617815
api = "https://json.astrologyapi.com/v1/sun_sign_prediction/daily/:"+zodiacValue""

function displayHoroscope(){
    searchButton.addhttps://json.astrologyapi.com/v1/western_horoscopeEventListener("click",function(){
    fetch("https://json.astrologyapi.com/v1/sun_sign_prediction/daily/:"+zodiacValue"")
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
        fetch("https://json.astrologyapi.com/v1/sun_sign_prediction/daily/previous/:"+zodiacValue"")
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
        fetch("https://json.astrologyapi.com/v1/sun_sign_prediction/daily/next/:"+zodiacValue"")
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

