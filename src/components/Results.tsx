import { ResultsStateType } from '../App';

type ResultsPropsType = {
  results: ResultsStateType;
};

const Results: React.FC<ResultsPropsType> = ({ results }) => {
  const { cityName, temperature, conditionText, icon } = results;
  return (
    <>
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
    </>
  );
}

export default Results;
