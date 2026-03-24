import type { DIDDocument } from './types';

// Uses the browser's native print dialog as an MVP.
// Full @react-pdf/renderer integration is a planned enhancement.
export function exportToPDF(did: DIDDocument): void {
  void did;
  window.print();
}
