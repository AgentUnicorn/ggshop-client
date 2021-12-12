import React from 'react'
import FooterComp from './FooterComp'
import Navbar from './Navbar'
import ProductSection from './ProductSection'


export default function Home() {
    return (
        <div>
            <Navbar />
            <h1>Home page</h1>
            <ProductSection />
            <FooterComp />
        </div>
    )
}
