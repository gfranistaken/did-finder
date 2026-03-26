import { fetchAllDIDs } from '@/lib/github';
import SearchPage from '@/components/SearchPage';
import type { DIDSummary, DIDRequirement } from '@/lib/types';

function flattenReqs(reqs: DIDRequirement[]): string {
  return reqs.map(r => `${r.title} ${r.content} ${flattenReqs(r.children ?? [])}`).join(' ');
}

export default async function Home() {
  const dids = await fetchAllDIDs();

  const didSummaries: DIDSummary[] = dids.map(d => ({
    document_number: d.document_number,
    slug: d.slug,
    title: d.title,
    summary: d.summary,
    approval_date: d.approval_date,
    preparing_activity: d.preparing_activity,
    _searchText: [
      d.document_number,
      d.title,
      d.summary,
      d.use_relationship,
      flattenReqs(d.preparation_instructions),
    ].join(' '),
  }));

  return <SearchPage dids={didSummaries} />;
}
