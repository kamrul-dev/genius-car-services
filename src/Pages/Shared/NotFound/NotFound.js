import React from 'react';
import notFound from '../../../images/404page.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Result Not Found !</h2>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;