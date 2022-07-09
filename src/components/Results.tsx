type ResultsPropsType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  };
};

function Results({ results }: ResultsPropsType) {
  const { cityName, temperature, conditionText, icon } = results;
  return (
    <div>
      {cityName && <div>{cityName}</div>}
      {temperature && (
        <div>
          {temperature} <span>℃</span>
        </div>
      )}
      {conditionText && (
        <div>
          <img src={icon} alt='icon' />
          <span>{conditionText}</span>
        </div>
      )}
    </div>
  );
}

export default Results;
