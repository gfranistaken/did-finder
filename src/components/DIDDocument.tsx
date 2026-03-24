import Link from 'next/link';
import type { DIDDocument as DIDDocumentData } from '@/lib/types';
import Requirement from './Requirement';
import MetaPair from './MetaPair';
import ExportDropdown from './ExportDropdown';

function formatDate(d: string): string {
  if (!d) return '';
  return new Date(d + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontSize: 12,
      fontWeight: 600,
      color: '#AAA59C',
      margin: 0,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      fontFamily: 'var(--font-sans)',
    }}>
      {children}
    </h2>
  );
}

interface Props {
  did: DIDDocumentData;
}

export default function DIDDocument({ did }: Props) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-warm)' }}>
      {/* Nav bar */}
      <div className="no-print did-nav-inner" style={{
        padding: '0 32px',
        height: 52,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 1080,
        margin: '0 auto',
        width: '100%',
      }}>
        <Link href="/" style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: 13,
          color: '#B0AA9E',
          fontFamily: 'var(--font-sans)',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          fontWeight: 450,
          textDecoration: 'none',
        }}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M9 3L5 7.5 9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </Link>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <a
            href={`https://github.com/gfranistaken/did-data/blob/master/dids/${did.slug}.json`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 12.5,
              color: '#B0AA9E',
              textDecoration: 'none',
              padding: '6px 12px',
              borderRadius: 6,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: 'var(--font-sans)',
              fontWeight: 450,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Source
          </a>
          <div style={{ width: 1, height: 16, background: '#DDD8CE' }} />
          <ExportDropdown did={did} />
        </div>
      </div>

      {/* Document body */}
      <div className="print-doc did-doc-body" style={{
        maxWidth: 1080,
        margin: '0 auto 80px',
        background: '#FFFEFA',
        boxShadow: '0 0 0 1px rgba(0,0,0,0.04), 0 2px 12px rgba(0,0,0,0.03)',
        borderRadius: 3,
        fontFamily: 'var(--font-sans)',
        fontSize: 14.5,
        lineHeight: 1.72,
        color: 'var(--ink)',
      }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            fontWeight: 500,
            color: 'var(--accent)',
            letterSpacing: '0.04em',
            marginBottom: 14,
          }}>
            {did.document_number}
          </div>
          <h1 style={{
            fontSize: 30,
            fontWeight: 650,
            color: 'var(--ink)',
            margin: 0,
            lineHeight: 1.2,
            letterSpacing: '-0.025em',
            maxWidth: 600,
          }}>
            {did.title}
          </h1>
          {did.summary && (
            <p style={{
              fontSize: 15.5,
              fontWeight: 400,
              color: '#7A756C',
              margin: '16px 0 0 0',
              lineHeight: 1.65,
              maxWidth: 580,
            }}>
              {did.summary}
            </p>
          )}
        </div>

        {/* Metadata grid */}
        <div className="no-print" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '20px 40px',
          paddingTop: 28,
          paddingBottom: 32,
          borderTop: '1px solid #E8E4DC',
          borderBottom: '1px solid #E8E4DC',
          marginBottom: 40,
        }}>
          <MetaPair label="Approval Date" value={formatDate(did.approval_date)} />
          <MetaPair label="AMSC Number" value={did.amsc_number} />
          <MetaPair label="Preparing Activity" value={did.preparing_activity} />
          <MetaPair label="Project Number" value={did.project_number} />
          <MetaPair label="OPR" value={did.office_of_primary_responsibility} />
          <MetaPair label="DTIC Applicable" value={did.dtic_applicable !== 'N/A' ? did.dtic_applicable : undefined} />
          <MetaPair label="GIDEP Applicable" value={did.gidep_applicable !== 'N/A' ? did.gidep_applicable : undefined} />
        </div>

        {/* Distribution statement */}
        {did.distribution_statement && (
          <div style={{
            padding: '12px 16px',
            marginBottom: 40,
            fontSize: 13,
            lineHeight: 1.6,
            background: '#F6F9FD',
            borderLeft: '3px solid var(--accent)',
            borderRadius: '0 4px 4px 0',
            fontFamily: 'var(--font-sans)',
            color: '#4A6A8A',
            fontWeight: 450,
          }}>
            {did.distribution_statement}
          </div>
        )}

        {/* Supersedes & Related */}
        {((did.supersedes && did.supersedes.length > 0) || (did.related_dids && did.related_dids.length > 0)) && (
          <div style={{ display: 'flex', gap: 48, marginBottom: 48 }}>
            {did.supersedes && did.supersedes.length > 0 && (
              <div>
                <div style={{ fontSize: 11, fontWeight: 500, color: '#AAA59C', letterSpacing: '0.03em', marginBottom: 8 }}>
                  Supersedes
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {did.supersedes.map((s) => (
                    <span key={s} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12.5,
                      fontWeight: 450,
                      color: '#7A756C',
                      background: '#F2EFEA',
                      padding: '4px 10px',
                      borderRadius: 4,
                    }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {did.related_dids && did.related_dids.length > 0 && (
              <div>
                <div style={{ fontSize: 11, fontWeight: 500, color: '#AAA59C', letterSpacing: '0.03em', marginBottom: 8 }}>
                  Related
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {did.related_dids.map((r) => (
                    <span key={r} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12.5,
                      fontWeight: 450,
                      color: '#7A756C',
                      background: '#F2EFEA',
                      padding: '4px 10px',
                      borderRadius: 4,
                    }}>
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Use & Relationship */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Use &amp; Relationship</SectionLabel>
          <div style={{ marginTop: 16, color: '#5C574E', fontSize: 14.5 }}>
            {did.use_relationship.split('\n').filter(Boolean).map((para, i) => (
              <p key={i} style={{ margin: '0 0 12px 0' }}>{para}</p>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Requirements</SectionLabel>
          {did.requirements.map((req) => (
            <Requirement key={req.number} req={req} depth={0} />
          ))}
        </div>

        {/* References */}
        {did.references && did.references.length > 0 && (
          <div style={{ marginBottom: 48 }}>
            <SectionLabel>References</SectionLabel>
            <div style={{ marginTop: 16 }}>
              {did.references.map((ref, i) => (
                <p key={i} style={{ fontSize: 14, color: '#5C574E', margin: '0 0 6px 0' }}>
                  {ref.label}{' '}
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent)', textDecoration: 'none' }}
                  >
                    {ref.url}
                  </a>
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{
          paddingTop: 32,
          borderTop: '1px solid #E8E4DC',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}>
          <span style={{ fontSize: 11, color: '#C4BFB6', fontFamily: 'var(--font-mono)', fontWeight: 400 }}>
            Schema v{did._schema_version}
          </span>
          <span style={{ fontSize: 11.5, color: '#B0AA9E', fontWeight: 400 }}>
            Community-maintained · Verify against{' '}
            <a href="https://assist.dla.mil" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
              ASSIST
            </a>
          </span>
        </div>
      </div>

      {/* Site footer */}
      <div className="no-print" style={{
        textAlign: 'center',
        fontSize: 11.5,
        color: '#B0AA9E',
        fontFamily: 'var(--font-sans)',
        lineHeight: 1.5,
        paddingBottom: 24,
      }}>
        Community-maintained — not an official government database.
        <br />
        Verify against{' '}
        <a href="https://assist.dla.mil" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
          ASSIST
        </a>
        <span style={{ margin: '0 6px', opacity: 0.35 }}>·</span>
        <a href="https://github.com/gfranistaken/did-data" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
          GitHub
        </a>
        <span style={{ margin: '0 6px', opacity: 0.35 }}>·</span>
        <Link href="/about" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
          About
        </Link>
        <span style={{ margin: '0 6px', opacity: 0.35 }}>·</span>
        <Link href="/disclaimer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
          Disclaimer
        </Link>
      </div>
    </div>
  );
}
