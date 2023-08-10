import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [input, setInput] = useState([
    {
      name: '',
      phone: '',
      email: ''
    }
  ])

  const addMore = () => {
    let singleFiled = { name: '', phone: '', email: '' };
    let data = [...input, singleFiled];
    setInput(data)
  }

  const deleteData = (index) => {
    let data = [...input];
    data.splice(index, 1);
    setInput(data);
  }

  const handleChange = (index, event) => {
    let data = [...input];
    data[index][event.target.name] = event.target.value;
    setInput(data);
  }

  return (
    <center>
      <h1 className='mb-5'>Dynamic table</h1>
      <table bgcolor='#CBC3E3'>
        <thead>
          <tr>
            <td className='mb-5'><FontAwesomeIcon icon={faUser} />
              <span className='span'>Name</span>  </td>
            <td><FontAwesomeIcon icon={faEnvelope} /><span className='span'>Email</span></td>
            <td>  <FontAwesomeIcon icon={faPhone} /><span className='span'>Phone</span> </td>
            <button className='btn1' onClick={() => addMore()}>    <FontAwesomeIcon icon={faPlus} /></button>

          </tr>
          <hr></hr>
        </thead>
        {
          input.map((item, index) => {
            return (
              <tbody>
                <tr key={index}>

                  <td><input name='name' value={input.name} onChange={(e) => handleChange(index, e)} type='text' /></td>

                  <td><input name='email'  value={input.email} onChange={(e) => handleChange(index, e)} type='text' /></td>

                  <td><input name='phone' value={input.phone} onChange={(e) => handleChange(index, e)} type='text' /></td>
                  <button  className='btn2' onClick={() => deleteData(index)}><FontAwesomeIcon icon={faTimes} /></button>

                </tr>
              </tbody>
            )
          })
        }
      </table>

    </center>
  );
}

export default App;