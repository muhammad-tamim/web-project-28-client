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
                            <li>
                                <div className="dropdown dropdown-hover">
                                    <div tabIndex={0} role="button" className="cursor-pointer text-secondary hover:text-primary flex items-center gap-0.5">Categories<MdKeyboardArrowDown /></div>
                                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li>
                                            <div className="dropdown dropdown-hover dropdown-right">
                                                <div tabIndex={0} role="button" className="cursor-pointer text-secondary hover:text-primary">Brands</div>
                                                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 ml-0 rounded-box z-1 w-52 p-2 shadow-sm">
                                                    <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                    <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                    <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                    <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                    <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                    <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropdown dropdown-hover dropdown-right">
                                                <div tabIndex={0} role="button" className="cursor-pointer text-secondary hover:text-primary">Types</div>
                                                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 ml-0 rounded-box z-1 w-52 p-2 shadow-sm">
                                                    <li><NavLink to="/suv" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>SUV</NavLink></li>
                                                    <li><NavLink to="/suv" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>SUV</NavLink></li>
                                                    <li><NavLink to="/suv" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>SUV</NavLink></li>
                                                    <li><NavLink to="/suv" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>SUV</NavLink></li>
                                                    <li><NavLink to="/suv" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>SUV</NavLink></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><NavLink to="/available-cars" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Available Cars</NavLink></li>
                            {user &&
                                <>
                                    <li><NavLink to="/add-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Add Car</NavLink></li>
                                    <li><NavLink to="/my-cars" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>My Cars</NavLink></li>
                                </>
                            }
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
                                        <span className="badge bg-transparent border-none badge-xs font-bold indicator-item text-secondary">8</span>
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

                {/* for large devices */}
                <div className='justify-between items-center py-5 hidden lg:flex xl:hidden'>
                    <div>
                        <Link to={'/'} className='text-xl font-bold tracking-wider text-primary'><span className='text-[#f5b754]'>R</span>ENAX</Link>
                    </div>

                    <div className='flex items-center gap-2 md:gap-5'>
                        <ul className="flex items-center gap-5">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Home</NavLink></li>
                            <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>About</NavLink></li>
                            <li><NavLink to="/available-cars" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary w-full'}>Cars</NavLink></li>
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
                                <label htmlFor="my-drawer-1" className="cursor-pointer drawer-button text-gray-500 hover:text-primary">
                                    <CiMenuFries size={30} />
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu bg-base-200 min-h-full w-48 md:w-80 p-4">
                                    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Home</NavLink></li>
                                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>About</NavLink></li>
                                    <li className='text-secondary hover:text-primary'><a>Categories</a>
                                        <ul>
                                            <li>Brands</li>
                                            <ul className="">
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                            </ul>
                                            <li>Types</li>
                                            <ul className="">
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                            </ul>
                                        </ul>
                                    </li>
                                    <li><NavLink to="/available-cars" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Available Cars</NavLink></li>
                                    {user &&
                                        <>
                                            <li><NavLink to="/add-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Add Car</NavLink></li>
                                            <li><NavLink to="/my-cars" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>My Cars</NavLink></li>
                                        </>
                                    }
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
                                <label htmlFor="my-drawer-1" className="cursor-pointer drawer-button text-gray-500 hover:text-primary">
                                    <CiMenuFries size={30} />
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu bg-base-200 min-h-full w-48 md:w-80 p-4">
                                    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Home</NavLink></li>
                                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>About</NavLink></li>
                                    <li className='text-secondary hover:text-primary'><a>Categories</a>
                                        <ul>
                                            <li>Brands</li>
                                            <ul className="">
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                            </ul>
                                            <li>Types</li>
                                            <ul className="">
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                                <li><NavLink to="/sports-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Sports Cars</NavLink></li>
                                            </ul>
                                        </ul>
                                    </li>
                                    <li><NavLink to="/available-cars" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Available Cars</NavLink></li>
                                    {user &&
                                        <>
                                            <li><NavLink to="/add-car" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>Add Car</NavLink></li>
                                            <li><NavLink to="/my-cars" className={({ isActive }) => isActive ? "text-[#f5b754]" : 'text-secondary'}>My Cars</NavLink></li>
                                        </>
                                    }
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

            </MaxWidth>
        </div>
    );
};

export default Navbar;
