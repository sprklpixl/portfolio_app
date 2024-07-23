//import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Text, { TextProps } from './Text';

export default {
  title: 'Portfolio/Text',
  component: Text,
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Sample Title',
  content: 'This is a sample text content.',
};
