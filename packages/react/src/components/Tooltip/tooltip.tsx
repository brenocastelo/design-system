import { Provider, Trigger, Arrow, Root } from '@radix-ui/react-tooltip';
import { ComponentProps } from '@stitches/react';
import { ReactNode } from 'react';
import { TooltipContent } from './style';

function Tooltip({
  open,
  defaultOpen,
  onOpenChange,
  arrow,
  children,
  triggerComponent,
  ...props
}: TooltipProps) {
  return (
    <Root>
      <Trigger asChild>{triggerComponent}</Trigger>

      <TooltipContent side={arrow} {...props}>
        {children}
        {!!arrow && <Arrow />}
      </TooltipContent>
    </Root>
  );
}

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  children: ReactNode | string;
  triggerComponent: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  arrow?: 'top' | 'bottom' | 'left' | 'right';
}

export { Tooltip, Provider as TooltipProvider };
