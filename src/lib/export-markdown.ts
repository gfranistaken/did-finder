import type { DIDDocument, DIDRequirement } from './types';

function renderRequirements(reqs: DIDRequirement[], depth = 0): string {
  return reqs.map(req => {
    const indent = '  '.repeat(depth);
    let line = `${indent}**${req.number}. ${req.title}.** ${req.content}`;
    if (req.asterisk) line += ' *(tailorable)*';
    if (req.children && req.children.length > 0) {
      line += '\n' + renderRequirements(req.children, depth + 1);
    }
    return line;
  }).join('\n\n');
}

export function didToMarkdown(did: DIDDocument): string {
  const lines: string[] = [];

  lines.push(`# ${did.title}`);
  lines.push(`**${did.document_number}**\n`);

  lines.push(`## Metadata\n`);
  lines.push(`| Field | Value |`);
  lines.push(`|-------|-------|`);
  if (did.approval_date) lines.push(`| Approval Date | ${did.approval_date} |`);
  if (did.amsc_number) lines.push(`| AMSC Number | ${did.amsc_number} |`);
  if (did.preparing_activity) lines.push(`| Preparing Activity | ${did.preparing_activity} |`);
  if (did.project_number) lines.push(`| Project Number | ${did.project_number} |`);
  if (did.office_of_primary_responsibility) lines.push(`| OPR | ${did.office_of_primary_responsibility} |`);
  lines.push('');

  if (did.distribution_statement) {
    lines.push(`> ${did.distribution_statement}\n`);
  }

  if (did.supersedes.length > 0) {
    lines.push(`**Supersedes:** ${did.supersedes.join(', ')}\n`);
  }

  if (did.related_dids.length > 0) {
    lines.push(`**Related Documents:** ${did.related_dids.join(', ')}\n`);
  }

  lines.push(`## Use & Relationship\n`);
  lines.push(did.use_relationship + '\n');

  lines.push(`## Requirements\n`);
  lines.push(renderRequirements(did.requirements));

  if (did.references.length > 0) {
    lines.push(`\n## References\n`);
    did.references.forEach(ref => {
      lines.push(`- ${ref.label} [${ref.url}](${ref.url})`);
    });
  }

  return lines.join('\n');
}
