const apiKey = process.env.API_KEY;
import fetch from 'node-fetch';

/**
 * A Function that retrieves a list of Cities based on a Filter
 */
export const getWeather = async (event) => {

    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'content-type',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
            },
            body: JSON.stringify({
                error: 'Please provide a GET method'
            })
        }
    }

    if (event.queryStringParameters === null || event.queryStringParameters.filter === null) {
        return {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'content-type',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
            },
            body: JSON.stringify({
                error: 'Please provide a query parameter ? filter'
            })
        }
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
            date: new Date(day.dt * 1000).toDateString(),
            temperature: day.temp.day,
            minimum: day.temp.min,
            maximum: day.temp.max,
            humidity: day.humidity,
            text: {
                name: day.weather[0].main,
                description: day.weather[0].description,
                icon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
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
