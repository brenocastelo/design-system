import { Description, Title, ToastContainer, ToastViewport } from './styles';
import { Close, Provider } from '@radix-ui/react-toast';
import { X } from 'phosphor-react';
import { ComponentProps, ReactNode } from 'react';

function Toast({ children, title, ...props }: ToastProps) {
  return (
    <ToastContainer {...props}>
      <div>
        {!!title && <Title>{title}</Title>}

        <Close aria-label="close">
          <X />
        </Close>
      </div>
      <Description>{children}</Description>
    </ToastContainer>
  );
}

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  children: ReactNode;
  title?: string;
}

export { Toast, Provider as ToastProvider, ToastViewport };
