import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import './index.css'
function Buttons() {
  const handleButtonClick = (criteria) => {
    console.log(`Button clicked with criteria: ${criteria}`);

  };
    return (
        <div className='button-container'>
          <AwesomeButton className='aws-btn' type="danger" onClick={() => handleButtonClick('CRITERIA 1')}>CRITERIA 1</AwesomeButton>
          <AwesomeButton className='aws-btn' type="danger" onClick={() => handleButtonClick('CRITERIA 2')}>CRITERIA 2</AwesomeButton>
          <AwesomeButton className='aws-btn' type="danger" onClick={() => handleButtonClick('CRITERIA 3')}>CRITERIA 3</AwesomeButton>
          <AwesomeButton className='aws-btn' type="danger" onClick={() => handleButtonClick('CRITERIA 4')}>CRITERIA 4</AwesomeButton>
          <AwesomeButton className='aws-btn' type="danger" onClick={() => handleButtonClick('CRITERIA 5')}>CRITERIA 5</AwesomeButton>
          <AwesomeButton className='aws-btn' type="danger" onClick={() => handleButtonClick('CRITERIA 6')}>CRITERIA 6</AwesomeButton>
          <AwesomeButton className='aws-btn' type="danger" onClick={() => handleButtonClick('CRITERIA 7')}>CRITERIA 7</AwesomeButton>
          <AwesomeButton className='aws-btn' type="danger" onClick={() => handleButtonClick('SSR')}>SSR</AwesomeButton>

        </div>
      );}
export default Buttons