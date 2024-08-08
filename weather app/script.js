console.log("hello weather user");

const apiKey = 'd1c024ff62622f9eb999cb05e900bae9';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


// main function -->
async function weatherRepo(city) {

    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{

        var data = await response.json();
        console.log(data);
    
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "images/clear.png"
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = "images/rain.png"
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = "images/mist.png"
        }
        else if (data.weather[0].main == 'Snow') {
            weatherIcon.src = "images/snow.png"
        }
        else if (data.weather[0].main == 'Storm' || data.weather[0].main == 'Thunderstorm') {
            weatherIcon.src = "images/storm.png"
        }
        else if (data.weather[0].main == 'Lightning') {
            weatherIcon.src = "images/lightning.png"
        }
        else {
            
            weatherIcon.src = "images/skull.png"
        }
    
        document.querySelector(".weather").style.display = "block";


    }

}

// Event listeners -->
searchBtn.addEventListener('click', () => {

    weatherRepo(searchBox.value);

})

const enter = document.getElementById("enter");
enter.addEventListener('keypress', (e) => {

    if (e.key === "Enter") {

        weatherRepo(searchBox.value);

    }
})

