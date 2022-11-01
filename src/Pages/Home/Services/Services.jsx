import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard/ServicesCard';


const Services = () => {
    const [services, setServicess] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServicess(data))
    }, [])




    return (
        <div>
            <div className='text-center mb-4'>
                <p className='text-2xl text-orange-600 font-bold '>Services</p>
                <p className='text-5xl font-semibold'>Our Service Area</p>
                <p>
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

                </p>
            </div>
            <h1>{services.length}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <ServicesCard
                        service={service}
                        key={service._id}>

                    </ServicesCard>)
                }
            </div>
            <div className='text-center py-5'>
                <button className="btn btn-outline  btn-secondary">
                    <b className='text-orange-600'> More Services</b></button>

            </div>



        </div>
    );
};

export default Services;