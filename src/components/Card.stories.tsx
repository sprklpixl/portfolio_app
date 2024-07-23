import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Card, { CardProps } from './Card';

export default {
  title: 'Portfolio/Card',
  component: Card,
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://via.placeholder.com/300x200',
  imageAlt: 'Card Image',
  title: 'Project Name',
  textContent: 'This is a description.',
  disabled: false,
  backgroundColor: '#fff',
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const card = canvas.getByText('Project Name').parentElement;

  // Simulate hover
  await userEvent.hover(card);
  await expect(card).toHaveStyle('transform: scale(1.05)');

  // Simulate mouse out
  await userEvent.unhover(card);
  await expect(card).toHaveStyle('transform: scale(1)');
};

export const Hover = Template.bind({});
Hover.args = {
  imageSrc: 'https://via.placeholder.com/300x200',
  imageAlt: 'Card Image',
  title: 'Hover Effect Test',
  textContent: 'This card should scale up on hover.',
  disabled: false,
  backgroundColor: '#fff',
};

Hover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const card = canvas.getByText('Hover Effect Test').parentElement;

  // Simulate hover
  await userEvent.hover(card);
  await expect(card).toHaveStyle('transform: scale(1.05)');

  // Simulate mouse out
  await userEvent.unhover(card);
  await expect(card).toHaveStyle('transform: scale(1)');
};
