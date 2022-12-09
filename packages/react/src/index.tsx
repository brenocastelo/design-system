import { ComponentProps } from 'react';
import { styled } from './styles';

export const Button = styled('button', {
  backgroundColor: '$ignite300',
  fontFamily: '$default',
  fontWeight: '$bold',
  borderRadius: '$sm',
  height: '$10',
  border: 0,
  color: '$white',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$ignite500',
  },

  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '$2 $4',
      },
      large: {
        fontSize: '$md',
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
});

export type ButtonProps = ComponentProps<typeof Button>;
