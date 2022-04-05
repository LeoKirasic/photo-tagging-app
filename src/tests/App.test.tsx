import { render, screen } from '@testing-library/react';
import App from '../App';
import Modal from 'react-modal';

test('renders main layout', () => {
  render(<App />);
  Modal.setAppElement(document.getElementById('root') as any);

  const linkElement = screen.getByText('Waldo');
  expect(linkElement).toBeInTheDocument();
});
