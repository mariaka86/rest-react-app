import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import {useState,useEffect} from 'react';
import axios from 'axios';


const App = ()=> {


  const[data, setData] = useState(null);
  const [requestParams,setRequestParams]= useState({});
  const [headers,setHeaders]= useState(null);
    
  useEffect(()=>{
    console.log('userEffect hook')
  })
  
  const callApi = async (requestParams)=> {
    // mock output
   let newData = await axios.get('https://pokeapi.co/api/v2/pokemon')

   setData(newData.data.results);
   setRequestParams(requestParams);
   setHeaders(newData.headers);
  }

    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} headers={headers} />
        <Footer />
      </React.Fragment>
    );
  
}


export default App;