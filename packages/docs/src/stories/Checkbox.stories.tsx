import { StoryObj, Meta } from '@storybook/react';
import { Box, Checkbox, CheckboxProps, Text } from '@br-ignite-ui/react';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story: () => StoryFnReactReturnType) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
