import { colors } from '@br-ignite-ui/tokens';
import { getContrast } from 'polished';

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
            fontFamily: 'monospace',
          }}
        >
          ${key}
        </div>
      </div>
    );
  });
}
