export const getAllTshirtReducer=(state= {tshirts: []},action)=>{
    switch(action.type){
        case 'GET_TSHIRTS_REQUEST':
            return{
                ...state,
                loading: true

            };
        case 'GET_TSHIRTS_SUCCESS':
            return{
                tshirts: action.payload,
                loading: false
            };
        case 'GET_TSHIRTS_FAIL':
            return{
                error: action.payload,
                loading: false,
            };
        default : return state;
    }
};