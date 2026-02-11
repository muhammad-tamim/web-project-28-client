import React, { use, useEffect, useState } from 'react';
import MaxWidth from '../MaxWidth';
import { AuthContext } from '../../contexts/AuthContext';
import { Link, NavLink } from 'react-router';
import { MdKeyboardArrowDown, MdWbSunny } from 'react-icons/md';
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

    const bookingCount = localStorage.getItem("bookingsCount")

    return (
        <div className={`w-full fixed top-0 left-0 z-50  transition-all duration-500 ease-out ${scrolled ? 'bg-base-100 shadow-md' : 'bg-transparent'}`}>
            <MaxWidth>
                {/* for extra large devices */}
                <div className="justify-between items-center py-5 hidden xl:flex">
                    <div>
                        <Link to={'/'} className='text-3xl font-bold tracking-wider text-primary'><span className='text-[#f5b754]'>R</span>ENAX</Link>
                    </div>

                    <div>
                        <ul className="flex items-center gap-5">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Home</NavLink></li>
                            <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>About</NavLink></li>
                            <li><NavLink to="/brands" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Brands</NavLink></li>
                            <li><NavLink to="/categories" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Categories</NavLink></li>
                            <li><NavLink to="/cars" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Cars</NavLink></li>
                            <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Blog</NavLink></li>
                            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Contact</NavLink></li>
                            {user ?
                                <li><a onClick={handleSignOut} className="cursor-pointer text-secondary hover:text-[#f5b754]">SignOut</a></li>
                                :
                                <li><NavLink to="/sign-in" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>
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
                                    <NavLink to="/my-bookings" className={({ isActive }) => isActive ? "text-[#f5b754] indicator flex items-center" : 'indicator flex items-center text-secondary'}>
                                        <GiShoppingCart className='size-8' />
                                        <span className="badge bg-transparent border-none badge-xs font-bold indicator-item text-secondary">{bookingCount}</span>
                                    </NavLink>
                                }
                            </li>
                            <li>
                                {user && (
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt="" src={user?.photoURL} />
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex="-1"
                                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2">
                                            <li><NavLink to={'/dashboard'} className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>Dashboard</NavLink></li>
                                            <li><NavLink to={'/dashboard'} className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>Profile</NavLink></li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>

                </div>

                {/* for large devices */}
                <div className='justify-between items-center py-5 hidden lg:flex xl:hidden'>
                    <div>
                        <Link to={'/'} className='text-xl font-bold tracking-wider text-primary'><span className='text-[#f5b754]'>R</span>ENAX</Link>
                    </div>

                    <div className='flex items-center gap-2 md:gap-5'>
                        <ul className="flex items-center gap-5">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Home</NavLink></li>
                            <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>About</NavLink></li>
                            <li><NavLink to="/brands" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Brands</NavLink></li>
                            <li><NavLink to="/categories" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Categories</NavLink></li>
                            <li><NavLink to="/cars" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Cars</NavLink></li>
                            {user ?
                                <li><a onClick={handleSignOut} className="cursor-pointer text-secondary hover:text-[#f5b754]">SignOut</a></li>
                                :
                                <li><NavLink to="/sign-in" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>
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
                                    <NavLink to="/my-bookings" className={({ isActive }) => isActive ? "text-[#f5b754] indicator flex items-center" : 'indicator flex items-center text-secondary'}>
                                        <GiShoppingCart className='size-8' />
                                        <span className="badge bg-transparent border-none badge-xs font-bold indicator-item">{bookingCount}</span>
                                    </NavLink>
                                }
                            </li>
                            <li>
                                {user && (
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt="" src={user?.photoURL} />
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex="-1"
                                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2">
                                            <li><NavLink to={'/dashboard'} className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>Dashboard</NavLink></li>
                                            <li><NavLink to={'/dashboard'} className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>Profile</NavLink></li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                        </ul>

                        <div className="drawer drawer-end">
                            <input id="drawer-medium" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="drawer-medium" className="cursor-pointer drawer-button text-gray-500 hover:text-primary">
                                    <CiMenuFries size={30} />
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="drawer-medium" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu bg-base-200 min-h-full w-48 md:w-80 p-4">
                                    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Home</NavLink></li>
                                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>About</NavLink></li>
                                    <li><NavLink to="/brands" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Brands</NavLink></li>
                                    <li><NavLink to="/categories" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Categories</NavLink></li>
                                    <li><NavLink to="/cars" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Cars</NavLink></li>
                                    <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Blog</NavLink></li>
                                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Contact</NavLink></li>
                                    {user ?
                                        <li><a onClick={handleSignOut} className="cursor-pointer text-secondary hover:text-primary">SignOut</a></li>
                                        :
                                        <li><NavLink to="/sign-in" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>
                                            SignIn
                                        </NavLink></li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>


                {/* for small devices */}
                <div className='flex justify-between items-center py-5 lg:hidden'>
                    <div>
                        <Link to={'/'} className='text-xl font-bold tracking-wider text-primary'><span className='text-[#f5b754]'>R</span>ENAX</Link>
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
                                    <NavLink to="/my-bookings" className={({ isActive }) => isActive ? "text-[#f5b754] indicator flex items-center" : 'indicator flex items-center text-secondary'}>
                                        <GiShoppingCart className='size-8' />
                                        <span className="badge bg-transparent border-none badge-xs font-bold indicator-item">{bookingCount}</span>
                                    </NavLink>
                                }
                            </li>
                            <li>
                                {user && (
                                    <div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt="" src={user?.photoURL} />
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex="-1"
                                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2">
                                            <li><NavLink to={'/dashboard'} className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>Dashboard</NavLink></li>
                                            <li><NavLink to={'/dashboard'} className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'text-secondary hover:bg-primary hover:text-white'}`}>Profile</NavLink></li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                        </ul>

                        <div className="drawer drawer-end">
                            <input id="drawer-small" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="drawer-small" className="cursor-pointer drawer-button text-gray-500 hover:text-primary">
                                    <CiMenuFries size={30} />
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="drawer-small" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu bg-base-200 min-h-full w-48 md:w-80 p-4">
                                    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Home</NavLink></li>
                                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>About</NavLink></li>
                                    <li><NavLink to="/brands" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Brands</NavLink></li>
                                    <li><NavLink to="/categories" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Categories</NavLink></li>
                                    <li><NavLink to="/cars" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Cars</NavLink></li>
                                    <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Blog</NavLink></li>
                                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Contact</NavLink></li>
                                    {user ?
                                        <li><a onClick={handleSignOut} className="cursor-pointer text-secondary hover:text-primary">SignOut</a></li>
                                        :
                                        <li><NavLink to="/sign-in" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>
                                            SignIn
                                        </NavLink></li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </MaxWidth >
        </div >
    );
};

export default Navbar;
