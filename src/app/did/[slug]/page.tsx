import { fetchAllDIDs, fetchDIDBySlug } from '@/lib/github';
import DIDDocument from '@/components/DIDDocument';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const dids = await fetchAllDIDs();
  return dids.map(d => ({ slug: d.slug }));
}

export default async function DIDPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const did = await fetchDIDBySlug(slug);
  if (!did) notFound();
  return <DIDDocument did={did} />;
}
