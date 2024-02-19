import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import hrimg from '../images/pattern-divider-desktop.svg';
import hrimgmobile from '../images/pattern-divider-mobile.svg';
import dice from '../images/icon-dice.svg';
import './App.css';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); 
  const [advice, setAdvice] = useState(null);

  const fetchAdvice = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('https://api.adviceslip.com/advice', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAdvice(result);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchAdvice();
  }, []);


  return (
    <>
      <main>
        <div className='container'>
          <h4 className='api-head'>Advice # {advice && advice.slip && advice.slip.id}</h4>
          <h1 className='api-text'>{advice && advice.slip && advice.slip.advice}</h1>
          <img src={windowWidth > 768 ? hrimg : hrimgmobile} alt="" className='hr-img' />
          <div onClick={() => fetchAdvice()} className='api-btn' style={{backgroundImage:`url(${dice})`}}>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
