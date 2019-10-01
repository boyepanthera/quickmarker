import React from 'react';
import './App.css';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Editor from './Editor';
import {useSpring, animated} from 'react-spring';
import FileRobotEditor from './FilerobotEditor';

function App() {
  return (
    <>
    <div className='container'>
      <div  className='display-4'>Watermark pictures with ease.</div>
      {/* <Editor/> */}
      <FileRobotEditor/>
    </div>
     
    </>
  );
}


export default App;
