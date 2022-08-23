# Welcome

Welcome to the `weahter-app` APIs. This project is a collection of HTTP APIs 
that you can consume. Below you can find details about the APIs:

## Weather APIs:

### Find a City

**URL**: [https://dieznakwvj.execute-api.us-east-1.amazonaws.com/Prod/](https://dieznakwvj.execute-api.us-east-1.amazonaws.com/Prod/)

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
    "state": "Lombardy",
    "flag": "https://countryflagsapi.com/png/IT"
  },
  {
    "name": "El Milano",
    "country": "ES",
    "state": "Castile and León",
    "flag": "https://countryflagsapi.com/png/ES"
  },
  {
    "name": "Milano",
    "country": "US",
    "state": "Texas",
    "flag": "https://countryflagsapi.com/png/US"
  },
  {
    "name": "Milano",
    "country": "IT",
    "state": "Umbria",
    "flag": "https://countryflagsapi.com/png/IT"
  },
  {
    "name": "Milano",
    "country": "PE",
    "state": "Huánuco",
    "flag": "https://countryflagsapi.com/png/PE"
  }
]
```

### Get Weather for a City

**URL**: [https://dieznakwvj.execute-api.us-east-1.amazonaws.com/Prod/](https://dieznakwvj.execute-api.us-east-1.amazonaws.com/Prod/)

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
      "date": "Tue Aug 23 2022",
      "temperature": 28.56,
      "minimum": 20.71,
      "maximum": 30.44,
      "humidity": 43,
      "text": {
        "name": "Clear",
        "description": "sky is clear",
        "icon": "http://openweathermap.org/img/wn/01d@2x.png"
      }
    },
    {
      "date": "Wed Aug 24 2022",
      "temperature": 28.38,
      "minimum": 19.35,
      "maximum": 30.12,
      "humidity": 42,
      "text": {
        "name": "Clouds",
        "description": "few clouds",
        "icon": "http://openweathermap.org/img/wn/02d@2x.png"
      }
    },
    {
      "date": "Thu Aug 25 2022",
      "temperature": 31.12,
      "minimum": 20.87,
      "maximum": 31.64,
      "humidity": 33,
      "text": {
        "name": "Clouds",
        "description": "broken clouds",
        "icon": "http://openweathermap.org/img/wn/04d@2x.png"
      }
    },
    {
      "date": "Fri Aug 26 2022",
      "temperature": 32.63,
      "minimum": 21.83,
      "maximum": 32.64,
      "humidity": 32,
      "text": {
        "name": "Rain",
        "description": "light rain",
        "icon": "http://openweathermap.org/img/wn/10d@2x.png"
      }
    },
    {
      "date": "Sat Aug 27 2022",
      "temperature": 25.52,
      "minimum": 20.7,
      "maximum": 27.87,
      "humidity": 52,
      "text": {
        "name": "Rain",
        "description": "light rain",
        "icon": "http://openweathermap.org/img/wn/10d@2x.png"
      }
    },
    {
      "date": "Sun Aug 28 2022",
      "temperature": 30.76,
      "minimum": 20.22,
      "maximum": 31.23,
      "humidity": 34,
      "text": {
        "name": "Rain",
        "description": "light rain",
        "icon": "http://openweathermap.org/img/wn/10d@2x.png"
      }
    }
  ]
}
```

 > **Quick note**: Every day weather has an icon code called `icon`. You can resolve a picture
 by using this template: http://openweathermap.org/img/wn/01d@2x.png. <br />