/* const url = "https://goweather.herokuapp.com/weather/Chilecito";

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta de la API');
        }
        return response.json();
    })
    .then(data => {
        // Procesar los datos de la respuesta
        const temperature = data.temperature;
        const wind = data.wind;
        const description = data.description;
        const forecast = data.forecast;

        // Mostrar los datos en el HTML
        const weatherDataElement = document.getElementById('weather-data');
        weatherDataElement.innerHTML = `
            <p>Temperatura actual: ${temperature}</p>
            <p>Viento: ${wind}</p>
            <p>Descripción: ${description}</p>
        `;

        // Mostrar la previsión del tiempo en una tabla
        const forecastTable = document.createElement('table');
        forecastTable.innerHTML = `
            <tr>
                <th>Día</th>
                <th>Temperatura</th>
                <th>Viento</th>
            </tr>
        `;
        forecast.forEach(day => {
            forecastTable.innerHTML += `
                <tr>
                    <td>${day.day}</td>
                    <td>${day.temperature}</td>
                    <td>${day.wind}</td>
                </tr>
            `;
        });
        weatherDataElement.appendChild(forecastTable);
    })
    .catch(error => {
        console.error('Error al obtener los datos del clima', error);
    });
 */

    document.getElementById('submitButton').addEventListener('click', function() {
        fetchWeather();
    });
    
    function fetchWeather() {
        const city = document.getElementById('cityInput').value;
        const url = `https://goweather.herokuapp.com/weather/${city}`;
    
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta de la API');
                }
                return response.json();
            })
            .then(data => {
                // Procesar los datos de la respuesta
                const temperature = data.temperature;
                const wind = data.wind;
                const description = data.description;
                const forecast = data.forecast;
    
                // Mostrar los datos en el HTML
                const weatherDataElement = document.getElementById('weather-data');
                weatherDataElement.innerHTML = `
                    <p>Temperatura actual: ${temperature}</p>
                    <p>Viento: ${wind}</p>
                    <p>Descripción: ${description}</p>
                `;
    
                // Mostrar la previsión del tiempo en una tabla
                const forecastTable = document.createElement('table');
                forecastTable.innerHTML = `
                    <tr>
                        <th>Día</th>
                        <th>Temperatura</th>
                        <th>Viento</th>
                    </tr>
                `;
                forecast.forEach(day => {
                    forecastTable.innerHTML += `
                        <tr>
                            <td>${day.day}</td>
                            <td>${day.temperature}</td>
                            <td>${day.wind}</td>
                        </tr>
                    `;
                });
                weatherDataElement.appendChild(forecastTable);
            })
            .catch(error => {
                console.error('Error al obtener los datos del clima', error);
            });
    }
    