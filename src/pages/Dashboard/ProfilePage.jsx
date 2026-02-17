import React from 'react';
import PagesBanner from '../../components/layouts/PagesBanner';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router';
import { CiEdit, CiFacebook, CiInstagram, CiTwitter } from 'react-icons/ci';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import MaxWidth from '../../components/MaxWidth';
import toast from 'react-hot-toast';
import useGetUser from '../../hooks/queries/users/usegetUser';
import LoadingSpinner from '../../components/LoadingSpinner';
import Swal from 'sweetalert2';
import useUpdateUser from '../../hooks/queries/users/useUpdateUser';

const ProfilePage = () => {
    const { user, setUser, updateUserInfo, updateUserEmail, updateUserPassword, loading } = useAuth()

    const { data, isLoading } = useGetUser(user?.email);
    const { mutate: updateUser } = useUpdateUser(user?.email)

    if (isLoading || loading) {
        return <LoadingSpinner minHScreen={'min-h-screen'}></LoadingSpinner>
    }

    const handleUpdateProfile = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        try {
            updateUserInfo({ displayName: name, photoURL: photoURL })
                .then(() => {
                    setUser({ ...user, displayName: name, photoURL: photoURL })
                })

            if (email !== user.email) {
                updateUserEmail(email);
            }

            if (password) {
                updateUserPassword(password);
            }

            // auth.currentUser.reload();

            toast.success("Profile updated successfully");
            document.getElementById("my_modal_1").close();
        }
        catch (err) {
            toast.error(err.message);
        }
    }

    const handleWantToSeller = () => {
        const id = data?._id
        const payload = { wantToSellerRequest: true }
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,

            buttonsStyling: false,

            confirmButtonText: "Yes, want to",
            cancelButtonText: "Cancel",

            customClass: {
                confirmButton: "btn btn-primary mx-5 btn-lg rounded-full px-10",
                cancelButton: "btn btn-outline btn-primary btn-lg rounded-full px-10",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                updateUser({ id, data: payload }, {
                    onSuccess: () => {
                        toast.success("Your Request has been send successfully to admin")
                    },
                    onError: (err) => toast.error(err.message || "Update failed"),
                })

            }
        });

    }
    return (
        <div>
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

                                <div className='text-center space-y-3'>
                                    <h4 className='font-bold text-2xl'>{user?.displayName}</h4>
                                    <p className='text-secondary'>{user?.email} | {data.role}</p>
                                </div>

                            </div>

                            <div className='flex justify-center flex-wrap gap-3 items-center'>
                                <Link ><button className='btn btn-circle btn-outline btn-primary btn-lg'><FaLinkedinIn /></button></Link>
                                <Link ><button className='btn btn-circle btn-outline btn-primary btn-lg'><CiTwitter /></button></Link>
                                <Link ><button className='btn btn-circle btn-outline btn-primary btn-lg'><CiInstagram /></button></Link>
                                <Link ><button className='btn btn-circle btn-outline btn-primary btn-lg'><FaFacebookF /></button></Link>
                                <button onClick={() => document.getElementById('my_modal_1').showModal()} className='btn rounded-4xl btn-outline btn-primary btn-lg flex items-center gap-2'><span><CiEdit /></span><span>Edit</span></button>
                                <button onClick={handleWantToSeller} className={`btn rounded-4xl btn-outline btn-primary btn-lg flex items-center gap-2 ${(data.wantToSellerRequest === true || data.role === 'seller' || data.role === 'admin') && 'hidden'}`}><span></span><span>Want to Seller</span></button>
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

                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box bg-base-300 rounded-3xl space-y-5">
                        <h3 className="font-bold text-2xl text-center">
                            Update Profile
                        </h3>

                        <form onSubmit={handleUpdateProfile} className="space-y-5">

                            <div className='space-y-2 text-secondary'>
                                <label className="text-sm block text-secondary font-medium">Name</label>
                                <input name='name' defaultValue={user?.displayName} type="text" className='input w-full input-primary focus:outline-none bg-base-300' />
                            </div>

                            <div className='space-y-2 text-secondary'>
                                <label className="text-sm block text-secondary font-medium">Photo URL</label>
                                <input name='photoURL' type="url" defaultValue={user?.photoURL} className='input w-full input-primary focus:outline-none bg-base-300' />
                            </div>

                            <div className='space-y-2 text-secondary'>
                                <label className="text-sm block text-secondary font-medium">Email</label>
                                <input name='email' type="email" defaultValue={user?.email} className='input w-full input-primary focus:outline-none bg-base-300' />
                            </div>


                            <div className='space-y-2 text-secondary'>
                                <label className="text-sm block text-secondary font-medium">Password</label>
                                <input name='password' type="password" className='input w-full input-primary focus:outline-none bg-base-300' placeholder="Leave blank to keep current password" />
                            </div>

                            <div className="modal-action flex justify-center gap-3">
                                <button type="submit" className='btn btn-primary rounded-full btn-xl hover:-translate-y-1 duration-200 transition' disabled={loading}>
                                    Update
                                </button>
                                <button type="button" onClick={() => document.getElementById("my_modal_1").close()} className='btn btn-primary btn-outline rounded-full btn-xl hover:-translate-y-1 duration-200 transition'>
                                    Cancel
                                </button>

                            </div>
                        </form>
                    </div>
                </dialog>

            </MaxWidth>
        </div>
    );
};

export default ProfilePage; 