import * as api from "../api"


export const Pay = (amount) => async (dispatch) =>{
    try {
        const { data } = await api.Pay(amount)
        dispatch({type: "PAY", data});
    } catch (error) {
        console.log(error);
    }
}