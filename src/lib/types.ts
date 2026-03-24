export interface DIDReference {
  label: string;
  url: string;
}

export interface DIDRequirement {
  number: string;
  title: string;
  content: string;
  asterisk: boolean;
  children: DIDRequirement[];
}

export interface DIDDocument {
  document_number: string;
  slug: string;
  title: string;
  summary: string;
  approval_date: string;
  amsc_number: string;
  limitation: string;
  dtic_applicable: string;
  gidep_applicable: string;
  office_of_primary_responsibility: string;
  preparing_activity: string;
  project_number: string;
  applicable_forms: string;
  form_version?: string;
  use_relationship: string;
  supersedes: string[];
  related_dids: string[];
  references: DIDReference[];
  distribution_statement: string;
  requirements: DIDRequirement[];
  _source?: {
    source_file: string;
    extraction_date: string;
    extraction_method: string;
  };
  _schema_version: string;
}

export interface DIDSummary {
  document_number: string;
  slug: string;
  title: string;
  summary: string;
  approval_date: string;
  preparing_activity: string;
  _searchText: string;
}
