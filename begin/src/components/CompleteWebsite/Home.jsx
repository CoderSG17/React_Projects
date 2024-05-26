import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Working from './Working'
import Usage from './Usage'
import Support from './Support'
import Money from './Money'
import Contact1 from './Contact1'
import Footer from './Footer'
// import Error from './Pages/Error'

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Header></Header>
            <Working></Working>
            <Usage></Usage>
            <Contact1></Contact1>
            <Money></Money>
            <Support></Support>
            <Footer></Footer>
            {/* <Error></Error> */}
        </>
    )
}

export default Home