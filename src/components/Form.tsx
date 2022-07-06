import { useState } from 'react';

function Form() {
  const [city, setCity] = useState<string>('');

  const getWeather = (e: any) => {
    e.preventDefault();

    fetch(
      'http://api.weatherapi.com/v1/current.json?key=d1c617a2c8634304a76124411220607&q=London&aqi=no'
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <form>
      <input
        type='text'
        name='city'
        placeholder='都市名'
        onChange={(e) => setCity(e.target.value)}
      />
      <button type='submit' onClick={getWeather}>
        Get Weather
      </button>
    </form>
  );
}

export default Form;
