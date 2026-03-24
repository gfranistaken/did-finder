interface Props {
  label: string;
  value: string | undefined;
}

export default function MetaPair({ label, value }: Props) {
  if (!value || value === 'N/A' || value === '') return null;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <span style={{
        fontSize: 11,
        fontWeight: 500,
        color: '#AAA59C',
        letterSpacing: '0.03em',
        fontFamily: 'var(--font-sans)',
      }}>
        {label}
      </span>
      <span style={{
        fontSize: 13.5,
        fontWeight: 450,
        color: '#4A4640',
        fontFamily: 'var(--font-sans)',
      }}>
        {value}
      </span>
    </div>
  );
}
