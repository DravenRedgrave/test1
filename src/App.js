import React from 'react';
import Wave from 'react-wavify'
import './App.css';

function App() {
  return (
    <>
    <div className='App'>
      <Wave
        fill='#1277b0'
        paused={false}
        options={{
          heigth:80,
          amplitude:40,
          speed:0.20,
          points:8
        }}
      />
    </div>
    </>
  );
}

export default App;
