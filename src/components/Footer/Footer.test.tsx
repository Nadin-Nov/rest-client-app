import { render, screen } from '@testing-library/react';
import { afterEach, describe, it, expect, vi } from 'vitest';

import Footer from './Footer';

afterEach(() => {
  vi.resetAllMocks();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('Footer component', () => {
  it('should render all authors with correct links and images', () => {
    render(<Footer />);

    const authors = ['27moon', 'Gnarkill', 'Nadin'];
    for (const author of authors) {
      const link = screen.getByRole('link', { name: author });
      expect(link).toHaveAttribute('href', expect.stringContaining('github.com'));
    }

    const images = screen.getAllByRole('img', { name: 'cat' });
    expect(images).toHaveLength(authors.length);

    const rsLogo = screen.getByRole('link', { name: 'RS School' });
    expect(rsLogo).toHaveAttribute('href', 'https://rs.school/courses/reactjs');
    const logoImg = screen.getByRole('img', { name: 'RS School' });
    expect(logoImg).toBeInTheDocument();
  });
});
