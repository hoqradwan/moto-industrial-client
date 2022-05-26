import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3N1qJawf87TXhh7LMGSMKoDkNByog9LWcP3IgKTc2eUSruQo9JpGdKGBSxHSJTBOJm04WHeuIJYWw7DksVQowE00WLgYkkxc');

const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({})
    useEffect(()=>{
        const url = `https://still-lowlands-64974.herokuapp.com/orders/${id}`;
        fetch(url).then(res => res.json())
         .then(data => setOrder(data));
    },[id])
  
    return (
        <div>
            <div class="card w-96 bg-neutral text-white my-4">
                <div class="card-body">
                    <p className='font-bold text-orange-500'>Hello,{order.customer}</p>
                    <h2 class="card-title">pay for {order.name}</h2>
                    <p>please pay: $<span className='text-green-300'>{order.price}</span></p>
                </div>
            </div>
            <div className='card-flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mt-5'>
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;



