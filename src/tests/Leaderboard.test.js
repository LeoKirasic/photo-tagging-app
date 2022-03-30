import { render, screen, waitFor } from '@testing-library/react';
import Leaderboard from '../components/Leaderboard';

test('Render Leaderboard loading screen', () => {
  render(<Leaderboard />);
  const linkElement = screen.getByText('Loading...');
  expect(linkElement).toBeInTheDocument();
});

test('Renders Leaderboard component with data fetched', async () => {
  render(<Leaderboard />);
  expect(
    await waitFor(() => screen.getByText('Leaderboard'), { timeout: 3000 })
  ).toBeInTheDocument();

  screen.debug();
});
