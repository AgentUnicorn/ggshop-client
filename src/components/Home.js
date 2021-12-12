import React from 'react'
import FooterComp from './FooterComp'
import Navbar from './Navbar'
import ProductSection from './ProductSection'

export default function Home() {
    return (
        <div>
            <Navbar />
            <ProductSection />
            <FooterComp />
        </div>
    )
}
