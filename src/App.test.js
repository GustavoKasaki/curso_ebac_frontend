import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Main component Tests', () => {
  test('Should render correctly', () => {
    render(<App />)
    expect(screen.getByText('Register')).toBeInTheDocument()
  })

  test('Should add "Study React" on the list', () => {
    render(<App />)
    fireEvent.change(screen.getByTestId('task-field'), {
      target: {
        value: 'Study React'
      }
    })
    fireEvent.click(screen.getByTestId('task-btn'))
    expect(screen.getByText('Study React')).toBeInTheDocument()
  })
})