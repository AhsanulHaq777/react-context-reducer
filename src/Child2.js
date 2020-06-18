import React, { useReducer } from 'react';
import temperatureReducer from './TemperatureReducer';

const Child2 = () => {

    let [state , dispatch] = useReducer(temperatureReducer , 1);
    console.log(state)
    return(
        <div>
            <h1>This is Temperature Reducer Child</h1>
            <h2>Temperature is: {state} Degree</h2>
            <button className='button-color' onClick={()=>dispatch('INCREMENT')}>Increment Temperature Reducer</button>
            <button className='button2-color' onClick={()=>dispatch('DECREMENT')}>Decrement Temperature Reducer</button>
        </div>
    )
}
export default Child2;