// Access the form and weather info elements from the HTML
const searchForm = document.getElementById('search-form');
const weatherInfo = document.getElementById('weather-info');

// Add event listener to the form submit event
searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const cityInput = document.getElementById('city-input').value;
  const apiKey = '33ee9dfc864e17e04017196eff4eca3a'; 

  // Make API request to OpenWeatherMap
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      // Display weather information
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;

      weatherInfo.innerHTML = `
        <h2>Weather in ${cityInput}</h2>
        <p>Description: ${weatherDescription}</p>
        <p>Temperature: ${temperature}°C</p>
      `;
    })
    .catch(error => {
      console.log('Error:', error);
      weatherInfo.innerHTML = 'An error occurred while fetching weather data.';
    });
});
