
const initialState = {
    counter: 0
}

export const counterReducer = ( state = initialState,action ) =>{
    switch(action.type){
        case "INCREMENT" : {
            return {...state, counter: state.counter+1}
        }
        case "DECREMENT" : {
            return {...state, counter: state.counter-1}
        }
        case "INCREMENT_BY_PAYLOAD" : {
            return {
                ...state, counter: state.counter + action.payload
            }
        }
        default:{
            return state
        }
    }
}