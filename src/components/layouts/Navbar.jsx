import React, { use, useEffect, useState } from 'react';
import MaxWidth from '../MaxWidth';
import { AuthContext } from '../../contexts/AuthContext';
import { NavLink } from 'react-router';
import { MdWbSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';
import { GiShoppingCart } from 'react-icons/gi';
import { CiMenuFries } from 'react-icons/ci';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext)
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
    }, []);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success("Signed Out")
            })
            .then((err) => {
                toast.error(err.message)
            })
    }

    return (
        <div className={`w-full fixed top-0 left-0 z-50  transition-all duration-500 ease-out ${scrolled ? 'bg-base-100 shadow-md' : 'bg-transparent'}`}>
            <MaxWidth>
                <div className="justify-between items-center py-5 hidden lg:flex">

                    <div>
                        <h3 className='text-3xl font-bold tracking-wider'><span className='text-[#f5b754]'>R</span>ENAX</h3>
                    </div>

                    <div>
                        <ul className="flex items-center gap-5">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#f5b754]" : ''}>Home</NavLink></li>
                            <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-[#f5b754]" : ''}>About</NavLink></li>
                            <li><NavLink to="/available-cars" className={({ isActive }) => isActive ? "text-[#f5b754]" : ''}>Available Cars</NavLink></li>
                            {user &&
                                <>
                                    <li><NavLink to="/add-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : ''}>Add Car</NavLink></li>
                                    <li><NavLink to="/my-cars" className={({ isActive }) => isActive ? "text-[#f5b754]" : ''}>My Cars</NavLink></li>
                                </>
                            }
                            <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-[#f5b754]" : ''}>Blog</NavLink></li>
                            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#f5b754]" : ''}>Contact</NavLink></li>
                            {user ?
                                <li><a onClick={handleSignOut} className="cursor-pointer hover:text-[#f5b754]">SignOut</a></li>
                                :
                                <li><NavLink to="/sign-in" className={({ isActive }) => isActive ? "text-[#f5b754]" : ''}>
                                    SignIn
                                </NavLink></li>
                            }
                            <li>
                                <label className="toggle">
                                    <input type="checkbox" value="dark" className="theme-controller" />
                                    <MdWbSunny />
                                    <FaMoon />
                                </label>
                            </li>
                            <li>
                                {user &&
                                    <NavLink to="/my-bookings" className={({ isActive }) => isActive ? "text-[#f5b754] indicator flex items-center" : 'indicator flex items-center'}>
                                        <GiShoppingCart className='size-8' />
                                        <span className="badge bg-transparent border-none badge-xs font-bold indicator-item">8</span>
                                    </NavLink>
                                }
                            </li>
                            <li>
                                {user && (
                                    <div className="avatar">
                                        <div className="w-9 rounded-full ">
                                            <img alt="" src={user?.photoURL} />
                                        </div>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>

                </div>

                {/* for small devices */}
                <div className='flex justify-between items-center py-5 lg:hidden'>
                    <div>
                        <h3 className='text-xl md:text-3xl font-bold tracking-wider'><span className='text-[#f5b754]'>R</span>ENAX</h3>
                    </div>

                    <div className='flex items-center gap-2 md:gap-5'>
                        <ul className="flex items-center gap-5">
                            <li>
                                <label className="toggle">
                                    <input type="checkbox" value="dark" className="theme-controller" />
                                    <MdWbSunny />
                                    <FaMoon />
                                </label>
                            </li>
                            <li>
                                {user &&
                                    <NavLink to="/my-bookings" className={({ isActive }) => isActive ? "text-[#f5b754] indicator flex items-center" : 'indicator flex items-center'}>
                                        <GiShoppingCart className='size-8' />
                                        <span className="badge bg-transparent border-none badge-xs font-bold indicator-item">8</span>
                                    </NavLink>
                                }
                            </li>
                            <li>
                                {user && (
                                    <div className="avatar">
                                        <div className="w-9 rounded-full ">
                                            <img alt="" src={user?.photoURL} />
                                        </div>
                                    </div>
                                )}
                            </li>
                        </ul>

                        <div className="drawer drawer-end">
                            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer-1" className="cursor-pointer drawer-button">
                                    <CiMenuFries size={30} />
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu bg-base-200 min-h-full w-40 md:w-80 p-4">
                                    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#f5b754]" : ''}>Home</NavLink></li>
                                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-[#f5b754]" : ''}>About</NavLink></li>
                                    <li><NavLink to="/available-cars" className={({ isActive }) => isActive ? "text-[#f5b754]" : ''}>Available Cars</NavLink></li>
                                    {user &&
                                        <>
                                            <li><NavLink to="/add-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : ''}>Add Car</NavLink></li>
                                            <li><NavLink to="/my-cars" className={({ isActive }) => isActive ? "text-[#f5b754]" : ''}>My Cars</NavLink></li>
                                        </>
                                    }
                                    <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-[#f5b754]" : ''}>Blog</NavLink></li>
                                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#f5b754]" : ''}>Contact</NavLink></li>
                                    {user ?
                                        <li><a onClick={handleSignOut} className="cursor-pointer hover:text-[#f5b754]">SignOut</a></li>
                                        :
                                        <li><NavLink to="/sign-in" className={({ isActive }) => isActive ? "text-[#f5b754]" : ''}>
                                            SignIn
                                        </NavLink></li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </MaxWidth>
        </div>
    );
};

export default Navbar;
