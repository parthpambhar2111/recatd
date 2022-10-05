// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [phone, setphone] = useState("");
  const [id, setid] = useState(""); 

  const [arr, setArr] = useState([]);

  const Submit = () =>{
     
    
    
    const obj ={
      'name' : name ,
      'phone': phone, 
      'id': id,
      
    }
    setArr([...arr,obj ])
  }

  return (
    
    <div className="App">
    
     Name:
     <input type="text" id="" value={name} onChange={(e)=> {setName(e.target.value)}} /><br></br>
     Phone  No:
     <input type="text" id="" value={phone} onChange={(e)=> {setphone(e.target.value)}}/><br></br>
     Email id:
     <input type="text" id="" value={id} onChange={(e)=> {setid(e.target.value)}} /><br></br>
     <button onClick={Submit} value={Submit}>Submite</button>

      <table border="">
        <tr>
          <th>Name</th>
          <th>Email id</th>
          <th>Phone no</th>
        </tr>
        {
              arr.map((item)=>{
                return(
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.id}</td>
                    <td>{item.phone}</td>
                  </tr>
                )
              })
        }
      </table>
    </div>
    
  );
}

export default App;
