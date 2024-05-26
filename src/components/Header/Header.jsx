import React from 'react';
import logo from '../images/18.jpg'

const Header = () => {
    return (
        <>
            <nav className=' w-4/5 mx-auto flex justify-between items-center h-20'>
                <h1 className='text-3xl font-bold'>Smart Knowledge</h1>
                <img className='rounded-full w-10' src={logo} alt="" />

            </nav>
            <hr className='w-4/5 mx-auto mb-8' />
        </>
    );
};

export default Header;