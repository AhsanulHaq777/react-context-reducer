import React , {useContext} from 'react';
import temperatureContext from './TemperatureContext';

const Child = ()=> {
    let temperatureValue = useContext(temperatureContext);
    console.log(temperatureValue);
    return(
        <div>
            <h1>This is Temperature Context Child</h1>
            <h2>Temperature is: {temperatureValue[0]} Degree</h2>
            <button className='button-color' onClick={()=>{temperatureValue[1](++temperatureValue[0])}}>Increment Temperature Context</button>
        </div>
    ) 
}
export default Child;
