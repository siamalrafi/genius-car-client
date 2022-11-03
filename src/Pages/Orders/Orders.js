import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/UserContext/UserContext';
import OrdersRow from './OrdersRow';

const Orders = () => {
    const { user } = useContext(AuthContext);
    // const [orders, setOrders] = useState({})
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email]);

    return (


        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrdersRow
                            key={order._id}
                            order={order}
                        ></OrdersRow>)
                    }
                </tbody>

            </table>
        </div>

    );
};

export default Orders;