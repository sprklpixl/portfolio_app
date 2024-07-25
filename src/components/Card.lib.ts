import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export const cardInteractions = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  const card = canvas.getByText('Project Name').parentElement;

  // Simulate hover
  await userEvent.hover(card);
  await expect(card).toHaveStyle('transform: scale(1.05)');

  // Simulate mouse out
  await userEvent.unhover(card);
  await expect(card).toHaveStyle('transform: scale(1)');
};
