import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';


const ServicesCard = ({ service }) => {
    const { img, title, price } = service;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-2xl text-orange-600 font-bold'>$ {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-white">
                            <FaLongArrowAltRight />
                        </button>
                    </div>
                </div>
 
            </div>

        </div >
    );
};

export default ServicesCard;