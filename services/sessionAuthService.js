const jwt=require('jsonwebtoken');
const secret='mohit';
const setUser=(user)=>{
    const payload={
        email:user?.email,
        password:user?.password
    }
   return jwt.sign(payload,secret);
}
const getUser=(token)=>{
    if(!token)  return;
    return jwt.verify(token,secret);
}
const removeUser=(id)=>{
    return sessionIdToUserMap.delete(id)
}
module.exports={
    setUser,
    getUser,
    removeUser
}