import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [input,setInput] = useState([
    {
      name : '',
      phone : ''
    }
  ])

  const addMore = () => {
    let singleFiled = {name : '',phone : ''};
      let data = [...input,singleFiled];
     setInput(data)
  }

  const deleteData = (index) => {
      let data = [...input];
      data.splice(index,1);
      setInput(data);
  }

  const handleChange = (index,event) => {
      let data = [...input];
      data[index][event.target.name] = event.target.value;
      setInput(data);
  }

  return (
        <center>
          <table border={1}>
              {
                input.map((item,index)=>{
                    return (
                      <tr key={index}>
                        <td>Name :- </td>
                        <td><input name='name' value={input.name} onChange={ (e) => handleChange(index,e) } type='text'/></td>
                        <td>Phone :- </td>
                        <td><input name='phone' value={input.phone} onChange={ (e) => handleChange(index,e) } type='text'/></td>
                        <button onClick={ () => addMore() }>Add more</button>
                        <input onClick={ () => deleteData(index) } type='button' value="remove"/>
                      </tr>
                    )
                })
              }  
          </table>
         
        </center>
  );
}

export default App;