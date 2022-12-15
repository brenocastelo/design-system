import { Box, Text, TextArea, TextAreaProps } from '@br-ignite-ui/react';
import { Meta, StoryObj } from '@storybook/react';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story: () => StoryFnReactReturnType) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Message:</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
    value: '',
    placeholder: '',
  },
};
