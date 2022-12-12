import '../styles/tokens.css';

type TokensProps = {
  tokens: Record<string, string>;
  hasRem?: boolean;
};

export function Tokens({ tokens, hasRem }: TokensProps) {
  return (
    <table className="tokens">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRem && <th>Pixels</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            {hasRem && <td>{Number(value.replace('rem', '')) * 16}px</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
