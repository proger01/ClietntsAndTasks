import React from 'react';
import './Client.css';

function Client(props) {
    return (
        <div className='client__card'>
            <img src={`https://robohash.org/${props.id}`} alt='clients' width='120' height='120' />
            <h3 className='clients__fname'>{props.firstName}</h3>
            <h3 className='clients__lname'>{props.lastName}</h3>
            <p className='clients__adress'>{props.address}</p>
            <p className='clients__phn'>{props.phoneNumber}</p>
        </div>
    )
}

export default Client;