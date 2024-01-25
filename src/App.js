import React, {useState, useEffect } from 'react';
import './App.css';
import Bar from './Bar';

const App = () => {
 const [inputtext, setInputtext] = useState("");
 const api = "";
 const debouncer = (func, delay) => {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
 return <>
    <Bar/>
    <input text = {inputtext}         onChange={(e) => {
          setInputtext(e.target.value);
          debouncer(e.target.value);
        }} />
  </>
};


export default App;
