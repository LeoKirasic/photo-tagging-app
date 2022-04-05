import LeaderboardList from '../components/LeaderboardList';
import { render, screen } from '@testing-library/react';

const items = [{ name: 'Leo K.', time: '5' }];

test('Renders LeaderboardList component with appropriate items', () => {
  render(<LeaderboardList items={items} />);
  const linkElement = screen.getByText('Leo K.');
  expect(linkElement).toBeInTheDocument();
});
