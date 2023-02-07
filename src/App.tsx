import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Effect from './Comp/Effect'
import Post from './Comp/Post'
import { Route , Routes } from 'react-router-dom'

function App() {
  

  return (
   
      <div>
   <Effect/>
   {/* <Post/> */}
   <Routes>

    <Route path='/' element={<Post/>} />

</Routes>
    </div>
  )
}

export default App
