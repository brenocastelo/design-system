import { ComponentProps } from 'react';
import { styled } from '../styles';

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  border: '2px solid $gray900',
  padding: '$3 $4',
  boxSizing: 'border-box',
  color: '$white',
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  resize: 'vertical',
  minHeight: '80',

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
});

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea';
