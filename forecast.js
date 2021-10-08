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

    var monthVal = data[0].month;
    
    console.log(monthVal)
    if(monthVal == 1) {
       var sign = "aries"
     }else
    if(monthVal == 2) {
        var sign = 'taurus'
     }else
     if(monthVal == 3) {
        var sign = 'gemini'
     }else
     if(monthVal == 4) {
        var sign = 'cancer'
     }else
     if(monthVal == 5) {
        var sign = 'leo'
     }else
     if(monthVal == 6) {
        var sign = 'virgo'
     }else
     if(monthVal == 7) {
        var sign = 'libra'
     }else
     if(monthVal == 8) {
        var sign = 'scorpio'
     }else
     if(monthVal == 9) {
        var sign = 'sagittarius'
     }else
     if(monthVal == 10) {
        var sign = 'capricorn'
     }else
     if(monthVal == 11) {
        var sign = 'aquarius'
     }else
     if(monthVal == 12) {
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

