import React from 'react'
import FooterComp from './FooterComp'
import Navbar from './Navbar'
import ProductSection from './ProductSection'
import DemoUseState from './DemoUseState'
import DemoUserEffect from './DemoUserEffect'

export default function Home() {
    return (
        <div>
            <Navbar />
            <ProductSection />
            <FooterComp />
            {/* <DemoUseState /> */}
            {/* <DemoUserEffect /> */}
        </div>
    )
}
