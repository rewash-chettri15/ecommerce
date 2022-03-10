import axios from 'axios';
export const getAllTshirts =() =>async (dispatch) =>{
    dispatch({type: 'GET_TSHIRTS_REQUEST'});
    try {
        const res=await axios.get("/api/getAllTshirts/hello");
        console.log(res);
        dispatch({type: "GET_TSHIRTS_SUCCESS",payload:res.data});
    } catch (err) {
        dispatch({type: "GET_TSHIRTS_FAIL", payload:err});
    }

};