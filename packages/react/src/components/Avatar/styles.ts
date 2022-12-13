import * as Avatar from '@radix-ui/react-avatar';

import { styled } from '../../styles';

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  height: '$12',
  width: '$12',
  overflow: 'hidden',
});

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  heigh: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '$gray800',
  color: '$gray600',

  svg: {
    height: '$6',
    width: '$6',
  },
});
