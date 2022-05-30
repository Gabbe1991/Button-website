import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


test('For button 1 to respond to click', () => {
  render(<App />);
  const button = screen.getByText(/Button 1/i);
  const text = screen.getByText(/No button clicked yet/i);
  //expect
  fireEvent.click(button);
  //expect the button to respond to click
  expect(text.textContent).toBe('You have clicked "button 1"')
});

test('For button 2 to respond to click', () => {
  render(<App />);
  const button = screen.getByText(/Button 2/i);
  const text = screen.getByText(/No button clicked yet/i);
  //expect
  fireEvent.click(button);
  //expect the button to respond to click
  expect(text.textContent).toBe('You have clicked "button 2"')
});

test('For button 3 to respond to click', () => {
  render(<App />);
  const button = screen.getByText(/Button 3/i);
  const text = screen.getByText(/No button clicked yet/i);
  //expect
  fireEvent.click(button);
  //expect the button to respond to click
  expect(text.textContent).toBe('You have clicked "button 3"')
});

test('For button 4 to respond to click', () => {
  render(<App />);
  const button = screen.getByText(/Button 4/i);
  const text = screen.getByText(/No button clicked yet/i);
  //expect
  fireEvent.click(button);
  //expect the button to respond to click
  expect(text.textContent).toBe('You have clicked "button 4"')
});

//Can add mouseOverEvent instead of Button for change in Orange.
