import { useState } from 'react';
import './Buttons.css';



const Buttons = ({handleClick , handleDel , handleReset , handleEqual}) => {




  return(
    <div className='buttons'>
      <div className='btns'>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={handleDel} className='del'>DEL</button>
      </div>
      <div className='btns'>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
      <div className='btns'>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>
      </div>
      <div className='btns'>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("x")}>x</button>
      </div>
      <div className='btnss'>
        <button onClick={handleReset} className='reset'>RESET</button>
        <button onClick={handleEqual} className='esawy'>=</button>
      </div>
    </div>
  )
}



export default Buttons;