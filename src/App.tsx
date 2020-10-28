import React, { useState, useCallback } from 'react';
import './App.css';
import { LaunchList } from './components/LaunchList';
import { LaunchProfile } from './components/LaunchProfile';

const App = () => {
  const [id, setId] = useState<number>(1);
  const handleIdChange = useCallback(
    (newId) => {
      setId(newId);
    },
    [],
  )

  return (
    <div className='App'>
      <LaunchList handleIdChange={handleIdChange}/>
      <LaunchProfile id={id}/>
    </div>
  );
}

export default App;
