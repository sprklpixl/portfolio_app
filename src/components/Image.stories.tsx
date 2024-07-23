//import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Image, { ImageProps } from './Image';

export default {
  title: 'Portfolio/Image',
  component: Image,
} as Meta;

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/300x200',
  alt: 'Sample Image',
  borderRadius: '8px',
};
