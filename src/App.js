import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'


function App() {
  const [ShowData, setShowData] = useState([]);
  const [Field, setField] = useState('');
  const [cond, setcond] = useState('');
  const [val, setval] = useState('');
  
  useEffect(() => {
     
    axios.get('/api').then(
      data => {
        setShowData(data.data);
        console.log(data.data)
      }
    )
  }, [])
  


  const FormSubmit = async (e) =>{
    e.preventDefault();
    setField (e.target.part1.value);
    setcond(e.target.part2.value);
    setval(e.target.part3.value);
    var query ={};
    switch (Field) {
      case "A":
        {
         switch (cond) {
           case "$lte":
             query= {
               A : {$lte : val}
             }
             break;
           case "$eq":
             query= {
               A : {$eq : val}
             }
             break;
           case "$gte":
             query= {
               A : {$gte : val}
             }
             break;
          
           default:
             break;
         }
        break;
        }
      case "B":
        {
          switch (cond) {
            case "$lte":
              query= {
                B : {$lte : val}
              }
              break;
            case "$eq":
              query= {
                B : {$eq : val}
              }
              break;
            case "$gte":
              query= {
                B : {$gte : val}
              }
              break;
           
            default:
              break;
          }
         break;
        }
      case "C":
        {
          switch (cond) {
            case "$lte":
              query= {
                C : {$lte : val}
              }
              break;
            case "$eq":
              query= {
                C : {$eq : val}
              }
              break;
            case "$gte":
              query= {
                C : {$gte : val}
              }
              break;
           
            default:
              break;
          }
         break;
        }
      case "D":
        {
          switch (cond) {
            case "$lte":
              query= {
                D : {$lte : val}
              }
              break;
            case "$eq":
              query= {
                D : {$eq : val}
              }
              break;
            case "$gte":
              query= {
                D : {$gte : val}
              }
              break;
           
            default:
              break;
          }
         break;
        }
      case "E":
        {
          switch (cond) {
            case "$lte":
              query= {
                E : {$lte : val}
              }
              break;
            case "$eq":
              query= {
                E : {$eq : val}
              }
              break;
            case "$gte":
              query= {
                E : {$gte : val}
              }
              break;
           
            default:
              break;
          }
         break;
        }
    
      default:
        break;
    }

    console.log(query);
    axios.post("/api", query).then(
      data => 
      setShowData(data.data),
      query = {}
    )
  }
  

 
  return (
    <div className="App">
          <div className="Filter">
            <form onSubmit={FormSubmit}>
              <div> 
              <select id="part1" >
                <option value="A" defaultValue>2010</option>
                <option value="B">2011</option>
                <option value="C">2012</option>
                <option value="D">2013</option>
                <option value="E">2014</option>
              </select>
              <select id="part2">
                <option value="$lte" defaultValue>{"<="}</option>
                <option value="$gte">{">="}</option>
                <option value="$eq" >{"=="}</option>
              </select>
              <input id="part3" type="integer" ></input>
              </div>
              <button type="submit">Find</button>
            </form>
          </div>
          <table>
             <tr>
               <th>Country</th>
               <th>Code</th>
               <th>2010</th>
               <th>2011</th>
               <th>2012</th>
               <th>2013</th>
               <th>2014</th>
             </tr>
        {
               ShowData.map(data =>  

                      <tr>
                        <td>{data.Name}</td>
                        <td>{data.Code}</td>
                        <td>{data.A}</td>
                        <td>{data.B}</td>
                        <td>{data.C}</td>
                        <td>{data.D}</td>
                        <td>{data.E}</td>
                      </tr>

               )
            
             }
          </table>
    </div>
  );
}

export default App;
