import React from 'react';

const ContactForm = () => {
    return (
        <form className='space-y-5'>
            <div className='flex flex-col md:flex-row items-center gap-5'>
                <input type="text" className='input w-full input-xl rounded-full input-primary focus:outline-none text-sm px-6' placeholder='Your Name*' />
                <input type="text" className='input w-full input-xl rounded-full input-primary focus:outline-none text-sm px-6' placeholder='Your Name*' />
            </div>
            <div className='flex flex-col md:flex-row items-center gap-5'>
                <input type="text" className='input w-full input-xl rounded-full input-primary focus:outline-none text-sm px-6' placeholder='Your Name*' />
                <input type="text" className='input w-full input-xl rounded-full input-primary focus:outline-none text-sm px-6' placeholder='Your Name*' />
            </div>
            <div>
                <textarea className='textarea w-full rounded-full input-primary focus:outline-none text-sm px-6' placeholder='Message*'></textarea>
            </div>
            <div>
                <button type='submit' className='w-full btn btn-primary rounded-full btn-xl text-sm text-black/80 px-12 font-normal hover:-translate-y-1 duration-200 transition'>Submit</button>
            </div>
        </form>
    );
};

export default ContactForm;