import type { DIDDocument } from './types';

const GITHUB_OWNER = 'gfranistaken';
const GITHUB_REPO = 'did-data';
const GITHUB_BRANCH = 'master';
const DID_DIRECTORY = 'dids';

export async function fetchAllDIDs(): Promise<DIDDocument[]> {
  if (process.env.NODE_ENV === 'development') {
    const fs = await import('fs');
    const path = await import('path');
    const dataDir = path.join(process.cwd(), 'src', 'data');
    const files = fs.readdirSync(dataDir).filter((f: string) => f.endsWith('.json'));
    return files.map((f: string) => {
      const raw = fs.readFileSync(path.join(dataDir, f), 'utf-8');
      const did = JSON.parse(raw) as DIDDocument;
      did._filename = f;
      return did;
    });
  }

  const apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${DID_DIRECTORY}?ref=${GITHUB_BRANCH}`;
  const res = await fetch(apiUrl, {
    headers: { 'Accept': 'application/vnd.github.v3+json' },
  });

  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

  const files: { name: string; download_url: string }[] = await res.json() as { name: string; download_url: string }[];
  const jsonFiles = files.filter(f => f.name.endsWith('.json'));

  const dids = await Promise.all(
    jsonFiles.map(async (file) => {
      const raw = await fetch(file.download_url);
      const did = await raw.json() as DIDDocument;
      did._filename = file.name;
      return did;
    })
  );

  const slugs = dids.map(d => d.slug);
  const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
  if (dupes.length > 0) {
    throw new Error(`Duplicate slugs detected: ${dupes.join(', ')}`);
  }

  return dids;
}

export async function fetchDIDBySlug(slug: string): Promise<DIDDocument | null> {
  const all = await fetchAllDIDs();
  return all.find(d => d.slug === slug) ?? null;
}
