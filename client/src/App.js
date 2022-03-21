import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ServerList from './components/ServerList';
import { useState } from 'react';

function App() {

  const [update, setUpdate] = useState(false);
  let [arrServers, setArrServers] = useState([]);

  return (

    <div className="app">
         
      <Header  arrServers={arrServers} setArrServers={setArrServers} setUpdate={setUpdate} update={update}/>
      <ServerList setUpdate={setUpdate} update={update} arrServers={arrServers} setArrServers={setArrServers}/>

    </div>
  );
}

export default App;
