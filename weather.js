function displayresult(){
    var city = document.getElementById("city").value;
    var apikey='6181f44e74a57db705d705f02de7cbe0';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='
    +city+ '&appid=' +apikey+ '&units=metric')
    .then(response => response.json())
    .then(data => {
        var t = data['main']['temp']
        document.getElementById("output").innerHTML=t;
    })
}
