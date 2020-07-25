import {ADD_TODO} from "./todoAction";

//syntax in reducer ba oon counter reducer farghi nadare, vali mamoolan shabih oon counterreducere minvisam reducer haro
//serfan moheme ke semantic reducer rayat beshe. reduce ye tabe ie be in form: (currentState, currentAction) => nextState
// inke chejuri mikhad nextState ro hesab kone be khodesh marboote
// faghat NOKTE MOHEM INKE, AGE TAGHIRI DAR HAR LEVEL OMGHI AZ STATE DARE ANJAM MISHE, BAYAD OBJECT YA ARRAY JADID TOLID BESHE
// KE REFRENCE HASHOON YEKI NABASHE, REDUX BAR ASAS BARABARI REFRENCE MIFAHME KE STATE BA STATE GHABLI BARARBARE YA KHEYR
const initialState = ['mamad', 'get milk'];

const todoReducer = (state, action) => {
    if (state === undefined) {
        return initialState
    }
    else if (action.type === ADD_TODO) {
        return [
            ...state,
            action.text
        ]
    } else {
        return state
    }
}

export default todoReducer
