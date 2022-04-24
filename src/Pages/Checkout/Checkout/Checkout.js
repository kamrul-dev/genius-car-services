import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user, setUser] = useState({
        name: 'Kamrul',
        email: 'kamrul@gmail.com',
        address: 'Uttara, Dhaka',
        phone: '0175555555'
    });

    const handleAddressChange = event => {
        console.log(event.target.value);
        const {address, ...rest} = user;
        const newAddress = event.target.value;
        const newUser = {address: newAddress, ...rest}
        console.log(newUser);
        setUser(newUser)
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name}</h2>
            <form>
                <input className='w-100 mb-2' type="text" value={user.name} name='name' placeholder='Name' required />
                <br />
                <input className='w-100 mb-2' type="email" value={user.email} name='email' placeholder='Email' required />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name='service' placeholder='Service Name' required />
                <br />
                <input className='w-100 mb-2' onChange={handleAddressChange} type="text" value={user.address} name='address' placeholder='Address' required />
                <br />
                <input className='w-100 mb-2' type="text" value={user.phone} name='phone' placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value='Place Order' />
            </form>
        </div>
    );
};

export default Checkout;