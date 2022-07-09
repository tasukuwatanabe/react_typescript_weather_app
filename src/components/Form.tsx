type FormPropsType = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form: React.FC<FormPropsType> = ({ city, setCity, getWeather }) => {
  const disabled = !city;
  console.log(disabled);

  return (
    <form onSubmit={getWeather}>
      <input
        type='text'
        name='city'
        placeholder='都市名'
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button type='submit' disabled={disabled}>Get Weather</button>
    </form>
  );
}

export default Form;
