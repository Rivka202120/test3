import React, { useState } from 'react';

export default function ServerCard({ server, setUpdate }) {

    const [toggle, setToggle] = useState(false);

    const checkToggle = async (e, toggle) => {
        console.log(toggle);
        const res = await fetch(`http://localhost:3000/servers/${server.id}`, {
            method: 'put'
        })
        const data = await res.json()
        console.log("server", server);
        setUpdate(up => !up)
        console.log("data", data);
        console.log("toggle", toggle);
        if (!server.server_status) {
            console.log('no');
        } else {
            console.log('yes');
        }

    }

    const checkToggle1 = async () => {
        const res = await fetch(`http://localhost:3000/servers/${server.id}`, {
            method: 'put'
        })
        const data = await res.json()
        setUpdate(up => !up)
        console.log(data);
        if (!server.server_status) {
            console.log('no');
        } else {
            console.log('yes');
        }
    }


    return (
        <div className='card'>
            <div className='singelServer'>
                <h2>{server.name_server}</h2>
                <br />
                <p>{server.ip_server}</p>
                <br />
                <p>{server.name_company}</p>
                <br />
                <label className="switch">
                    <input type="checkbox" onChange={e => setToggle(e.target.value)}
                        onClick={(e) => checkToggle(e, toggle)} checked={server.status_server}></input>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
}
