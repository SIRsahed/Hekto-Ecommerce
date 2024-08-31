import React from 'react'
import PDetailsInfo from '../components/PDetailsInfo'
import PDetailsMain from '../components/PDetailsMain'
import PageHeadingReUsable from '../components/PageHeadingReUsable'
import Logos from '../components/Logos'

const ProductDetails = () => {

    return (
        <>
            <PageHeadingReUsable pagename='Product Details'/>
            <PDetailsMain/>
            <PDetailsInfo/>
            <Logos/>
        </>
    )
}

export default ProductDetails
