# Welcome

Welcome to the `weahter-app` APIs. This project is a collection of HTTP APIs 
that you can consume. Below you can find details about the APIs:

## Weather APIs:

### Find a City

**URL**: (https://dieznakwvj.execute-api.us-east-1.amazonaws.com/Prod/)[https://dieznakwvj.execute-api.us-east-1.amazonaws.com/Prod/]

**Query Params**

| Name | Type | Example | Description | 
| :--- | :--- | :--- | :--- |
| filter | `string` | `?filter=Milano` | Returns a List of Cities based on a Filter
parameter |

**Output JSON**

```json
[
  {
    "name": "Milan",
    "country": "IT",
    "state": "Lombardy"
  },
  {
    "name": "el Milà",
    "country": "ES",
    "state": "Catalonia"
  }
]
```

### Get Weather for a City

**URL**: https://xzvfcjx223.execute-api.us-east-1.amazonaws.com/Prod/getWeather

**Query Params**

| Name | Type | Example | Description | 
| :--- | :--- | :--- | :--- |
| filter | `string` | `?filter=Milano` | Returns a List of Cities based on a Filter
parameter |

**Output JSON**

```json
{
  "name": "Milan",
  "country": "IT",
  "forecast": [
    {
      "date": "8/19/2022, 11:00:00",
      "temperature": 21.85,
      "minimum": 16.91,
      "maximum": 25.75,
      "humidity": 83,
      "text": {
        "name": "Rain",
        "description": "moderate rain",
        "icon": "10d"
      }
    },
    {
      "date": "8/20/2022, 11:00:00",
      "temperature": 27.63,
      "minimum": 17.51,
      "maximum": 29.04,
      "humidity": 44,
      "text": {
        "name": "Clear",
        "description": "sky is clear",
        "icon": "01d"
      }
    }
  ]
}
```

 > **Quick note**: Every day weather has an icon code called `icon`. You can resolve a picture
 by using this template: http://openweathermap.org/img/wn/01d@2x.png. <br />