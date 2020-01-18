import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from './Type'
import axios from 'axios'
export const fetchUsers=()=>{

   //const arr=[]
   
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios
        .get('http://localhost:5000')
        .then(response => {
            //console.log(response.data)
            const n=response.data.length;
            
            var users=response.data;
            var userName=[]

            users.map(name=>userName.push('http://localhost:5000'+"/filename"+"?File="+name.fileName))
            //console.log(userName)
            //console.log(users)
           
            dispatch(fetchUsersSuccess(userName))

        
        }
        )
    }
}
export const fetchUsersByGender=value=>{
    return(dispatch)=>{
        dispatch(fetchUsersRequest())
        axios.get('http://localhost:5000/gend?gender1='+value)
        .then(response=>{
            var users=response.data;
            var userName=[]

            users.map(name=>userName.push('http://localhost:5000'+"/filename"+"?File="+name.fileName))
            //console.log(userName)
            //console.log(users)
           
            dispatch(fetchUsersSuccess(userName))
            
        })
    }
}

            



export const fetchUsersRequest=()=>{
    return{
        type:FETCH_USERS_REQUEST
    }

}
export const fetchUsersSuccess=user=>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:user
    }
}
export const fetchUsersFailure=error=>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}