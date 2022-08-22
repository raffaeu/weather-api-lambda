const apiKey = process.env.API_KEY;
import fetch from 'node-fetch';

/**
 * A Function that retrieves a list of Cities based on a Filter
 */
export const getWeather = async (event) => {

    if (event.httpMethod !== 'GET') {
        throw new Error(`getMethod only accept GET method, you tried: ${event.httpMethod}`);
    }

    if (event.queryStringParameters === null || event.queryStringParameters.filter === null) {
        throw new Error(`You must provide a Query Parameter of type filter`);
    }

    // Get the filter
    const filter = event.queryStringParameters.filter;
    const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${filter}&cnt=9&units=metric&appid=${apiKey}`;

    // fetch data
    const response = await fetch(url);
    const forecasts = await response.json();

    // transform
    const weather = {
        name: forecasts.city.name,
        country: forecasts.city.country,
        forecast: forecasts.list.map(day => ({
            date: new Date(day.dt * 1000).toLocaleString('en-US', { hour12: false }),
            temperature: day.temp.day,
            minimum: day.temp.min,
            maximum: day.temp.max,
            humidity: day.humidity,
            text: {
                name: day.weather[0].main,
                description: day.weather[0].description,
                icon: day.weather[0].icon
            }
        }))
    };

    // response
    const apIresponse = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'content-type',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
        },
        body: JSON.stringify(weather)
    };

    return apIresponse;
}
