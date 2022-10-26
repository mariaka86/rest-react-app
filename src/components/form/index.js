import {useState} from 'react';

import './form.scss';

function Form (props) {
  
  let [method, setMethod] = useState('GET')

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method:method ||'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);
  }
 
  const handleMethod = (e) =>{
    setMethod(e.target.value)
  }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="get" onClick={handleMethod}>GET</span>
            <span id="post" onClick={handleMethod}>POST</span>
            <span id="put" onClick={handleMethod}>PUT</span>
            <span id="delete" onClick={handleMethod}>DELETE</span>
          </label>
        </form>
      </>
    );
  }


export default Form;