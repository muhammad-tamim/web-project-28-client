import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const Form = () => {
    return (
        <form className='space-y-10'>
            <div className="grid md:grid-cols-2 gap-6">

                <div className='space-y-2 text-secondary'>
                    <label className="text-sm block text-secondary font-medium">Name</label>
                    <input type="text" className='input w-full input-primary focus:outline-none bg-base-300' />
                </div>
                <div className='space-y-2 text-secondary'>
                    <label className="text-sm block text-secondary font-medium">Photo URL</label>
                    <input type="url" className='input w-full input-primary focus:outline-none bg-base-300' />
                </div>
                <div className='space-y-2 text-secondary'>
                    <label className="text-sm block text-secondary font-medium">Model</label>
                    <input type="text" className='input w-full input-primary focus:outline-none bg-base-300' />
                </div>
                <div className='space-y-2 text-secondary'>
                    <label className="text-sm block text-secondary font-medium">Year</label>
                    <input type="text" className='input w-full input-primary focus:outline-none bg-base-300' />
                </div>
                <div className='space-y-2 text-secondary'>
                    <label className="text-sm block text-secondary font-medium">Brand</label>
                    <select defaultValue="Pick a color" className="select w-full select-primary focus:outline-none bg-base-300">
                        <option disabled={true}>Pick a Brand</option>
                        <option>Crimson</option>
                        <option>Amber</option>
                        <option>Velvet</option>
                    </select>
                </div>
                <div className='space-y-2 text-secondary'>
                    <label className="text-sm block text-secondary font-medium">Category</label>
                    <select defaultValue="Pick a color" className="select w-full select-primary focus:outline-none bg-base-300">
                        <option disabled={true}>Pick a Category</option>
                        <option>Crimson</option>
                        <option>Amber</option>
                        <option>Velvet</option>
                    </select>
                </div>
                <div className='space-y-2 text-secondary'>
                    <label className="text-sm block text-secondary font-medium">Registration Number</label>
                    <input type="text" className='input w-full input-primary focus:outline-none bg-base-300' />
                </div>
                <div className='space-y-2 text-secondary'>
                    <label className="text-sm block text-secondary font-medium">Daily Rental Price</label>
                    <input type="number" className='input w-full input-primary focus:outline-none bg-base-300' placeholder='$' />
                </div>
                <div className='space-y-2 col-span-2 text-secondary'>
                    <label className="text-sm block text-secondary font-medium">Features</label>
                    <textarea className='textarea w-full input-primary focus:outline-none bg-base-300' placeholder='comma separated'></textarea>
                </div>
                <div className='space-y-2 col-span-2 text-secondary'>
                    <label className="text-sm block text-secondary font-medium">Description</label>
                    <textarea className='textarea w-full input-primary focus:outline-none bg-base-300'></textarea>
                </div>

            </div>

            <div className='flex justify-center'>
                <button type='submit' className='btn btn-primary rounded-full btn-xl text-black/80 px-12 font-normal hover:-translate-y-1 duration-200 transition'>Submit</button>
            </div>

        </form>
    );
};

export default Form;