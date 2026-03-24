import Link from 'next/link';

export const metadata = {
  title: 'Disclaimer — DID Finder',
  description: 'Legal disclaimer for DID Finder.',
};

export default function DisclaimerPage() {
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
          Disclaimer
        </h1>
        <p style={{ marginTop: 0, color: '#8B8579', fontSize: 14 }}>
          Last updated March 2026
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #E8E3DA', margin: '28px 0' }} />

        <h2 style={{ fontSize: 17, fontWeight: 650, color: 'var(--ink)', marginBottom: 10 }}>Not an official government resource</h2>
        <p>
          DID Finder is an independent, community-maintained project. It is not affiliated with,
          endorsed by, sponsored by, or an official product of the U.S. Department of Defense,
          the Defense Standardization Program Office, the Defense Logistics Agency, or any other
          government agency or instrumentality.
        </p>

        <h2 style={{ fontSize: 17, fontWeight: 650, color: 'var(--ink)', margin: '32px 0 10px' }}>Accuracy and completeness</h2>
        <p>
          The DID content on this site has been converted from publicly available source documents
          and may contain transcription errors, omissions, or outdated information. We make no
          representations or warranties of any kind, express or implied, regarding the accuracy,
          completeness, reliability, or suitability of any information on this site.
        </p>
        <p>
          <strong style={{ color: 'var(--ink)' }}>Always verify content against the authoritative source</strong> — the{' '}
          <a href="https://assist.dla.mil" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
            ASSIST database
          </a>
          {' '}maintained by the Defense Logistics Agency — before using any DID for contractual,
          legal, or acquisition purposes.
        </p>

        <h2 style={{ fontSize: 17, fontWeight: 650, color: 'var(--ink)', margin: '32px 0 10px' }}>No legal or acquisition advice</h2>
        <p>
          Nothing on this site constitutes legal advice, acquisition guidance, contracting advice,
          or any professional advisory service. Use of this site does not create any professional
          relationship between you and the site operators.
        </p>

        <h2 style={{ fontSize: 17, fontWeight: 650, color: 'var(--ink)', margin: '32px 0 10px' }}>Public domain content</h2>
        <p>
          Data Item Descriptions are U.S. government works and are in the public domain. The structured
          JSON representation and site code are released under the MIT license. See{' '}
          <a href="https://github.com/gfranistaked/did-finder" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
            the repository
          </a>
          {' '}for details.
        </p>

        <h2 style={{ fontSize: 17, fontWeight: 650, color: 'var(--ink)', margin: '32px 0 10px' }}>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, the operators of DID Finder shall not be liable for
          any direct, indirect, incidental, consequential, or special damages arising out of or in
          connection with your use of this site or reliance on any information contained herein.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #E8E3DA', margin: '36px 0 20px' }} />
        <p style={{ fontSize: 13, color: '#B0AA9E' }}>
          Questions? Open an issue at{' '}
          <a href="https://github.com/gfranistaked/did-finder" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
            github.com/gfranistaked/did-finder
          </a>
          .
        </p>
      </div>
    </div>
  );
}
