import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

test('Renders page title', () => {
  const { getByText } = render(<App />);
  const title = getByText(/upload a file to firebase cloud storage/i);
  expect(title).toBeInTheDocument();
});

describe('Uploader form', () => {
  it('should render an input of type file', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('input[type="file"]')).toHaveLength(1);
  });
});
