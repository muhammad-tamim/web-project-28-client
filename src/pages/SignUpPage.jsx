import React from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import { imageUpload } from '../api/utils';
import useCreateUser from '../hooks/queries/users/useCreateUser';
import PagesBanner from '../components/layouts/PagesBanner';
import MaxWidth from '../components/MaxWidth';
import signInImage from '../assets/images/signin-image.webp'
import { FcGoogle } from 'react-icons/fc';
import { IoMdPhotos } from 'react-icons/io';
import { IoEyeOutline, IoPerson } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';

const SignUpPage = () => {
    const navigate = useNavigate();
    const { signUpUser, signInUserWithGoogle, setUser, updateUserInfo, loading } = useAuth()
    const { mutate: createUser } = useCreateUser()

    const handleSignUp = async (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const image = e.target.image.files[0]
        const imageUrl = await imageUpload(image)
        const email = e.target.email.value
        const password = e.target.password.value

        signUpUser(email, password)
            .then((result) => {
                const payload = { name, email, photoUrl: imageUrl }
                createUser(payload, {
                    onSuccess: () => {
                        toast.success('Sign Up Successful')
                        const user = result.user

                        updateUserInfo({ displayName: name, photoURL: imageUrl })
                            .then(() => {
                                setUser({ ...user, displayName: name, photoURL: imageUrl })
                                navigate('/')
                            })
                    },
                    onError: (err) => {
                        toast.error(err.response?.data?.message || 'Failed to create user in DB')
                    }
                })


            })
            .catch((error) => {
                toast.error(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        signInUserWithGoogle()
            .then((result) => {
                const payload = {
                    name: result?.user?.displayName,
                    email: result?.user?.email,
                    photoUrl: result?.user?.photoURL,
                }
                createUser(payload, {
                    onSuccess: () => {
                        toast.success('Login Successful')
                        navigate('/')
                    },
                    onError: (err) => {
                        toast.error(err.response?.data?.message || 'Failed to create user in DB')
                    }
                })

            })
            .catch((error) => {
                toast.error(error.message)
            });
    }

    return (
        <div>
            <PagesBanner pageName={'rentax'} title={'SignUp'}></PagesBanner>
            <MaxWidth>
                <div className='space-y-20 my-20'>
                    <div className="py-10 lg:py-20 flex flex-col items-center justify-center px-4 lg:px-8 xl:px-0">
                        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                            <div className="md:max-w-md w-full px-4 py-4">
                                <form onSubmit={handleSignUp}>
                                    <div className="mb-12">
                                        <h1 className="text-slate-900 text-3xl font-bold">Sign up</h1>
                                        <p className="text-[15px] mt-6 text-slate-600">
                                            Already have an account{' '}
                                            <Link to="/sign-in" className="text-[#f89223] font-medium hover:underline ml-1 whitespace-nowrap">
                                                Login here
                                            </Link>
                                        </p>
                                    </div>

                                    <label className="text-slate-900 text-[13px] font-medium block mb-2">Name</label>
                                    <div className="relative flex items-center">
                                        <input name="name" type="text" required className="input w-full border-0 bg-gray-100 focus:outline-[#f89223]" placeholder="Enter Name" />
                                        <span className="size-5 absolute right-2 text-slate-400"><IoPerson /></span>
                                    </div>

                                    <label className="mt-8 text-slate-900 text-[13px] font-medium block mb-2">Photo</label>
                                    <div className="relative flex items-center">
                                        <input name="url" type="file" required className='file-input w-full focus:outline-[#f89223]' placeholder="Enter URL" />
                                        <span className="size-5 absolute right-2 text-slate-400"><IoMdPhotos /></span>
                                    </div>

                                    <label className="mt-8 text-slate-900 text-[13px] font-medium block mb-2">Email</label>
                                    <div className="relative flex items-center">
                                        <input name="email" type="email" required className="input w-full border-0 bg-gray-100 focus:outline-[#f89223]" placeholder="Enter email" />
                                        <span className="size-5 absolute right-2 text-slate-400"><MdOutlineMailOutline /></span>
                                    </div>

                                    <label className="mt-8 text-slate-900 text-[13px] font-medium block mb-2">Password</label>
                                    <div className="relative flex items-center">
                                        <input name="password" type="password" required className="input w-full border-0 bg-gray-100 focus:outline-[#f89223]" placeholder="Enter password" />
                                        <span className="size-5 absolute right-2 text-slate-400"><IoEyeOutline /></span>
                                    </div>


                                    <p className="text-[#f89223] font-medium text-sm hover:underline mt-8 text-right cursor-pointer">
                                        Forgot Password?
                                    </p>

                                    <button
                                        type="submit"
                                        className={`mt-12 btn w-full btn-primary ${loading ? 'btn-disabled' : ''}`}
                                    >
                                        Sign In
                                    </button>

                                    <div className="divider">or</div>

                                    <button
                                        type="button"
                                        onClick={handleGoogleSignIn}
                                        className={`w-full flex items-center justify-center gap-4 btn btn-primary btn-outline ${loading ? 'btn-disabled' : ''}`}
                                    >
                                        <FcGoogle className='size-5' />
                                        Continue with Google
                                    </button>
                                </form>
                            </div>

                            <div className="w-full h-full flex items-center bg-primary rounded-xl p-8">
                                <img src={signInImage} className="w-full aspect-12/12 object-contain" alt="login-image" />
                            </div>
                        </div>
                    </div>

                </div>
            </MaxWidth >
        </div >
    );
};

export default SignUpPage;