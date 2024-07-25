import { render } from '@testing-library/react';
import Image from './Image';
import { imageInteractions } from './Image.lib';

test('Image interactions', async () => {
  const { container } = render(<Image src="https://via.placeholder.com/300x200" alt="Card Image" />);
  await imageInteractions(container);
});
