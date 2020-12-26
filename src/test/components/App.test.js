import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';

it('renders the App Component without crashing', () => {
  shallow(<App />);
});
