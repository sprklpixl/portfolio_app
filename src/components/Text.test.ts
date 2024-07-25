import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export const textInteractions = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  const text = canvas.getByText('Project Name');

  // Check text content
  await expect(text).toBeInTheDocument();
};
