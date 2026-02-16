import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import useAuth from '../hooks/useAuth';
import useCreateUser from '../hooks/queries/users/useCreateUser';

const SignInPage = () => {
    const { signInUser, signInUserWithGoogle } = useAuth()
    const navigate = useNavigate();
    const location = useLocation()
    const { mutate: createUser, isPending } = useCreateUser()


    const handleSignIn = e => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        signInUser(email, password)
            .then((result) => {
                const payload = {
                    name: result?.user?.displayName,
                    email: result?.user?.email,
                    photoUrl: result?.user?.photoURL,
                }
                createUser(payload, {
                    onSuccess: () => {
                        toast.success('Login Successful')
                        navigate(location?.state || '/')
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
                        navigate(location?.state || '/')
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
        <div className="my-10 w-full max-w-md mx-auto space-y-3 border border-base-300 rounded-lg shadow-md p-6 hover:shadow-lg">

            <h1 className="text-2xl font-bold text-center">Sign In</h1>

            <form className="space-y-6" onSubmit={handleSignIn}>
                <div className="space-y-1 text-sm">
                    <label className="block">Email</label>
                    <input
                        name='email'
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="space-y-1 text-sm">
                    <label className="block">Password</label>
                    <input
                        name='password'
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full"
                    />
                    <div className="flex justify-end text-xs">
                        <a className="cursor-pointer hover:underline">
                            Forgot Password?
                        </a>
                    </div>
                </div>

                <input type="submit" className={`btn bg-primary w-full text-white ${isPending && 'btn-disabled'}`} value={'Sign In'} />
            </form>

            <div className="flex items-center pt-4 space-x-2">
                <div className="flex-1 h-px bg-base-300"></div>
                <p className="text-sm">Sign in with Google</p>
                <div className="flex-1 h-px bg-base-300"></div>
            </div>

            {/* Google Button */}
            <div className="flex justify-center">
                <button onClick={handleGoogleSignIn}
                    aria-label="Sign in with Google"
                    className={`btn btn-circle btn-outline hover:text-primary ${isPending && 'btn-disabled'}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        className="w-5 h-5 fill-current"
                    >
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
                    </svg>
                </button>
            </div>

            <p className="text-xs text-center">
                Don’t have an account?
                <Link to={'/sign-up'} className="underline ml-1 hover:text-primary cursor-pointer">
                    Sign Up
                </Link>
            </p>
        </div>

    );
};

export default SignInPage;