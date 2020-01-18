import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from './Type'
const initialState={
    loading:false,
    users:[],
    error:''

}
const Reducer=(state=initialState,action)=>{
    //console.log(action.payload)
    switch(action.type){
        case FETCH_USERS_REQUEST:return{
            loading:true
        }
        case FETCH_USERS_SUCCESS:return{

            loading:true,
            users:action.payload
        }
        case FETCH_USERS_FAILURE:return{
            loading:true,
            error:action.payload
        }
        default :return state
    }

}
export default Reducer