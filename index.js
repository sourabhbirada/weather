
const Apikey = "d9d93c94923e7d05ac98e9b3bff25ae7"
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metrix&q="

const Serachip = document.querySelector(".search-bar input");
const Serachbt = document.querySelector(".search-bar button");

async function checkweather(city) {
    const response = await fetch(ApiUrl + city +`&appid=${Apikey}`)

    if (!response.ok) {
        throw new Error("City not found");
    }
    else{
        var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°F"
    document.querySelector(".humid").innerHTML = `${data.main.humidity}%`
    document.querySelector(".wind2").innerHTML = `${data.wind.speed}km/h<br>Wind Speed`
    
    const weatherIcon = document.querySelector(".icon img");
    const weatherCondition = data.weather[0].main;

    if (weatherCondition === "Clear") {
        weatherIcon.src = "https://img.icons8.com/color/48/sun.png";
    } else if (weatherCondition === "Clouds") {
        weatherIcon.src = "https://img.icons8.com/color/48/cloud.png";
    } else if (weatherCondition === "Rain") {
        weatherIcon.src = "https://img.icons8.com/color/48/rain.png";
    } else if (weatherCondition === "Snow") {
        weatherIcon.src = "https://img.icons8.com/color/48/snow.png";
    } else if (weatherCondition === "Drizzle") {
        weatherIcon.src = "https://img.icons8.com/color/48/light-rain.png";
    } else if (weatherCondition === "Thunderstorm") {
        weatherIcon.src = "https://img.icons8.com/color/48/storm.png";
    } else {
        weatherIcon.src = "https://img.icons8.com/color/48/cloud.png"; // Default to cloud if condition is unknown
    }
    }
    
}

Serachbt.addEventListener("click" , () => {
    checkweather(Serachip.value);
})
Serachip.addEventListener("keydown" , (event) => {
    if(event.key == "Enter"){
        checkweather(Serachip.value);
    }
})

