function getValues() { 
    var retrievedData = localStorage.getItem("userValues"); 
    var data = JSON.parse(retrievedData); 
    var latData = localStorage.getItem("lat"); 
    var lonData = localStorage.getItem("lon"); 
    var zoneData = localStorage.getItem("timeZone"); 
    console.log(data);
    
    console.log(data[0].city); 
    console.log(data[0].month);
    console.log(data[0].day);
    console.log(data[0].year);

    // ---- Geolocator values ------
    console.log(latData);
    console.log(lonData); 
    console.log(zoneData);


}
getValues();
