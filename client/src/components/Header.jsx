import React, { useState } from 'react';

export default function Header({ arrServers, setArrServers, update, setUpdate }) {

    const check = (e) => {
        console.log(e.target.checked);
        if (e.target.checked) {
            arrServers = arrServers.filter(s=> s.status_server == true)
            setArrServers(arrServers)
            console.log("arrServers",arrServers);
        } else {
            let getAll = async () => {
                const res = await fetch('http://localhost:3000/serversCompanies')
                const data = await res.json()
                console.log(data);
                setArrServers(data)
            }
            getAll()
            console.log("arrServers", arrServers);
            
        }
        setUpdate(!update)
    }

    return (
        <div className='header'>
            <h1>Project servers</h1>
            <label htmlFor='checkbox'>card true:</label>
            <input type="checkbox" id='checkbox' onClick={check}></input>

        </div>
    );
}
