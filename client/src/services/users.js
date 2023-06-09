import axios from 'axios';

const apiurl='http://localhost:5000/';

export const signupuser=(data)=>{
    return axios.post(apiurl+'signup',data)
}
export const loginuser=(data)=>{
    return axios.post(apiurl+'login',data)
}
export const addpost=(data)=>{
    return axios.post(apiurl+'addpost',data)
}
export const getpost=(location,token)=>{
    return axios.post(apiurl+'locations',{location,token})
}
export const like=(data)=>{
    return axios.put(apiurl+'like',data)
}