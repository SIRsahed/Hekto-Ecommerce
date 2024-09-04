import React from 'react'
import Container from './Container'
import Logo from '../assets/logo.png'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className='py-4'>
            <Container>
                <div className="flex justify-between items-center">
                    <div className="w-[20%] items-center">
                        <Link to="/"><img src={Logo} alt='latest_product' /></Link>
                    </div>
                    <div className="w-[50%]">
                        <ul className="flex gap-x-10 items-center font-lato">
                            <li><Link to='/'>Home</Link></li>
                            <li>About us</li>
                            <li>Products</li>
                            <li>Blog</li>
                            <li><Link to='/shop'>Shop</Link></li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="w-[30%] flex items-center">
                        <input type="search" className='w-[85%] bg-[#D9D9D9] h-[40px] outline-none px-5' />
                        <IoSearch className='w-[15%] bg-[#FB2E86] h-[40px] py-[10px] text-white' />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Navbar
