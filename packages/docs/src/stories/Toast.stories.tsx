import { StoryObj, Meta } from '@storybook/react';
import {
  Box,
  Toast,
  ToastProvider,
  ToastProps,
  ToastViewport,
} from '@br-ignite-ui/react';
import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';
import { useState } from 'react';

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
  },
  decorators: [
    (Story: () => StoryFnReactReturnType) => {
      return (
        <Box
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '$gray200',
          }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<ToastProps>;

export const Primary = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Toast!</button>
      <ToastProvider swipeDirection="left" duration={5000}>
        <Toast
          title="Agendamento realizado"
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          Quarta-feira, 23 de Outubro às 16h
        </Toast>
        <ToastViewport />
      </ToastProvider>
    </div>
  );
};
