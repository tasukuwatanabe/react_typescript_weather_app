import { useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

type ResultsStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
};

function App() {
  const [city, setCity] = useState<string>('');
  const [results, setResults] = useState<ResultsStateType>({
    country: '',
    cityName: '',
    temperature: '',
    conditionText: '',
    icon: '',
  });

  const getWeather = (e: any) => {
    e.preventDefault();

    fetch(
      'http://api.weatherapi.com/v1/current.json?key=d1c617a2c8634304a76124411220607&q=London&aqi=no'
    )
      .then((res) => res.json())
      .then((data) => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        });
      });
  };

  return (
    <div className='App'>
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results results={results} />
    </div>
  );
}

export default App;
