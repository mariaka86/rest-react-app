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
it('Should display error when there has been a bad api call', () => {
  let handleBadApiCall = jest.fn(() => new Error('test'));

  render(<Form handleApiCall={handleBadApiCall} />);
  let button = screen.getByText('GO!');
  expect(button).toBeInTheDocument();
  fireEvent.click(button)                        
  expect(handleBadApiCall).toHaveBeenCalled();      
});

