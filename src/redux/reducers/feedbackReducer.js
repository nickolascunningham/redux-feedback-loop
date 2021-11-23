
const initialState =  {
    feeling: "",
    understanding: "",
    support: "",
    comments: "",
    next: 1, 
    success: false
}


export default (state = initialState, action) => {

    switch(action.type){

        case "SET_FEELING":
            return {
                ...state,
                feeling: action.payload
            };
            case "SET_UNDERSTANDING":
                return {
                    ...state,
                    understanding: action.payload
                };

                case "SET_SUPPORT":
                    return {
                        ...state,
                        support: action.payload
                    };

                    case "SET_COMMENTS":
                        return {
                            ...state,
                                comments: action.payload
                        };

                        case "NEXT":
                            return {
                                ...state,
                                    next: state.next + 1
                            };

                            case "SUCCESS":
                            return {
                                ...state,
                                    success: true
                            };


                            case "THANKS":
                                return {
                                    ...state,
                                    feeling: "",
                                    understanding: "",
                                    support: "",
                                    comments: "",
                                    next: 1, 
                                    success: false  
                                };
    
            default:
                return state;

    }
}

