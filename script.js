// call all the elements from html 
var searchCity = $("#search-input");
var searchBtn = $("#searchBtn");
var clearBtn = $("#clearnBtn");
var cityName = $("#city-name");
var currentTemp = $("#temperature");
var currentHumidity = $("#humidity");
var currentWindSpeed = $("#wind-speed");
var currentUV = $("#uv-index");

var cities="";
var city=[];


// call upon the API key 
var APIKey = "a0aca8a89948154a4182dcecc780b513";

function displayWeather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        currentWeather(city);
    }
}
