import { render } from '@testing-library/react';
import Button from './Button';
import { buttonInteractions } from './Button.lib';

test('Button interactions', async () => {
  const { container } = render(<Button label="Submit" backgroundColor="#007bff" />);
  await buttonInteractions(container);
});
