import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export const imageInteractions = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  const image = canvas.getByRole('img');

  // Check image src
  await expect(image).toHaveAttribute('src', 'https://via.placeholder.com/300x200');
};
