import React from 'react'
import Container from './Container'
import { Tabs } from '@ark-ui/react'
import { FaCheck } from "react-icons/fa6";
import DisImage from '../assets/dis.png'


const DiscountItem = () => {
    return (
        <section className='sec_pad'>
            <Container>
                <div className="text-center">
                    <h2 className='heading'>Discount Item</h2>
                </div>
                <Tabs.Root defaultValue="new_arrival">
                    <Tabs.List className='flex gap-x-20 justify-center mb-[100px]'>
                        <Tabs.Trigger value="new_arrival" className='text-[18px] font-bold text-[#151875] font-lato'>Wood Chair</Tabs.Trigger>
                        <Tabs.Trigger value="best_seller" className='text-[18px] font-bold text-[#151875] font-lato'>Plastic Chair</Tabs.Trigger>
                        <Tabs.Trigger value="featured" className='text-[18px] font-bold text-[#151875] font-lato'>Sofa Colletion</Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="new_arrival">
                        <div className="flex justify-between">
                            <div className="w-[45%]">
                                <div className="">
                                    <h3 className='text-[35px] font-bold text-[#151875] font-jsans pb-4'>20% Discount Of All Products</h3>
                                    <h4 className='text-[21px] font-normal text-[#FB2E86] font-jsans pb-5'>Eams Sofa Compact</h4>
                                    <p className='text-[17px] font-normal text-[#B7BACB] font-lato pb-5 leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                                </div>
                                <div className="flex justify-between flex-wrap pb-12">
                                    <div className="flex gap-x-2 items-center pb-4">
                                        <FaCheck/>
                                        <h3 className='text-[16px] font-normal text-[#B8B8DC] font-lato'>Material expose like metals</h3>
                                    </div>
                                    <div className="flex gap-x-2 items-center pb-4">
                                        <FaCheck/>
                                        <h3 className='text-[16px] font-normal text-[#B8B8DC] font-lato'>Material expose like metals</h3>
                                    </div>
                                    <div className="flex gap-x-2 items-center">
                                        <FaCheck/>
                                        <h3 className='text-[16px] font-normal text-[#B8B8DC] font-lato'>Material expose like metals</h3>
                                    </div>
                                    <div className="flex gap-x-2 items-center">
                                        <FaCheck/>
                                        <h3 className='text-[16px] font-normal text-[#B8B8DC] font-lato'>Material expose like metals</h3>
                                    </div>
                                </div>
                                <div className="">
                                    <a href="" className='text-[16px] font-normal text-[#FFF] font-jsans px-12 py-5 bg-[#FB2E86]'>Shop Now</a>
                                </div>
                            </div>
                            <div className="w-[45%]">
                                <img className='w-4/5 -mt-8' src={DisImage} alt="discount_image" />
                            </div>
                        </div>
                    </Tabs.Content>
                </Tabs.Root>
            </Container>
        </section>
    )
}

export default DiscountItem
