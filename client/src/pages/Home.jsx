import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import PopularProducts from '../components/PopularProducts'
import Newsletter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Categories/>
        <PopularProducts/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home