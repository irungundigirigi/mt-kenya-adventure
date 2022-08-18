import React from 'react';
import Navbar from '../components/Navbar'
import Topbadge from './Topbadge';
import Footer from './Footer.js'

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
            
        </>
    )
}

export default Layout



