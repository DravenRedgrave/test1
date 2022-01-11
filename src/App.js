import React,{useState} from 'react';
import Wave from 'react-wavify'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './Home';
import {CopyToClipboard} from 'react-copy-to-clipboard'
import zero from './assets/pngegg.png'
import Signup from './components/Signup';

function App() {
  const [value, setValue] = useState('')
  const [copie,setCopie] = useState(false)
  return (
    <>
  <center>
  <input
      value={value}
      onChange={({target:{value}}) => setValue(value)}
    />
    <CopyToClipboard text={value} onCopy={()=> setCopie(true)}> 
      <button>Copy to clipboard</button>
    </CopyToClipboard>
    {copie ? <span style={{color:'green'}}>Copy</span>:null}
  </center>
  <div className='container mt-3'>
    <div className='row'>
      <div className='col-md-5'>
        <Signup/>
      </div>
      <div className='col-md-7 my-auto'>
        <img className='img-fluid w-50' src={zero} alt='zeroTwo'/>
      </div>
    </div>
  </div>
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
