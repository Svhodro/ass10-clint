import { useState } from "react";
import Usercontext from "./Usercontext";

const UserContextProvider=({children})=>{
    const [id,setId]=useState()
    const [user,setuser]=useState(false)
    const [reg,setreg]=useState(false)
    const [userDetails,setuserDetails]=useState({username:'',url:'',email:''})
    const [Contry,setContry]=useState()
    const [tourist,setTourist]=useState()
    const [contryid,setcontryid]=useState()
   
    return(
        <Usercontext.Provider value={{id,setId,user,setuser,userDetails,setuserDetails,reg,setreg,Contry,setContry,tourist,setTourist,contryid,setcontryid}}>
           {children}
        </Usercontext.Provider>
    )

}
export default UserContextProvider