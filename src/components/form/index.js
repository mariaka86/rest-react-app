import {useState} from 'react';

import './form.scss';

function Form (props) {
  
  const [method, setMethod] = useState('')
  const [url,setUrl] =useState('https://pokeapi.co/api/v2/pokemon')
  const[JSON,setJSON]= useState();

  const handleSubmit = e => {
    e.preventDefault();
   
    props.handleApiCall({method,url,JSON})
  }
 
 

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input onChange = {(e)=>setUrl(e.target.value)} name='url' type='text' />
            <button type="submit">GO!</button>
          </label>

          <textarea className ="text-input"onChange = {(e)=>setJSON(e.target.value)} placeholder='Put/Post input' type='text'/>
          
          <label className="methods">
            <span id="get" onClick={(e)=> setMethod('get')}>GET</span>
            <span id="post" onClick={(e)=> setMethod('post')}>POST</span>
            <span id="put" onClick={(e)=> setMethod('put')}>PUT</span>
            <span id="delete" onClick={(e)=> setMethod('delete')}>DELETE</span>
          </label>
        </form>
      </>
    );
  }


export default Form;