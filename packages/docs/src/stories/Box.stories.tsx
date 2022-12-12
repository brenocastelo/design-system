import { Box, BoxProps } from '@ignite-ui/react';
import { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Box component children</span>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
