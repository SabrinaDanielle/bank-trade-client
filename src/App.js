import {useEffect, useState} from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [tables, setTables] = useState({});

  useEffect(() => {
   Axios.get('http://localhost:5000/tables')
     .then(response=>{
        setTables(response.data);
     });

    return () => {
      Axios.Cancel();
    };
  }, []);

  return (
    !tables ?
    <p>Loading Tables</p> :
    <div className="App">
     <h1> I'm not done, I need some time </h1>
      {tables}
    </div>
  );
}

export default App;
