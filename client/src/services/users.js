import axios from 'axios';

const apiurl='http://localhost:5000/';

export const signupuser=(data)=>{
    return axios.post(apiurl+'signup',data)
}
export const loginuser=(data)=>{
    return axios.post(apiurl+'login',data)
}