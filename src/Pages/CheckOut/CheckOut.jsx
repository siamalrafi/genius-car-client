import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const service = useLoaderData();
    const { title, _id, price, service_id, } = service;

    const handlePlaceOrder = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = form.email.value || 'unregistered';
        const massage = form.massage.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            massage,
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                if (order.acknowledged) {
                    alert('thanks for order');
                }
                form.reset();
                console.log(data)
            })
            .catch(error => console.error(error));

    }


    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-2xl text-center py-5">{title}</h2>
                <h2 className="text-2xl text-orange-800 text-center py-5">{price}</h2>
                <div className='  text-center grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input type="text" name='firstName' placeholder="First Name" className="input input-bordered input-secondary w-full " />
                    <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered input-secondary w-full " />

                    <input type="text" name='phone' placeholder="Your phone" className="input input-bordered input-secondary w-full " required />
                    <input type="text" name='email' placeholder="Your email" className="input input-bordered input-secondary w-full " />
                </div>
                <textarea name='massage' className="w-full my-10 h-32  textarea textarea-error" placeholder="Your Massage" required></textarea>

                <button className="btn btn-active btn-secondary">
                    <input type="submit" className='' />
                </button>

            </form>

        </div>
    );
};

export default CheckOut;