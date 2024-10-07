import React, { useEffect, useState } from 'react'
import './Timer.css'


export const Timer = () => {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='timerDiv'>
      <h2>RELOJ: {date.toLocaleTimeString()}</h2>
    </div>
  );
};