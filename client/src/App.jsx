import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
// import Header from './components/Header'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import PrivateRoute from './components/PrivateRoute'
// import CreateListing from './pages/CreateListing'
// import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'
import Search from './pages/Search'
import Footer from './components/Footer'
import Services from './pages/Services'
import ServicesFrom from './pages/ServicesFrom'
import Expertise from './pages/Expertise'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route path='/expertise' element={<Expertise />} />
        <Route path='/listing/:listingId' element={<Listing />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/services-form' element={<ServicesFrom />} />
          {/* <Route path='/create-listing' element={<CreateListing />} /> */}
          {/* <Route path='/update-listing/:listingId' element={<UpdateListing />} /> */}
        </Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
