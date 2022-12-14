import { styled } from '../../styles';

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  border: '2px solid $gray900',
  padding: '$3 $4',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$ignite500',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export const Input = styled('input', {
  backgroundColor: 'transparent',
  border: 0,
  color: '$white',
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
});

export const Prefix = styled('span', {
  color: '$gray400',
  fontSize: '$sm',
  fontWeight: '$regular',
  fontFamily: '$default',
});

Input.displayName = 'Input';
