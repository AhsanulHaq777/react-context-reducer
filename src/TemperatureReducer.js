
const temperatureReducer = (state , action)=>{
    switch (action) {
        case 'INCREMENT':
            return state + 1;
    }
}
export default temperatureReducer;