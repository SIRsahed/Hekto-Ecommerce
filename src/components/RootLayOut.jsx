import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet, ScrollRestoration } from 'react-router-dom'

const RootLayOut = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </>
    )
}

export default RootLayOut
