import Link from 'next/link';

export const metadata = {
  title: 'About — DID Finder',
  description: 'What DID Finder is, why it exists, and how to contribute.',
};

export default function AboutPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg-warm)',
      fontFamily: 'var(--font-sans)',
    }}>
      {/* Nav */}
      <div style={{
        padding: '0 32px',
        height: 52,
        display: 'flex',
        alignItems: 'center',
        maxWidth: 1080,
        margin: '0 auto',
        width: '100%',
      }}>
        <Link href="/" style={{
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
      </div>

      {/* Content */}
      <div style={{
        maxWidth: 720,
        margin: '0 auto 80px',
        padding: '40px 32px 0',
        fontSize: 15,
        lineHeight: 1.75,
        color: 'var(--ink-body)',
      }}>
        <h1 style={{
          fontSize: 28,
          fontWeight: 650,
          color: 'var(--ink)',
          margin: '0 0 8px 0',
          letterSpacing: '-0.02em',
        }}>
          About DID Finder
        </h1>
        <p style={{ marginTop: 0, color: '#8B8579', fontSize: 14 }}>
          An open-source reference for defense Data Item Descriptions
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #E8E3DA', margin: '28px 0' }} />

        <h2 style={{ fontSize: 17, fontWeight: 650, color: 'var(--ink)', marginBottom: 10 }}>What are DIDs?</h2>
        <p>
          Data Item Descriptions (DIDs) are documents used in U.S. defense acquisition that define the
          format, content, preparation instructions, and delivery requirements for contract data deliverables.
          When a government contract requires a contractor to deliver a report, plan, specification, or
          technical manual, a DID tells them exactly what that document must contain.
        </p>
        <p>
          DIDs are managed by the Defense Standardization Program and are listed in the{' '}
          <a href="https://assist.dla.mil" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
            ASSIST database
          </a>
          . They are public documents, but today they only exist as static PDFs — hard to search,
          impossible to compare, and with no open change process.
        </p>

        <h2 style={{ fontSize: 17, fontWeight: 650, color: 'var(--ink)', margin: '32px 0 10px' }}>What DID Finder does</h2>
        <p>
          DID Finder turns those static PDFs into a searchable, version-controlled web resource.
          Every DID in this database has been converted into a structured JSON format and published
          openly on GitHub. That means:
        </p>
        <ul style={{ paddingLeft: 20, margin: '12px 0' }}>
          <li style={{ marginBottom: 8 }}>Full-text search across document numbers, titles, and requirement content</li>
          <li style={{ marginBottom: 8 }}>A clean, readable view of every requirement — including nested sub-requirements</li>
          <li style={{ marginBottom: 8 }}>Export to Markdown or PDF for offline use</li>
          <li style={{ marginBottom: 8 }}>Version history for every document via Git</li>
          <li>An open contribution process — anyone can submit corrections or additions</li>
        </ul>

        <h2 style={{ fontSize: 17, fontWeight: 650, color: 'var(--ink)', margin: '32px 0 10px' }}>How to contribute</h2>
        <p>
          The DID data lives in a separate GitHub repository:{' '}
          <a href="https://github.com/gfranistaken/did-data" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
            gfranistaken/did-data
          </a>
          . To add a new DID or correct an existing one, open a pull request there. The schema and
          contribution instructions are documented in the repository.
        </p>
        <p>
          The viewer application itself (this site) is open source at{' '}
          <a href="https://github.com/gfranistaken/did-finder" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
            gfranistaken/did-finder
          </a>
          .
        </p>

        <h2 style={{ fontSize: 17, fontWeight: 650, color: 'var(--ink)', margin: '32px 0 10px' }}>Disclaimer</h2>
        <p>
          DID Finder is a community-maintained project and is not affiliated with, endorsed by, or an official
          product of the U.S. Department of Defense or any government agency. Always verify content against
          the authoritative{' '}
          <a href="https://assist.dla.mil" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
            ASSIST database
          </a>
          . See the full{' '}
          <Link href="/disclaimer" style={{ color: 'var(--accent)' }}>
            disclaimer
          </Link>
          .
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #E8E3DA', margin: '36px 0 20px' }} />
        <p style={{ fontSize: 13, color: '#B0AA9E' }}>
          Data sourced from public DID documents.
        </p>
      </div>
    </div>
  );
}
