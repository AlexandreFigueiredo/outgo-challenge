import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import { PlayButton } from '../../components/PlayButton/PlayButton';

test("Render PlayButton component, and show the text Play Trailer", () => {
  render(<PlayButton />);
  const playButtonText = screen.getByText(/Play Trailer/i);
  expect(playButtonText).toBeInTheDocument();
});