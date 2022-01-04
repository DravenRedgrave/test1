import React from 'react';
import Wave from 'react-wavify'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './Home';

function App() {
  return (
    <>
    <h1 className='text-center text-info mt-3'>Password</h1>
    <Home/>
    <div className='App'>
      <Wave
        fill='#1277b0'
        paused={false}
        options={{
          heigth:80,
          amplitud:40,
          speed:0.20,
          points:8
        }}
      />
    </div>
    </>
  );
}

export default App;
