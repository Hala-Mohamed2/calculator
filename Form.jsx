import './Form.css';


const Form = ({display}) => {
  return(
  <div className='form'>
    <form>
      <input type="text" value={display} readOnly/>
    </form>
  </div>
  )
}



export default Form;