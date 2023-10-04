import React from 'react'
import Mumbai from './Pages/Mumbai/Mumbai'
import NewYork from './Pages/Mumbai/NewYork'
import Paris from './Pages/Mumbai/Paris'
import London from './Pages/Mumbai/London'
import {Routes,Route} from 'react-router-dom'
import Properties from './Pages/Properties/Properties'
const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<NewYork/>}/>
    <Route path='/Mumbai' element={<Mumbai/>}/>
    <Route path='/Paris' element={<Paris/>}/>
    <Route path='/London' element={<London/>}/>
    <Route path='/Properties' element={<Properties/>}/>
  </Routes>
  )
}

export default AllRoutes
