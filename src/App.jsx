import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterUser from './Components/RegisterUser';
import HomeScreen from './Components/HomeScreen';
import GetAllUsers from './Components/GetAllUsers';
import GetSingleUser from './Components/GetSingleUser'
import LoginUser from './Components/LoginUser';
import ProductDetails from './Components/ProductDetails';
const App = ()=>{
  return(
    <Router>
      <Routes>
        <Route path="/RegisterUser" element={<RegisterUser />} />
        <Route path="/HomeScreen" element={<HomeScreen />} />
        <Route path="/" element={<LoginUser />} />
        <Route path="/GetAllUsers" element={<GetAllUsers />} />
        <Route path="/GetSingleUser/:id" element={<GetSingleUser />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />

      </Routes>
  </Router>
  )
}


export default App;