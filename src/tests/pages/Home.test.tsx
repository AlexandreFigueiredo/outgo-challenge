import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import { Home } from '../../pages/Home/Home';

test("renders 'Welcome to the Warehouse' title", () => {
  render(<Home />);
  const headerTitle = screen.getByText(/FilmKu/i);
  expect(headerTitle).toBeInTheDocument();
});
