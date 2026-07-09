const apiKey = "cf2fe51dbf3f9bbf76e59ae7968802c8";

const button = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const result = document.getElementById("result");

button.addEventListener("click", function () {
    const city = cityInput.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            result.innerHTML = `
                <h2>${data.name}</h2>
                <p>Sıcaklık: ${data.main.temp} °C</p>
                <p>Hava: ${data.weather[0].description}</p>
            `;
        });
});
