'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { DIDSummary } from '@/lib/types';

import { searchDIDs } from '@/lib/search';

interface Props {
  dids: DIDSummary[];
}

const FILTERS = ['MGMT', 'SESS', 'TMSS', 'SAFT', 'PACK', 'MISC', 'ATTS'];

function didType(documentNumber: string): string {
  return documentNumber.split('-')[1] ?? '';
}

export default function SearchPage({ dids }: Props) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const hasQuery = query.length >= 2;
  const searched = hasQuery ? searchDIDs(query, dids) : dids;
  const results = activeFilter
    ? searched.filter((d) => didType(d.document_number) === activeFilter)
    : searched;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg-warm)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 64,
    }}>
      {/* Branding */}
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <div style={{ marginBottom: 14 }}>
          <img
            src="/DID_Registry_Icon.svg"
            alt="DID Finder"
            style={{ width: 56, height: 56, display: 'block', margin: '0 auto' }}
          />
        </div>
        <h1 style={{
          fontSize: 26,
          fontWeight: 700,
          color: 'var(--ink)',
          margin: '0 0 4px 0',
          fontFamily: 'var(--font-sans)',
          letterSpacing: '-0.015em',
        }}>
          DID Finder
        </h1>
        <p style={{ fontSize: 14, color: '#8B8579', margin: 0, fontFamily: 'var(--font-sans)' }}>
          Search the open-source Data Item Description repository
        </p>
      </div>

      {/* Search input */}
      <div style={{ width: '100%', maxWidth: 1080, padding: '0 24px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '13px 16px',
          background: '#FFFEFA',
          borderRadius: 8,
          border: focused ? '1.5px solid var(--accent)' : '1.5px solid #DDD8CE',
          boxShadow: focused
            ? '0 0 0 3px rgba(97,170,242,0.12), 0 2px 8px rgba(40,60,80,0.06)'
            : '0 1px 3px rgba(80,60,20,0.04)',
          transition: 'all 0.15s ease',
        }}>
          <svg width="17" height="17" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
            <circle cx="7.5" cy="7.5" r="5.5" stroke={focused ? 'var(--accent)' : '#B0AA9E'} strokeWidth="1.4" />
            <path d="M12 12l4 4" stroke={focused ? 'var(--accent)' : '#B0AA9E'} strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search by document number, title, or keyword..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            autoFocus
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'none',
              fontSize: 14.5,
              color: 'var(--ink)',
              fontFamily: 'var(--font-sans)',
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{
                background: 'none',
                border: 'none',
                color: '#B0AA9E',
                cursor: 'pointer',
                fontSize: 18,
                lineHeight: 1,
                padding: 0,
              }}
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Filter pills */}
      <div style={{ width: '100%', maxWidth: 1080, padding: '10px 24px 0' }}>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {FILTERS.map((f) => {
            const isActive = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(isActive ? null : f)}
                style={{
                  padding: '4px 11px',
                  borderRadius: 20,
                  border: isActive ? '1.5px solid var(--accent)' : '1.5px solid #DDD8CE',
                  background: isActive ? 'var(--accent)' : 'transparent',
                  color: isActive ? '#fff' : '#8B8579',
                  fontSize: 11.5,
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'all 0.12s ease',
                }}
              >
                {f}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results / browse listing */}
      <div style={{ width: '100%', maxWidth: 1080, padding: '0 24px' }}>
        <div style={{
          fontSize: 11.5,
          color: '#B0AA9E',
          padding: '14px 0 6px',
          fontFamily: 'var(--font-sans)',
          letterSpacing: '0.02em',
        }}>
          {hasQuery || activeFilter
            ? `${results.length} result${results.length !== 1 ? 's' : ''}`
            : `${dids.length} document${dids.length !== 1 ? 's' : ''}`}
        </div>

        {results.map((did) => (
          <Link key={did.slug} href={`/did/${did.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{
              padding: '13px 0',
              borderBottom: '1px solid #E8E3DA',
              cursor: 'pointer',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: '#8B8579',
                  flexShrink: 0,
                  width: 136,
                  display: 'inline-block',
                }}>
                  {did.document_number}
                </span>
                <span style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--ink)',
                  fontFamily: 'var(--font-sans)',
                  flex: 1,
                }}>
                  {did.title}
                </span>
                <span style={{
                  fontSize: 12,
                  color: '#B0AA9E',
                  fontFamily: 'var(--font-mono)',
                  flexShrink: 0,
                }}>
                  {did.approval_date}
                </span>
              </div>
            </div>
          </Link>
        ))}

        {hasQuery && results.length === 0 && (
          <div style={{
            padding: '36px 0',
            textAlign: 'center',
            color: '#B0AA9E',
            fontSize: 14,
            fontFamily: 'var(--font-sans)',
          }}>
            No documents found.
          </div>
        )}
      </div>

      {/* Spacer so content clears the sticky footer */}
      <div style={{ height: 56 }} />

      {/* Sticky footer bar */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '10px 24px',
        background: 'rgba(251,248,242,0.88)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderTop: '1px solid #E8E3DA',
        textAlign: 'center',
        fontSize: 11.5,
        color: '#B0AA9E',
        fontFamily: 'var(--font-sans)',
        lineHeight: 1.5,
        zIndex: 100,
      }}>
        Community-maintained — not an official government database.
        <span style={{ margin: '0 8px', opacity: 0.35 }}>·</span>
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
