import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('addition', () => {
    it('knows that 2 and 7 make 4', () => {
      expect(2 + 2).toBe(4);
    })
  })
