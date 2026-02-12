import React from 'react';
import toast from 'react-hot-toast';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router';
import { MdWbSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';
import { GiShoppingCart } from 'react-icons/gi';
import { CiMenuFries } from 'react-icons/ci';
import MaxWidth from '../../MaxWidth';
import useAuth from '../../../hooks/useAuth';
import { IoIosNotificationsOutline } from 'react-icons/io';

const DashboardNavbar = () => {
    const { user, signOutUser } = useAuth()

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
        <div className='w-full sticky top-0 z-50 bg-base-200 px-5 md:px-10'>

            <div className="flex justify-between items-center py-5">

                <div>
                    <div className="flex items-center gap-0.5">
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost text-primary text-base md:text-xl lg:text-2xl xl:hidden">
                            <FaArrowRightFromBracket />
                        </label>
                        <Link to="/" className="font-bold tracking-wider text-base md:text-xl lg:text-2xl text-primary">RENTAX</Link>
                    </div>
                </div>

                <div>
                    <ul className="flex items-center gap-5">
                        <li>
                            <label className="toggle">
                                <input type="checkbox" value="dark" className="theme-controller" />
                                <MdWbSunny />
                                <FaMoon />
                            </label>
                        </li>
                        <li>
                            <div className="dropdown dropdown-end">
                                <button tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
                                    <div className="indicator">
                                        <span><IoIosNotificationsOutline size={30} className='text-secondary' /></span>
                                        <span className="badge badge-xs badge-primary indicator-item">1</span>
                                    </div>
                                </button>

                                <ul tabIndex={0} className="dropdown-content bg-base-100 rounded-box z-50 mt-5 w-56 md:w-72 p-3 shadow gap-2 max-h-80 overflow-y-auto">
                                    <li>
                                        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-base-200 transition cursor-pointer">
                                            <img src={user?.photoURL} alt="user" className="size-10 rounded-full object-cover" />
                                            <div className='flex-1 min-w-0'>
                                                <p className="text-sm font-medium text-primary">John booked your Tesla Model S him ydfdif</p>
                                                <span className="text-xs text-secondary">2 minutes ago</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-base-200 transition cursor-pointer">
                                            <img src={user?.photoURL} alt="user" className="size-10 rounded-full object-cover" />
                                            <div className='flex-1 min-w-0'>
                                                <p className="text-sm font-medium text-primary">John booked your Tesla Model S him ydfdif</p>
                                                <span className="text-xs text-secondary">2 minutes ago</span>
                                            </div>
                                        </div>
                                    </li>


                                    <div className="divider"></div>

                                    <li>
                                        <NavLink to="/dashboard/notifications" className="text-center flex justify-center text-sm text-primary font-medium hover:underline">
                                            View All Notifications
                                        </NavLink>
                                    </li>

                                </ul>

                            </div>
                        </li>
                        <li>
                            {user && (
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="" src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-5 w-52 p-2 shadow gap-2">
                                        <div className="text-center border-b border-gray-200 pb-2">
                                            <h3 className="font-medium text-base text-primary">{user.displayName}</h3>
                                            <p className="text-sm text-gray-500 truncate">{user.email}</p>
                                        </div>
                                        <li><NavLink to={'/profile'} className={({ isActive }) => `block px-3 py-2 rounded hover:bg-primary hover:text-white transition ${isActive ? 'bg-primary text-white' : 'text-secondary'}`}>Profile</NavLink></li>
                                        <li><a onClick={handleSignOut} className="w-full text-left px-3 py-2 rounded hover:bg-red-500 hover:text-white transition text-secondary">SignOut</a></li>
                                    </ul>
                                </div>
                            )}
                        </li>
                    </ul>

                </div>

            </div>

        </div>
    );
};

export default DashboardNavbar;
