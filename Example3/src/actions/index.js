import axios from 'axios';
const API_KEY = "24017c57b316e9f3dcade16ed08e6498";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}