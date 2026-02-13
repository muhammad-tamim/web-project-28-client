import React from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import { imageUpload } from '../api/utils';

const SignUpPage = () => {
    const navigate = useNavigate();
    const { signUpUser, signInUserWithGoogle, setUser, updateUserInfo } = useAuth()

    const handleSignUp = async (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const image = e.target.image.files[0]
        const imageUrl = await imageUpload(image)
        const email = e.target.email.value
        const password = e.target.password.value

        signUpUser(email, password)
            .then((result) => {
                toast.success('Sign Up Successful')
                const user = result.user

                updateUserInfo({ displayName: name, photoURL: imageUrl })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: imageUrl })
                        navigate('/')
                    })
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        signInUserWithGoogle()
            .then(() => {
                toast.success('SignIn Successful')
                navigate('/')
            })
            .catch((error) => {
                toast.error(error.message)
            });
    }

    return (
        <div className="my-10 w-full max-w-md  space-y-3 border border-white rounded-lg shadow-md p-4  mx-auto hover:shadow-lg">
            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handleSignUp} className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block ">Your Name</label>
                    <input type="text" name="name" required id="userName" placeholder="Name" className="outline w-full px-4 py-3 rounded-md" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block ">Photo URL</label>
                    <input type="file" name="image" required id="userImage" className="file-input file-input-ghost w-full" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block ">Email</label>
                    <input type="email" name="email" required id="userEmail" placeholder="Email" className="outline w-full px-4 py-3 rounded-md" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block ">Password</label>
                    <input type="text" name="password" required id="password" placeholder="Password" className="outline w-full px-4 py-3 rounded-md" />
                    <small className="text-xs">Password must contain at least 6 characters, 1 uppercase and 1 lowercase letter.</small>
                </div>
                <button type='submit' className="btn bg-primary w-full text-white">Sign Up</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16"></div>
                <p className="px-3 text-sm">SignUp with Google</p>
                <div className="flex-1 h-px sm:w-16"></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current hover:text-primary">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                </button>
            </div>
            <p className="text-xs text-center sm:px-6">Already have an account?
                <Link to="/sign-in" rel="noopener noreferrer" href="#" className="underline ml-1 hover:text-primary">Sign In</Link>
            </p>
        </div>
    );
};

export default SignUpPage;