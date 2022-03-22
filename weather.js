function fetchWeather(){
    var city=document.getElementById("temp").value
    console.log(city)
    var request =new XMLHttpRequest()
    var apikey='c2eb00a0300f61fb6c5192386a1a1d2f'
    var url ='http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=c2eb00a0300f61fb6c5192386a1a1d2f';
    request.open('GET',url,true);
    request.onload=function(){
        var result=JSON.parse(this.response)
        console.log(result)
    }
    request.send();
    console.log("Fetching...")

    
}