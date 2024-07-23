// import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Portfolio/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Submit',
  //backgroundColor: '#007bff',
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByText('Submit') as HTMLElement;
  await userEvent.click(button);
  await expect(button).toHaveTextContent('Submit');
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Submit',
  disabled: true,
  //backgroundColor: '#007bff',
};
