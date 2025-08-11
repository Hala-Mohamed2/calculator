import { useState , useEffect } from 'react';
import './Top.css';


const Top = () => {

  const [mode , setMode] = useState(localStorage.getItem("currentMode"));

  useEffect(() => {
    if(mode === "dark"){
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }else{
      document.body.classList.add("dark")
      document.body.classList.remove("light")
    }
  }, [mode])


  return(
    <div className='head'>
      <div className='top'>
        <h3>calc</h3>
        <div className='top-dn'>
          <h6>THEME</h6>
          <div 
          onClick={() => {localStorage.setItem (("currentMode"), mode === "dark" ? "light" : "dark")
            setMode(localStorage.getItem("currentMode"))
          }}
          className='equal'></div>
        </div>
      </div>
      <div className='bottom'></div>
    </div>
  )
}



export default Top;