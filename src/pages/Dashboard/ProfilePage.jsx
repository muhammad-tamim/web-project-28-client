import React from 'react';
import PagesBanner from '../../components/layouts/PagesBanner';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router';
import { CiEdit, CiFacebook, CiInstagram, CiTwitter } from 'react-icons/ci';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import MaxWidth from '../../components/MaxWidth';

const ProfilePage = () => {
    const { user } = useAuth()
    console.log(user)
    return (
        <div>
            <PagesBanner pageName={'rentax'} title={'Profile'}></PagesBanner>

            <MaxWidth>
                <div className='space-y-20 my-20 xl:px-10'>

                    <div className='bg-base-300 rounded-3xl p-5 md:p-10 space-y-10'>

                        <div className='p-10 flex flex-col gap-10 justify-between items-center shadow bg-base-200 rounded-3xl'>
                            <div className='flex flex-col justify-center items-center gap-5'>
                                <div className="avatar">
                                    <div className="w-20 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>

                                <div className='text-center'>
                                    <h4 className='font-semibold text-xl'>{user.displayName}</h4>
                                    <p className='text-secondary'>{user.email}</p>
                                </div>

                            </div>

                            <div className='flex justify-center flex-wrap gap-3 items-center'>
                                <Link ><button className='btn btn-circle btn-outline btn-primary btn-lg'><FaLinkedinIn /></button></Link>
                                <Link ><button className='btn btn-circle btn-outline btn-primary btn-lg'><CiTwitter /></button></Link>
                                <Link ><button className='btn btn-circle btn-outline btn-primary btn-lg'><CiInstagram /></button></Link>
                                <Link ><button className='btn btn-circle btn-outline btn-primary btn-lg'><FaFacebookF /></button></Link>
                                <Link ><button className='btn rounded-4xl btn-outline btn-primary btn-lg flex items-center gap-2'><span><CiEdit /></span><span>Edit</span></button></Link>
                            </div>

                        </div>


                        <div className='p-10 shadow bg-base-200 rounded-3xl space-y-8'>
                            <h3 className='text-2xl font-semibold'>Account Information</h3>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                <div>
                                    <p className='text-sm font-medium text-secondary'>User</p>
                                    <p className='text-base'>{user?.displayName}</p>
                                </div>

                                <div>
                                    <p className='text-sm font-medium text-secondary'>Email Verified</p>
                                    <p className={`text-base`}>
                                        {user?.emailVerified ? "Verified" : "Not Verified"}
                                    </p>
                                </div>

                                <div>
                                    <p className='text-sm font-medium text-secondary'>Phone Number</p>
                                    <p className='text-base'>{user?.phoneNumber || "Not Provided"}</p>
                                </div>

                                <div>
                                    <p className='text-sm font-medium text-secondary'>Provider</p>
                                    <p className='text-base'>
                                        {user?.providerData?.[0]?.providerId || "password"}
                                    </p>
                                </div>

                                <div>
                                    <p className='text-sm font-medium text-secondary'>Account Created</p>
                                    <p className='text-base'>
                                        {user?.metadata?.creationTime
                                            ? new Date(user.metadata.creationTime).toLocaleString()
                                            : "N/A"}
                                    </p>
                                </div>


                                <div>
                                    <p className='text-sm font-medium text-secondary'>Last Signin</p>
                                    <p className='text-base'>
                                        {user?.metadata?.lastSignInTime
                                            ? new Date(user.metadata.lastSignInTime).toLocaleString()
                                            : "N/A"}
                                    </p>
                                </div>


                                <div>
                                    <p className='text-sm font-medium text-secondary'>Last Refresh</p>
                                    <p className='text-base'>
                                        {user?.reloadUserInfo?.lastRefreshAt
                                            ? new Date(user.reloadUserInfo.lastRefreshAt).toLocaleString()
                                            : "N/A"}
                                    </p>
                                </div>

                                <div>
                                    <p className='text-sm font-medium text-secondary'>Account Type</p>
                                    <p className='text-base capitalize'>
                                        {user?.providerData?.length > 1
                                            ? "Multiple Providers"
                                            : user?.providerData?.[0]?.providerId === "google.com"
                                                ? "Google Account"
                                                : "Email & Password"}
                                    </p>
                                </div>

                                <div>
                                    <p className='text-sm font-medium text-secondary'>Status</p>
                                    <p className='text-base'>Active</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </MaxWidth>
        </div>
    );
};

export default ProfilePage; 