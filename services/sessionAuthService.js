const jwt=require('jsonwebtoken');
const secret='mohit';
const setUser=(user)=>{
    const payload={
        email:user?.email,
        password:user?.password
    }
   return jwt.sign(payload,secret,{
    // expiresIn: "10h" // it will be expired after 10 hours
        //expiresIn: "20d" // it will be expired after 20 days
        //expiresIn: 120 // it will be expired after 120ms
        expiresIn: "10s" // it will be expired after 120s
   });
}
const getUser=(token)=>{
    
   try{ if(!token)  return;
    return jwt.verify(token,secret);
    }
    catch(error)
    {
        console.log(error);
    }
}
// const removeUser=(id)=>{
//     return sessionIdToUserMap.delete(id)
// }
module.exports={
    setUser,
    getUser,
    // removeUser
}