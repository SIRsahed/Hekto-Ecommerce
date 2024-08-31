import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Pd1 from '../assets/pdetails1.png'
import Pd2 from '../assets/pdetails2.png'
import Pd3 from '../assets/pdetails3.png'
import { FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiShoppingCart } from 'react-icons/fi'
import { LuZoomIn } from 'react-icons/lu'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PDetailsMain = () => {

    let productId = useParams()
    let [singleproduct, setSingleProduct] = useState([])

    let getdata = () => {
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
            setSingleProduct(response.data);
        })
    }

    useEffect(() => {
        getdata()
    }, [])

  return (
    <section className='sec_pad'>
                <Container>
                    <div className="flex shadow-lg gap-x-4 items-center py-3">
                        <div className="">
                            <img src={Pd1} alt="product_details" className='mb-3' />
                            <img src={Pd2} alt="product_details" className='mb-3' />
                            <img src={Pd3} alt="product_details" className='' />
                        </div>
                        <div className="bg-[#C4C4C4] w-1/3 h-full flex justify-center items-center">
                            <img src={singleproduct.thumbnail} alt="product_thumbnail" className='h-full' />
                        </div>
                        <div className="">
                            <h3 className='text-[36px] text-[#0D134E] font-jsans font-semibold pb-3'>{singleproduct.title}</h3>
                            <div className="flex gap-x-2 items-center text-[#FFC416] pb-4">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                                <div className="text-[#151875] font-jsans text-[14px] font-normal items-center">( 22 )</div>
                            </div>
                            <div className="flex gap-x-5 pb-6">
                                <h4 className='text-[#151875] text-[18px] font-jsans font-normal'>${singleproduct.price}</h4>
                                <h5 className='text-[18px] font-jsans font-normal line-through text-[#FB2E86]'>${(singleproduct.price + 10 / 100).toFixed(2)}</h5>
                            </div>
                            <p className='text-[#A9ACC6] font-jsans text-[16px] font-normal leading-7'>{singleproduct.description}</p>
                            <div className="flex gap-x-2 text-[20px] text-[#151875] group-hover:bottom-6 duration-500 ease-in-out pt-2">
                                <div className="cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center"><FiShoppingCart /></div>
                                <div className="cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center"><FaRegHeart /></div>
                                <div className="cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center"><LuZoomIn /></div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
  )
}

export default PDetailsMain
