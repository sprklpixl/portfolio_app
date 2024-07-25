import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export const radioButtonInteractions = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  const radioButton = canvas.getByRole('radio');

  // Simulate radio button click
  await userEvent.click(radioButton);
  await expect(radioButton).toBeChecked();
};
