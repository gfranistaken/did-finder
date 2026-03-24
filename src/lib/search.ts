import type { DIDSummary } from './types';

export function searchDIDs(query: string, dids: DIDSummary[]): DIDSummary[] {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  return dids.filter(did => did._searchText.toLowerCase().includes(q));
}
