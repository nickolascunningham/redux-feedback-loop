
const initialState =  {
  storeFeedback: {}
}


export default (state = initialState, action) => {

    switch(action.type){

        case "SET_FEEDBACK":
            return {
                ...state,
                storeFeedback: action.payload
            }

            default:
                return state;

    }
}

