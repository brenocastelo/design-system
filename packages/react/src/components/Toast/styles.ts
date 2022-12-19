import * as Toast from '@radix-ui/react-toast';
import { keyframes, styled } from '../../styles';

const slideIn = keyframes({
  from: {
    transform: 'translateX(100%)',
  },
  to: { transform: 'translateX(0)' },
});

const slideOut = keyframes({
  from: {
    transform: 'translateX(0)',
  },
  to: { transform: 'translateX(100%)' },
});

const ToastContainer = styled(Toast.Root, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '$3 $5',
  backgroundColor: '$gray800',
  width: 360,
  height: 82,
  borderRadius: '$sm',

  div: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  '[aria-label="close"]': {
    all: 'unset',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',

    svg: {
      color: '$gray200',
      height: '$5',
      width: '$5',
    },
  },

  '&[data-state="open"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
});

const Title = styled(Toast.Title, {
  fontSize: '$xl',
  fontWeight: '$bold',
  fontFamily: '$default',
  color: '$white',
  lineHeight: '$base',
});

const Description = styled(Toast.Description, {
  fontSize: '$sm',
  fontWeight: '$regular',
  fontFamily: '$default',
  color: '$gray200',
  lineHeight: '$base',
});

const ToastViewport = styled(Toast.Viewport, {
  listStyle: 'none',
  position: 'absolute',
  bottom: '$2',
  right: '$2',
});

export { ToastContainer, Title, Description, ToastViewport };
