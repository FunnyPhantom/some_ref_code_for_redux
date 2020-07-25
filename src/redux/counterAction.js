import {getRandomNumber} from "../api";

export const ADD_COUNTER = 'ADD_COUNTER'
export const DECREASE_COUNTER = 'DECREASE_COUNTER'


export const INITI_COUNTER_START = 'INITI_COUNTER_START'
export const INITI_COUNTER_FINISH = 'INITI_COUNTER_FINISH'
export const INITI_COUNTER_ERROR = 'INITI_COUNTER_ERROR'

// be syntax in khub deghat kon, ke action creator, dare ye function barmigardoone
// injuri ham mishe neveshtesh
/**
 * const initCounter = () => {
 *     return async (dispatch) => {
 *          .
 *          .
 *          .
 *     }
 * }
 *
 */
export const initCounter = () => async (dispatch) => {
    dispatch({type: INITI_COUNTER_START})
    try {
        const value = await getRandomNumber()
        dispatch({
            type: INITI_COUNTER_FINISH, initialValue: value
        })
    } catch (e) {
        dispatch({
            type: INITI_COUNTER_ERROR, error: e
        })
    }
}


export const addCount = () => {
    return {type: ADD_COUNTER}
}
export const decCount = () => {
    return {type: DECREASE_COUNTER}
}
