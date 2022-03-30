import { render, screen } from '@testing-library/react';
import LeaderboardLayout from '../components/layout/LeaderboardLayout';

test('Render LeaderboardLayout component', () => {
  render(<LeaderboardLayout />);
  const linkElement = screen.getByText('Loading...');
  expect(linkElement).toBeInTheDocument();
});
