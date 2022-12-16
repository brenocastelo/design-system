import { StoryObj, Meta } from '@storybook/react';
import {
  Box,
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from '@br-ignite-ui/react';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    triggerComponent: <button>tooltip</button>,
    children: 'Disponível',
  },
  decorators: [
    (Story: () => StoryFnReactReturnType) => {
      return (
        <Box
          css={{
            height: '$20',
            width: '$20',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '$gray200',
          }}
        >
          <TooltipProvider>{Story()}</TooltipProvider>
        </Box>
      );
    },
  ],
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {
  args: {
    arrow: 'top',
  },
};

export const NoArrow: StoryObj<TooltipProps> = {};
