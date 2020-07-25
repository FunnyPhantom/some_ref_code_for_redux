import {
    ADD_COUNTER,
    DECREASE_COUNTER,
    INITI_COUNTER_ERROR,
    INITI_COUNTER_FINISH,
    INITI_COUNTER_START
} from "./counterAction";

const initialState = {
    value: 0,
    loading: false,
    error: ''
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITI_COUNTER_START: {
            return {
                ...state,
                loading: true
            }
        }
        case INITI_COUNTER_FINISH: {
            return {
                ...state,
                loading: false,
                value:action.initialValue
            }
        }
        case INITI_COUNTER_ERROR: {
            return  {
                ...state,
                loading: false,
                value: -1,
                error: action.error
            }
        }

        case ADD_COUNTER: {
            return {
                ...state,
                value: state.value + 1
            }
        }
        case DECREASE_COUNTER: {
            return  {
                ...state,
                value: state.value - 1
            }
        }
        default: {
            return state
        }
    }
}

export default counterReducer
