import React from 'react';
import Client from './Client';
import './ClientsList.css';

function ClientsList({ clients }) {
    return (
        <div className='clients__inblock'>
            {
                clients.map((client, i) => {
                    return (
                        <div className='clients__inlist'>
                            <div className='clients__list'>
                                <Client
                                    key={i} 
                                    id={clients[i].id} 
                                    firstName={clients[i].firstName} 
                                    lastName={clients[i].lastName} 
                                    address={clients[i].address} 
                                    phoneNumber={clients[i].phoneNumber} 
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ClientsList;