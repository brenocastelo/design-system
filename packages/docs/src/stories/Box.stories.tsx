import { Box, BoxProps, Text } from '@ignite-ui/react';
import { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'Surface/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Box component children</Text>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};