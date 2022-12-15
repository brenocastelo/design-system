import { Heading, HeadingProps } from '@br-ignite-ui/react';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, the Heading component is an h2, but it can be used as any other heading tag by passing the desired heading tag to the as props',
      },
    },
  },
};
