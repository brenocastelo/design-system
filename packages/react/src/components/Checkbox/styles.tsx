import * as Checkbox from '@radix-ui/react-checkbox';
import { styled, keyframes } from '../../styles';

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  height: '$6',
  width: '$6',
  borderRadius: '$xs',
  backgroundColor: '$gray900',
  cursor: 'pointer',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',

  '&:focus': {
    border: '2px solid $ignite300',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },
});

const slidIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
});

const slidOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
});

export const CheckboxIndicator = styled(Checkbox.CheckboxIndicator, {
  color: '$white',
  height: '$4',
  width: '$4',

  '&[data-state="checked"]': {
    animation: `${slidIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slidOut} 200ms ease-out`,
  },
});
