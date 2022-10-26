import '@testing-library/jest-dom'
import {render,screen,fireEvent} from '@testing-library/react';
import Form from'./index';

describe('Form Component',()=>{
  it ('calls the handleApi function',()=>{
    let handleApiCall = jest.fn();
    render(<Form handleApiCall={handleApiCall}/>);
    let button = screen.getByText('GO!');
    fireEvent.click(button);

    expect(handleApiCall).toHaveBeenCalled();
  })
})
