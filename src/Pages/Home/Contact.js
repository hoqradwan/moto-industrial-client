import React from 'react';

const Contact = () => {
    return (
        <div className='px-16 mt-20'>
            <h2 className='text-2xl mb-5'>Contact Us</h2>
            <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs mb-2" />
            <br />
            <input type="text" placeholder="Email Address" class="input input-bordered w-full max-w-xs mb-2" />
            <br />
            <textarea class="textarea textarea-bordered" placeholder="Your Message"></textarea>
          
            <br />
            <button class="btn btn-nutral mb-5">Submit</button>

        </div>
    );
};

export default Contact;