import { Text, TextProps } from '@ignite-ui/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, nisi suscipit. Placeat sapiente, amet, laborum facere sed at illo explicabo obcaecati necessitatibus cumque similique voluptate fuga quod nemo perspiciatis eveniet?',
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
};
