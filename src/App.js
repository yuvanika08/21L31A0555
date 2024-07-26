import React,{useState} from 'react';
import axios from 'axios';
import './App.css';


function App()
{
  const[numid,setNumid] = useState('e1');
  const[res,setRes] = useState(null);
  const fetNa = async()=>
  {
    try{
      const res1 = await axios.get(`http://localhost:3009/numbers/${numid}`);
      setRes(res1.data);

    }
    catch(error){
      console.log(error);
    }
  };
  return(
    <div className="App">
      <h1>Average Calculator</h1>
      <label htmlFor='numid'>Number Id:</label>
      <select id="numid" value={numid} onChange={(e1)=> setNumid(e1.target.value)}>
      <option value="p1">Prime</option>
      <option value="f1">Fibonacci</option>
      <option value="e1">Even</option>
      <option value="r1">Random</option>
      </select>
      <button onClick={fetNa}>Fetch Numbers</button>
    {res && (
      <div>
      <h2>Response</h2>
      <pre>{JSON.stringify(res,null,2)}</pre>
      </div>
    )}
    </div>

  );












} 
export default App;