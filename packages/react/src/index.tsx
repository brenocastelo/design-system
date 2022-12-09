import { colors } from '@ignite-ui/tokens'
import { styled } from './styles'

const Button = styled('button', {
  backgroundColor: '$ignite300',
  fontFamily: '$default',
  fontWeight: '$bold',
  borderRadius: '$md',
  height: '$10',
})

export function App() {
  return <Button style={{ color: colors.ignite300 }}>Design System</Button>
}
