import '@testing-library/jest-dom'
import {render,screen} from '@testing-library/react';
import Results from './index';

describe ('Results Component',()=>{
  it ('renders data as expected that are passed from props', ()=>{
    let data= {
      results:'results'
    }
    render(<Results data ={data}/>)
    let pre=screen.getByTestId('pre-results');

    expect (pre).toHaveTextContent('results')
  });
  it ('renders no data,as expected', ()=>{
    render(<Results/>);
    let pre= screen.getByTestId('pre-results');

    expect(pre).toHaveTextContent('');
  })
})
