import axios from 'axios';

const apiurl='https://touraround.onrender.com';

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
export const getcomment=(data)=>{
    return axios.post(apiurl+'getcomments',data)
}
export const addcomment=(data)=>{
    return axios.post(apiurl+'addcomments',data)
}