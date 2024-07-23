//import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './RadioButton';

export default {
  title: 'Portfolio/RadioButton',
  component: RadioButton,
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Sample Radio',
  name: 'sample-radio',
  value: 'sample',
  checked: false,
  onChange: () => alert('Radio button clicked!'),
  disabled: false,
};
