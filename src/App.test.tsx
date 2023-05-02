import { render, screen, } from '@testing-library/react';
import '@testing-library/jest-dom'
import * as React from 'react';
import Page from './components/Page';

test('displays champion tier list by default', () => {
  render(<Page />);
  const earlyStage = screen.getByText('Early');
  const midStage = screen.getByText('Mid');
  const lateStage = screen.getByText('Late');
  expect(earlyStage).toBeInTheDocument();
  expect(midStage).toBeInTheDocument();
  expect(lateStage).toBeInTheDocument();
});