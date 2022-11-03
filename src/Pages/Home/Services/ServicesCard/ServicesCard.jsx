import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ServicesCard = ({ service }) => {
    const {_id, img, title, price } = service;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-2xl text-orange-600 font-bold'>$ {price}</p>
                    <div className="card-actions justify-end">
                       <Link to={`checkout/${_id}`}>
                       <button className="btn btn-white">
                            <FaLongArrowAltRight />
                        </button>
                       </Link>
                    </div>
                </div>
 
            </div>

        </div >
    );
};

export default ServicesCard;