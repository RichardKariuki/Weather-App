const apiKey = "93fdb0b859a1a4c9c378d13d5381db94";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector("#searchBtn");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if (response.status === 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
                return; // Stop execution if city is not found
            }

            const data = await response.json();

            document.querySelector(".city").innerText = data.name;
            document.querySelector(".temp").innerText = `${data.main.temp}°C`;
            document.querySelector(".humidity").innerText = `${data.main.humidity}%`;
            document.querySelector(".wind").innerText = `${data.wind.speed} km/hr`;

            console.log(weather);

            // Correct weather condition checks
            if (data.weather[0].main === "Clouds") {
                weatherIcon.src = "sky-clouds.jpg";
            } else if (data.weather[0].main === "Rain") {
                weatherIcon.src = "rain.png";
            } else if (data.weather[0].main === "Clear") {
                weatherIcon.src = "sun.png";
            } else if (data.weather[0].main === "Drizzle") {
                weatherIcon.src = "drizle.jpg";
            } else if (data.weather[0].main === "Mist" || data.weather[0].main === "Fog") {
                weatherIcon.src = "mist.png";
            } else {
                weatherIcon.src = "default.png"; // Default icon
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }

        // Move event listener outside the function
        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        });