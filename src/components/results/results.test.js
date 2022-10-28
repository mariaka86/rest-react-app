import '@testing-library/jest-dom'
import {render,screen} from '@testing-library/react';
import Results from './index';

describe ('Results Component',()=>{
  it ('renders data as expected that is passed from props', ()=>{
    let data= {
      name:"squirtle",
      url:"https://pokeapi.co/api/v2/pokemon/7/"
    };
    render(<Results data ={data}/>)
    let pre = screen.getByTestId('pre-results');

    expect (pre).toHaveTextContent('squirtle')
  });

  it ('renders no data,as expected', ()=>{
    render(<Results/>);
    let pre= screen.getByTestId('pre-results');

    expect(pre).toHaveTextContent('');
  })
})
