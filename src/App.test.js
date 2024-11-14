import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting message', () => {
  render(<App />);
  // Проверка правильного текста
  const linkElement = screen.getByText(/Каличенок Сергей Николаевич/i);
  expect(linkElement).toBeInTheDocument();
});
