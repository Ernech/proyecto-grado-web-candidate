import jwt_decode from "jwt-decode";
const getDecodedToken=()=>{
    if(localStorage.getItem('token')){
        const token = localStorage.getItem('token').split(' ')
        const decoded= jwt_decode(token[1])
        return decoded;
    }
    return null
}
const getUserId=()=>{
    if(getDecodedToken()){
        const tokenDecoded = getDecodedToken()
        return tokenDecoded.id
    }
    return '';
}


export {getUserId}