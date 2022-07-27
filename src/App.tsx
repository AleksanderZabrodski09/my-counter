import React, {useEffect, useState} from 'react';
import './App.css';
import {Display} from './Display/Display';


function App() {
  const startCount = 0;
  const maxCount = 7;
  const [count, setCount] = useState(0);

  const insCounter = () => {
    if (count < maxCount) {
      setCount(count + 1)
    }
  }
  const resetCounter = () => {
    setCount(startCount)
  }

  const [value, setValue] = useState<number>(0)

  useEffect(()=>{
    let valueAsString = localStorage.getItem('counterValue')
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString)
      setValue(newValue)
    }
  }, [])

  // useEffect(()=>{
  //   localStorage.setItem('counterValue', JSON.stringify(value))
  // }, [value])


  const onClickHandler = () => {
    localStorage.setItem('counterValue', JSON.stringify(value+1))
    setValue(value + 1)

    // setToLocalStorageHandler()
  }

  // const setToLocalStorageHandler = () => {
  //   localStorage.setItem('counterValue', JSON.stringify(value))
  //   // localStorage.setItem('counterValue+1', JSON.stringify(value + 1))
  // }

  // const getFromLocalHandler = () => {
  //   let valueAsString = localStorage.getItem('counterValue')
  //   if (valueAsString) {
  //     let newValue = JSON.parse(valueAsString)
  //     setValue(newValue)
  //   }
  // }

  // const clearLocalStorageHandler = () => {
  //   localStorage.clear()
  //   setValue(0)
  // }
  //
  // const removeItemFromLocalStorageHandler=()=>{
  //   localStorage.removeItem('counterValue+1')
  // }

  return (
    <div className="App">
      <Display
        count={count}
        insCounter={insCounter}
        resetCounter={resetCounter}
        startCount={startCount}
        maxCount={maxCount}
      />

      <div className='counter2'>
        <h1>{value}</h1>
        <button onClick={onClickHandler} className='button2'>ins</button>
        {/*<button onClick={setToLocalStorageHandler} className='button2'>setToLocalStorage</button>*/}
        {/*<button onClick={getFromLocalHandler} className='button2'>getFromLocal</button>*/}
        {/*<button onClick={clearLocalStorageHandler} className='button2'>clearLocalStorage</button>*/}
        {/*<button onClick={removeItemFromLocalStorageHandler} className='button2'>removeItemFromLocalStorage</button>*/}
      </div>

    </div>
  );
}

export default App;
