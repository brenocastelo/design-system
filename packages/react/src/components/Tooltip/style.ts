import * as Tooltip from '@radix-ui/react-tooltip';

import { styled } from '../../styles';

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  color: '$gray100',
  fontFamily: '$default',
  fontWeight: '$medium',
  fontSize: '$sm',
  minHeight: 44,
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
