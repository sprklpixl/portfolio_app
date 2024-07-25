import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export const buttonInteractions = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText('Submit');

  // Simulate button click
  await userEvent.click(button);
  await expect(button).toHaveTextContent('Submit');
};
