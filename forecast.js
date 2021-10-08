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

    var monthVal = data[0].month
    
    if(monthVal = 1) {
       var sign = "aries"
     }
    if(monthVal = 2) {
        var sign = 'taurus'
     }
     if(monthVal = 3) {
        var sign = 'gemini'
     }
     if(monthVal = 4) {
        var sign = 'cancer'
     }
     if(monthVal = 5) {
        var sign = 'leo'
     }
     if(monthVal = 6) {
        var sign = 'virgo'
     }
     if(monthVal = 7) {
        var sign = 'libra'
     }
     if(monthVal = 8) {
        var sign = 'scorpio'
     }
     if(monthVal = 9) {
        var sign = 'sagittarius'
     }
     if(monthVal = 10) {
        var sign = 'capricorn'
     }
     if(monthVal = 11) {
        var sign = 'aquarius'
     }
     if(monthVal = 12) {
        var sign = 'pisces'
     }



    $.ajax({
        type:'POST',
        url:'https://aztro.sameerkumar.website?sign=' + sign +'&day=today',
        success:function(data){
        document.querySelector('#zodiactitle').textContent = sign
        document.querySelector('#info1').textContent = data.date_range
        document.querySelector('#info2').textContent = data.description

        console.log(data);
        }
    });

}
getValues();

