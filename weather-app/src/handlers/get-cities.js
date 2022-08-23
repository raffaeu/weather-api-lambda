const apiKey = process.env.API_KEY;
import fetch from 'node-fetch';

/**
 * A Function that retrieves a list of Cities based on a Filter
 */
export const getCities = async (event) => {

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
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${filter}&limit=10&appid=${apiKey}`;

    // fetch data
    const response = await fetch(url);
    let cities = await response.json();
    cities = cities
        .map(city => ({
            name: city.name,
            country: city.country,
            state: city.state,
            flag: `https://countryflagsapi.com/png/${city.country}`
        }))
        .sort((a, b) => a.name - b.name);;

    // response
    const apIresponse = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'content-type',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
        },
        body: JSON.stringify(cities)
    };

    return apIresponse;
}
