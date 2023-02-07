import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Post() {
    const [firestName , setFirestName] = React.useState("")
    const [lastName , setLastName] = React.useState("")
    const [email , setEmail] = React.useState("")
    const [phoneNum , setPhoneNum] = React.useState('')
const api = "https://63e22b98109336b6cb012cba.mockapi.io/log1"

const navigate = useNavigate()
const PostData = ()=>{
    if(firestName.length >=3 &&lastName.length>=3 ){
        axios.post(api,{
            firestName,
            lastName,
            email,
            phoneNum
        }).then(res=>{
            console.log(res);
            
        })
        navigate("/")
        axios.get("https://63e22b98109336b6cb012cba.mockapi.io/log1")
    }else{
        alert("Please write correct information")
    }

}
  return (

    <div>
        
        <input placeholder='Firest name' onChange={e =>{setFirestName(e.target.value)}}></input>
        <input placeholder=' Last name' onChange={e =>{setLastName(e.target.value)}}></input>
        <input placeholder=' Email' onChange={e =>{setEmail(e.target.value)}}></input>
        <input placeholder=' Phone Number' onChange={e =>{setPhoneNum(e.target.value)}}></input>
        <button onClick={PostData}>Register</button>


    </div>
  )
}

export default Post