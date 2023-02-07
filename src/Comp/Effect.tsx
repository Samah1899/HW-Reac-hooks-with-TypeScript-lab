import React from 'react'
import axios from 'axios'

import {useNavigate} from 'react-router-dom'
function Effect() {
    const [data, setData] =React.useState <any[]>([])
    const navigate= useNavigate()
    const api='https://63e22b98109336b6cb012cba.mockapi.io/log1'

    React.useEffect(()=>{
        axios.get(api).then(res=>{
            console.log(res.data)
            setData(res.data)
        })
    }, [])

//delete :

const DeleteItem=(id:string)=>{

    axios.delete(`https://63e22b98109336b6cb012cba.mockapi.io/log1/${id}`).then(res=>{
        setData(data.filter((del)=>{
            return del.id !=id

        })
    )})

}





  return (
    <div>
        <h1>Contact Information</h1>

<ul>
        {data.map((item:any) =>
        <div key={item.id}>
                <h4>Welcome :</h4>
             {item.firestName} {item.lastName}<br></br>
             <h4>Your Email :</h4>
             {item.email}
             <h4>Your phone :</h4>
             {item.phoneNum} 
             
            <button onClick={()=>{DeleteItem(item.id)}}>delete</button>
 
        </div>  
        )}

</ul>

    </div>
  )
}

export default Effect


///////////////////////////// الاساس


// import React from 'react'
// import axios from 'axios'
// import {useNavigate} from 'react-router-dom'
// function Effect() {
//     const [data, setData] =React.useState([])
//     const navigate= useNavigate()
//     const api='https://5fa6da9e085bf700163de946.mockapi.io/api/users/articles'

//     React.useEffect(()=>{
//         axios.get(api).then(res=>{
//             console.log(res.data)
//             setData(res.data)
//         })
//     }, [])

//   return (
//     <div>
//         <h1>Read</h1>
//         {data.map((item:any) =>
//         <div key={item.id}>
//              {item.firstName} {item.lastName}
//              <br />
//              {item.article}


//         </div>
           
//         )}
//                 <button onClick={() => {navigate('/createBlog')}}>Add Blog</button>

//     </div>
//   )
// }

// export default Effect







////////////////////////////////////////////////////////////////

// import React from 'react'
// import axios from 'axios'

// function Effect() {
//     const [data ,setData]=React.useState([])
//     React.useEffect(() =>{

//         axios.get('https://fakestoreapi.com/products').then(res =>{

//         console.log ('............')
//         console.log (res.data)
//         setData(res.data)


//         })

//     },[])

// return(

// <div>
// <ul>

// {data.map((item:any)=>
// <li key={item.id}>
// {item.title}
// </li>

// )}


// </ul>




// </div>


// )




//   return (


//     <div>

// {data.map((item:any) =>{

// return <>
        
//         {item.title}
//         </>

// }

    
//     </div> 

  
  
// }

// };

// }

// export default Effect