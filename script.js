//your JS code here. If required.
function getWeather(){
	const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your actual API key
  const city = 'London';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(url).then((res)=>{
	if (!res.ok) {
        throw new Error('Failed to fetch weather data');
      }
	return res.json();
}).then((data)=>{
	const weatherCondition = data.weather[0].main
	const weatherDiv =document.getElementById('weatherData')

	weatherDiv.innerHTML=`
	<p>Current weather in London: ${weatherCondition}</p>
	`
}).catch((error) => {
      document.getElementById('weatherData').innerHTML =
        `<p>Error: ${error.message}</p>`;
    });
}

