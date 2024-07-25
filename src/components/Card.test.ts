import { render } from '@testing-library/react';
import Card from './Card';
import { cardInteractions } from './Card.lib';

test('Card interactions', async () => {
  const { container } = render(
    <Card
      imageSrc="https://via.placeholder.com/300x200"
      imageAlt="Card Image"
      title="Project Name"
      textContent="This is a description."
      backgroundColor="#fff"
    />
  );
  await cardInteractions(container);
});
