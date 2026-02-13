import React from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import { LiaCarSideSolid } from 'react-icons/lia';
import { TbPigMoney } from 'react-icons/tb';
import { NavLink } from 'react-router';

const SellerMenu = () => {
    return (
        <>
            <li>
                <NavLink to="/dashboard/seller/add-car" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>
                    <FiPlusSquare className="w-5 h-5" />
                    <span>Add Car</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/seller/my-cars" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>
                    <LiaCarSideSolid className='w-5 h-5' />
                    <span>My Cars</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/seller/my-sales" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>
                    <TbPigMoney className='w-5 h-5' />
                    <span>My sales</span>
                </NavLink>
            </li>
        </>
    );
};

export default SellerMenu;