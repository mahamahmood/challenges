import React, { useState, useEffect } from 'react';
import Daters from './components/Hello.js';
import axios from 'axios';

function App() {
  const [daters, setDaters] = useState([]);
  const [formInputs, updateFormInputs] = useState({
    name: '',
    age: '',
    starsign: '',
    img: ''
  });

  const getDaters = async () => {
    try {
      const response = await fetch('http://localhost:3000/users');
      const daters = await response.json();
      console.log(daters);
      setDaters(daters)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(
    ()=>{
      const callDaters = async ()=> {
        await getDaters();
      }
      callDaters();
    },[]
  );

  const handleChange = (event) => {
    const updatedFormInputs = Object.assign({}, formInputs, { [event.target.id]: event.target.value})
    updateFormInputs(updatedFormInputs);
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/users',
        formInputs
      );
      const createdDater = response.data
      await updateFormInputs({
        name: '',
        age: '',
        starsign: '',
        img: ''
      })
      await setDaters([createdDater, ...daters])
    }catch(error){
      console.error(error)
    }
  }

  return (
    <div className="App">
      <div className="main-header">
          <h1>Dating App</h1>
        </div>
      <div className="container">
        <div className="left-side">
          <Daters daters={daters}/>
        </div>
        <div className="main">
          <main><h3>main section goes here</h3></main>
        </div>
        <div className="right-side">
          <Daters daters={daters}/>
        </div>
      </div>
      <div className="footer">
          <footer>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="name"
                onChange={handleChange}
                value={formInputs.name}
                placeholder="name"
              />
              <input
                type="text"
                id="age"
                onChange={handleChange}
                value={formInputs.age}
                placeholder="age"
              />
              <input
                type="text"
                id="starsign"
                onChange={handleChange}
                value={formInputs.starsign}
                placeholder="starsign"
              />
              <input
                type="text"
                id="img"
                onChange={handleChange}
                value={formInputs.img}
                placeholder="img"
              />
              <input type="submit" />
            </form>
          </footer>
      </div>
    </div>
  );
}

export default App;
