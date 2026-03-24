import type { DIDRequirement } from '@/lib/types';

interface Props {
  req: DIDRequirement;
  depth?: number;
}

export default function Requirement({ req, depth = 0 }: Props) {
  const isTopLevel = depth === 0;
  const hasChildren = req.children && req.children.length > 0;

  return (
    <div style={{ marginTop: isTopLevel ? 32 : 0 }}>
      <div style={{
        display: 'flex',
        gap: 0,
        alignItems: 'flex-start',
        paddingLeft: depth > 0 ? 20 : 0,
        marginLeft: depth > 0 ? (depth - 1) * 20 + 16 : 0,
        borderLeft: depth > 0 ? '1.5px solid #E0DDD6' : 'none',
        paddingTop: depth > 0 ? 10 : 0,
        paddingBottom: depth > 0 && !hasChildren ? 2 : 0,
      }}>
        <div style={{ lineHeight: 1.72, fontSize: isTopLevel ? 15 : 14.5 }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: isTopLevel ? 13.5 : 12.5,
            fontWeight: 500,
            color: isTopLevel ? 'var(--accent)' : '#A09A90',
            marginRight: 10,
            display: 'inline-block',
            minWidth: isTopLevel ? 20 : 0,
            letterSpacing: '0.01em',
          }}>
            {req.number}
          </span>
          <span style={{
            fontWeight: isTopLevel ? 600 : 550,
            color: 'var(--ink)',
            letterSpacing: '-0.008em',
          }}>
            {req.title}{req.content ? '.' : ''}
          </span>
          {req.content && (
            <span style={{ fontWeight: 400, color: '#5C574E', marginLeft: 4 }}>
              {req.content}
            </span>
          )}
          {req.asterisk && (
            <span style={{
              marginLeft: 6,
              fontSize: 10,
              fontWeight: 500,
              color: '#E8A020',
              background: '#FEF3E0',
              padding: '1px 5px',
              borderRadius: 3,
              fontFamily: 'var(--font-sans)',
            }}>
              tailorable
            </span>
          )}
        </div>
      </div>

      {hasChildren && (
        <div style={{
          paddingLeft: depth === 0 ? 0 : 20,
          marginLeft: depth > 0 ? (depth - 1) * 20 + 16 : 0,
          borderLeft: depth > 0 ? '1.5px solid #E0DDD6' : 'none',
          paddingBottom: depth > 0 ? 4 : 0,
        }}>
          {req.children.map((child) => (
            <Requirement key={child.number} req={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
