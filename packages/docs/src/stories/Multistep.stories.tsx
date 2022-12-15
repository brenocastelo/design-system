import { Box, Multistep, MultistepProps } from '@br-ignite-ui/react';
import { Meta, StoryObj } from '@storybook/react';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';

export default {
  title: 'Form/Multistep',
  component: Multistep,
  args: {
    size: 4,
    currentStep: 2,
  },
  decorators: [
    (Story: () => StoryFnReactReturnType) => {
      return (
        <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<MultistepProps>;

export const Primary: StoryObj<MultistepProps> = {};
