import { Text, TextProps } from '@br-ignite-ui/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, nisi suscipit. Placeat sapiente, amet, laborum facere sed at illo explicabo obcaecati necessitatibus cumque similique voluptate fuga quod nemo perspiciatis eveniet?',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
};
