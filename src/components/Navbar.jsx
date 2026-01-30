import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import logo from '../assets/logos/demo-logo.png'
import { Link, NavLink } from 'react-router';
import toast from 'react-hot-toast';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext)

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.error("Logout Successfully")
            })
            .then((err) => {
                toast.error(err.message)
            })
    }

    return (
        <div className="px-4 py-0 lg:px-10 navbar bg-base-100 border-b border-base-300 shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
                {/* Drop Down For Small Devices */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-base-300 btn-sm lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary" : ''}>Home</NavLink></li>
                        <li><NavLink to="/available-cars" className={({ isActive }) => isActive ? "text-primary" : ''}>Available Cars</NavLink></li>
                        {user && (
                            <>
                                <li><NavLink to="/add-car" className={({ isActive }) => isActive ? "text-primary" : ''}>Add Car</NavLink></li>
                                <li><NavLink to="/my-cars" className={({ isActive }) => isActive ? "text-primary" : ''}>My Cars</NavLink></li>
                                <li><NavLink to="/my-bookings" className={({ isActive }) => isActive ? "text-primary" : ''}>My Bookings</NavLink></li>
                            </>
                        )}
                        <li>
                            {user ? (
                                <NavLink to="/sign-in" className={({ isActive }) => isActive ? "text-primary" : 'hover:text-primary'}>
                                    SignIn
                                </NavLink>
                            ) : (
                                <a onClick={signOutUser} className="cursor-pointer hover:text-primary">
                                    SignOut
                                </a>
                            )}
                        </li>
                    </ul>
                </div>
                {/* Logo */}
                <Link to="/" className='cursor-pointer ml-2 lg:ml-0 flex items-center gap-1 size-20'>
                    <img src={logo} alt="logo.png" />
                </Link>
            </div>

            {/* Navbar center links */}
            <div className="navbar-center hidden lg:flex xl:text-xl">
                <ul className="flex gap-5 px-1">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary" : ''}>Home</NavLink></li>
                    <li><NavLink to="/available-cars" className={({ isActive }) => isActive ? "text-primary" : ''}>Available Cars</NavLink></li>
                    {user && (
                        <>
                            <li><NavLink to="/add-car" className={({ isActive }) => isActive ? "text-primary" : ''}>Add Car</NavLink></li>
                            <li><NavLink to="/my-cars" className={({ isActive }) => isActive ? "text-primary" : ''}>My Cars</NavLink></li>
                            <li><NavLink to="/my-bookings" className={({ isActive }) => isActive ? "text-primary" : ''}>My Bookings</NavLink></li>
                        </>
                    )}
                    <li>
                        {!user ? (
                            <NavLink to="/sign-in" className={({ isActive }) => isActive ? "text-primary" : 'hover:text-primary'}>
                                SignIn
                            </NavLink>
                        ) : (
                            <a onClick={handleSignOut} className="cursor-pointer hover:text-primary">
                                SignOut
                            </a>
                        )}
                    </li>
                </ul>
            </div>

            {/* Navbar end */}
            <div className="navbar-end gap-5 xl:text-xl">
                {/* Theme toggle button */}
                <label className="toggle text-base-content">
                    <input type="checkbox" value="dark" className="theme-controller" />

                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                </label>

                {user && (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="" src={user?.photoURL} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;