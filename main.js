const apikey = "9765364207df3eb495b18d7a970a03a0";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchVal = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".icon")
async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".desc").innerHTML = data.weather[0].description

    if (data.weather[0].main == "Smoke") {
        weatherIcon.src = "mist.png";

    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png" ;
        
    }
    else if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "clear.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "snow.png";
    }
    else if (data.weather[0].main == "drizzle") {
        weatherIcon.src = "drizzle.png";
    }
    else if (data.weather[0].main == "humidity") {
        weatherIcon.src = "humidity.png";
    }



    document.querySelector(".weather").style.display = "block"
}
searchBtn.addEventListener("click", () => {
    checkweather(searchVal.value);
})

