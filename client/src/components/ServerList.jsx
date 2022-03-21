import React, { useEffect, useState } from 'react';
import ServerCard from './ServerCard';

export default function ServerList({ update, setUpdate ,setArrServers, arrServers}) {


    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3000/serversCompanies')
            const data = await res.json()
            console.log(data);
            setArrServers(data)
        })()
    }, [update]);


    return (
        <div className='List'>
            {
                arrServers.map(server => <ServerCard key={server.id} server={server} setUpdate={setUpdate} />)
            }
        </div>
    );
}
