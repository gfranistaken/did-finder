'use client';

import { useState } from 'react';
import type { DIDDocument } from '@/lib/types';
import { exportToPDF } from '@/lib/export-pdf';

interface Props {
  did: DIDDocument;
}

export default function ExportDropdown({ did }: Props) {
  const [open, setOpen] = useState(false);

  const handlePDF = () => {
    exportToPDF(did);
    setOpen(false);
  };

  return (
    <div style={{ position: 'relative' }} onClick={(e) => { if (open) { e.stopPropagation(); setOpen(false); } }}>
      <button
        onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
        style={{
          fontSize: 12.5,
          color: '#B0AA9E',
          background: 'none',
          padding: '6px 12px',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontFamily: 'var(--font-sans)',
          fontWeight: 450,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = '#B0AA9E'; }}
      >
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <path d="M7 1v8m0 0L4 6.5M7 9l3-2.5M2 12h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Export
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ marginLeft: 2 }}>
          <path d="M3 4l2 2 2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 4px)',
          right: 0,
          background: '#FFFEFA',
          border: '1px solid #E0DDD6',
          borderRadius: 8,
          padding: 4,
          zIndex: 10,
          minWidth: 152,
          boxShadow: '0 4px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03)',
        }}>
          {[
            {
              label: 'PDF',
              icon: 'M3 1h5l3 3v8a1 1 0 01-1 1H3a1 1 0 01-1-1V2a1 1 0 011-1z M8 1v3h3 M5 8h4 M5 10h4 M5 6h2',
              onClick: handlePDF,
            },
          ].map((fmt) => (
            <button
              key={fmt.label}
              onClick={fmt.onClick}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                width: '100%',
                textAlign: 'left',
                padding: '8px 10px',
                fontSize: 13,
                color: 'var(--ink)',
                background: 'none',
                border: 'none',
                borderRadius: 5,
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontWeight: 450,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#F2EFEA'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'none'; }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                <path d={fmt.icon} stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {fmt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
