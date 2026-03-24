import { useState } from "react";

// ── Sample DID data ──
const ALL_DIDS = [
  {
    document_number: "DI-SESS-81248B", slug: "di-sess-81248b", title: "Interface Control Document (ICD)",
    summary: "The Interface Control Document (ICD) provides a record of all interface information (such as drawings, diagrams, tables, and textual information) generated for the project.",
    approval_date: "2015-04-07", amsc_number: "N9528", preparing_activity: "NM", project_number: "SESS-2015-018",
    limitation: "N/A", dtic_applicable: "No", gidep_applicable: "No", applicable_forms: "N/A",
    office_of_primary_responsibility: "",
    use_relationship: "The Interface Control Document (ICD) provides a record of all interface information (such as drawings, diagrams, tables, and textual information) generated for the project.\n\na. This DID contains the format, content, and intended use information for the data deliverable resulting from the work task described in paragraph 3.2.5.1 (1)-(4) of EIA-649-1 and the principles of EIA-649.\n\nb. This DID supersedes DI-CMAN-81248A and DI-SESS-81876.\n\nc. Copies of these standards are available online at http://www.sae.org or from SAE International, 400 Commonwealth Drive, Warrendale, PA 15096-0001, Tel 877-606-7323 (inside USA and Canada) or 724-776-4970 (outside USA).",
    supersedes: ["DI-CMAN-81248A", "DI-SESS-81876"], related_dids: [],
    references: [{ label: "Copies of these standards are available online at", url: "http://www.sae.org" }],
    distribution_statement: "DISTRIBUTION STATEMENT A: Approved for public release; distribution is unlimited.",
    requirements: [
      { number: "1", title: "Reference Documents", content: "The applicable issue of the documents cited herein, including their approval dates and dates of any applicable amendments, notices, and revisions, shall be as specified in the contract.", asterisk: false, children: [] },
      { number: "2", title: "Format", content: "The ICD shall be prepared in Supplier format.", asterisk: false, children: [] },
      { number: "3", title: "Content", content: "The ICD shall identify:", asterisk: false, children: [
        { number: "3.a", title: "All released/approved interface information", content: "for the project.", asterisk: false, children: [] },
        { number: "3.b", title: "A revision record", content: "for all released/approved interface information for the project, including release dates.", asterisk: false, children: [] },
        { number: "3.c", title: "A cross-reference listing", content: "relating all released/approved interface information for the project to the configuration items and system elements to which they apply.", asterisk: false, children: [] },
        { number: "3.d", title: "A description of the physical and functional relationships", content: "between all released/approved interface information for the project.", asterisk: false, children: [] },
        { number: "3.e", title: "The links to the actual documentation", content: "defining the released/approved interface information for the project.", asterisk: false, children: [] },
      ]},
    ],
    _schema_version: "2.0",
  },
  {
    document_number: "DI-SESS-81223A", slug: "di-sess-81223a", title: "Schematic Block Diagrams",
    summary: "Schematic Block Diagrams are used as the basis for displaying functional and technical requirements and interfaces, supporting design synthesis, integration, and interface compatibility functions.",
    approval_date: "2019-10-09", amsc_number: "10112", preparing_activity: "MI", project_number: "SESS-2019-049",
    limitation: "N/A", dtic_applicable: "No", gidep_applicable: "No", applicable_forms: "N/A",
    office_of_primary_responsibility: "",
    use_relationship: "Schematic Block Diagrams (SBDs) are used as the basis for displaying functional and technical requirements and interfaces. As such, they support the design synthesis, integration, and interface compatibility functions.\n\na. This Data Item Description (DID) contains the format, content, and intended use information for the data deliverable resulting from the work task described in the solicitation.\n\nb. SBDs are used when a multi-contractor relationship exists, and there is a need for commonality or exchange of this data among the contractors. SBDs can also be used when there is a special requirement for this data to support technical reviews and audits.\n\nc. This DID supersedes DI-GDRQ-81223.",
    supersedes: ["DI-GDRQ-81223"], related_dids: [],
    references: [],
    distribution_statement: "",
    requirements: [
      { number: "1", title: "Reference Documents", content: "None.", asterisk: false, children: [] },
      { number: "2", title: "Format", content: "The SBDs format shall be in accordance with section 3 below.", asterisk: false, children: [] },
      { number: "3", title: "Content", content: "The SBDs shall show the functional interfaces and apportionment or requirements between major systems; within the system between the elements of the system (e.g., equipment, personnel, facilities); and between end items, end-to-end, and closed-loop relationships. The SBDs shall also show the maintenance or check out aspects of the proposed design. Sufficient details shall illustrate how the design requirements are to be met. The SBDs shall delineate with symbols (e.g., schematic, architectural, electronic, mathematical, structural, mechanical, etc.) the features and relationships of end items, subsystems, and subsystems components and parts. The SBDs shall identify:", asterisk: false, children: [
        { number: "3.a", title: "Intersystem relationships", content: "(e.g., a command and control system, interface with a strategic weapon system, etc.)", asterisk: false, children: [] },
        { number: "3.b", title: "Intrasystem relationships", content: "including the relationship between constituent elements of a subsystem (e.g., in a communication subsystem interfaces between closed-circuit television, work station intercom, remote site communication, spacecraft communication, etc.)", asterisk: false, children: [] },
        { number: "3.c", title: "Subordinate detailed schematics", content: "as required, to augment 3.a. and 3.b. above.", asterisk: false, children: [] },
        { number: "3.1", title: "Characteristics", content: "The SBDs and significant elements within the diagrams shall be uniquely identified to provide the basis for:", asterisk: false, children: [
          { number: "3.1.a", title: "Generating a family of lower-level-of-detail diagrams", content: "traceable from the top down or from the bottom up.", asterisk: false, children: [] },
          { number: "3.1.b", title: "Collecting and apportioning effective Requirements Allocation Sheets", content: "requirements or trade study requirements against applicable system or subsystem equipment.", asterisk: false, children: [] },
          { number: "3.1.c", title: "Identifying major intersystem and intrasystem requirements", content: "and interrelationships.", asterisk: false, children: [] },
        ]},
        { number: "3.2", title: "Developing SBDs", content: "The basic technique for developing SBDs is illustrated in Figure 1.", asterisk: false, children: [
          { number: "3.2.a", title: "The first-level SBDs", content: "shall be complete for the subsystem or subsystems being developed. The schematic shall depict a \"closed-loop,\" including a block depiction of intersystem interfaces.", asterisk: false, children: [] },
          { number: "3.2.b", title: "The second-level detail SBDs", content: "shall be technical expansions of the first-level SBDs, and shall relate contract end items within the subsystem. Input and output expansion shall be related to the interfaces expressed in the first-level SBDs.", asterisk: false, children: [] },
          { number: "3.2.c", title: "The third-level detail SBDs", content: "shall be organized functionally to define significant end-to-end system logic across all hardware and facility interfaces involved (e.g., power subsystem, launch control, flight sequence, malfunction detection and control, etc.).", asterisk: false, children: [] },
        ]},
      ]},
    ],
    _schema_version: "2.0",
  },
  {
    document_number: "DI-SESS-80858D", slug: "di-sess-80858d", title: "Supplier's Configuration Management Plan",
    summary: "The Supplier's Configuration Management (CM) Plan describes the organization, procedures, and controls of the Supplier's CM program.",
    approval_date: "2020-02-11", amsc_number: "N10144", preparing_activity: "NM", project_number: "SESS-2020-007",
    limitation: "N/A", dtic_applicable: "No", gidep_applicable: "No", applicable_forms: "N/A",
    office_of_primary_responsibility: "",
    use_relationship: "The Supplier's Configuration Management (CM) Plan describes the organization, procedures, and controls of the Supplier's CM program. The principle use is to provide the Government a basis for review, evaluation, and monitoring of the CM program and associated proposed components.\n\na. This DID contains the format, content, and intended use information for the data deliverable resulting from the work task described in EIA-649-1 and the principles of EIA-649.\n\nb. This DID supersedes DI-SESS-80858C.",
    supersedes: ["DI-SESS-80858C"], related_dids: [],
    references: [{ label: "Copies of these standards are available online at", url: "https://www.sae.org" }],
    distribution_statement: "DISTRIBUTION STATEMENT A: Approved for public release; distribution is unlimited.",
    requirements: [
      { number: "1", title: "Reference Documents", content: "The applicable issue of the documents cited herein, including their approval dates and dates of any applicable amendments, notices, and revisions, shall be as specified in the contract.", asterisk: false, children: [] },
      { number: "2", title: "Format", content: "The Supplier's CM plan shall be prepared in Supplier format.", asterisk: false, children: [] },
      { number: "3", title: "Content", content: "The Supplier's CM plan shall identify the Supplier's processes and procedures for:", asterisk: false, children: [
        { number: "a", title: "Configuration management and planning", content: "over the lifecycle of a product.", asterisk: false, children: [] },
        { number: "b", title: "Configuration identification", content: "throughout the product lifecycle.", asterisk: false, children: [] },
        { number: "c", title: "Configuration change management", content: "involves controlling and documenting the product and its product configuration information to the product's end of life.", asterisk: false, children: [] },
        { number: "d", title: "Configuration status accounting", content: "involves recording and reporting of information needed to trace and manage configuration of a product.", asterisk: false, children: [] },
        { number: "e", title: "Verification and audits", content: "to ensure consistency of product information are established and maintained in the execution of the total configuration, including hardware, software, and firmware.", asterisk: false, children: [] },
      ]},
    ],
    _schema_version: "2.0",
  },
  {
    document_number: "DI-SESS-81001E", slug: "di-sess-81001e", title: "Conceptual Design Drawings/Models",
    summary: "Conceptual design drawings/models define engineering design concepts used to reduce technical uncertainty as to whether or not a technology is feasible or a design concept has potential to meet stated requirements.",
    approval_date: "2013-02-26", amsc_number: "A9350", preparing_activity: "AR", project_number: "",
    limitation: "", dtic_applicable: "", gidep_applicable: "", applicable_forms: "",
    office_of_primary_responsibility: "AR",
    use_relationship: "Conceptual design drawings/models define engineering design concepts. They are used to reduce technical uncertainty as to whether or not a technology is feasible or a design concept has potential to meet stated requirements.\n\na. This Data Item Description (DID) contains the format and content preparation instructions for Conceptual Design Drawings/Models resulting from the work task described in 5.3.3.1 of MIL-STD-31000.\n\nb. This DID is applicable to acquisitions of military systems, equipment, and components. It is intended for use primarily during the concept demonstration/validation phase of the DoD materiel life-cycle.\n\nc. It is not intended that all the requirements contained herein should be applied to every program. This DID should be tailored to the minimum data requirements of the applicable contract or purchase order.\n\nd. This DID is related to DI-SESS-81000E, DI-SESS-81002F and DI-SESS-81003E. This DID supersedes DI-SESS-81001D.",
    supersedes: ["DI-SESS-81001D"], related_dids: ["DI-SESS-81000E", "DI-SESS-81002F", "DI-SESS-81003E"],
    references: [],
    distribution_statement: "DISTRIBUTION STATEMENT A: Approved for public release; distribution is unlimited.",
    requirements: [
      { number: "1", title: "Reference Documents", content: "The applicable issue of the documents cited herein, including their approval dates and dates of any applicable amendments, notices, and revisions, shall be as cited in the ASSIST database, https://assist.dla.mil, at the time of the solicitation; or, for documents not included in ASSIST, as stated herein.", asterisk: false, children: [] },
      { number: "2", title: "General", content: "Conceptual design drawings/models shall be in accordance with MIL-STD-31000.", asterisk: false, children: [] },
      { number: "3", title: "Format", content: "Conceptual design drawings/models shall be in the contractors or Government's format as specified on the TDP Option Selection Worksheet incorporated into the contract or purchase order.", asterisk: false, children: [] },
      { number: "4", title: "Content", content: "Conceptual design drawings/models shall document an engineering design concept in detail. These drawings/models shall indicate whether or not a technology is feasible or the design concept has the potential of meeting stated requirements.", asterisk: false, children: [] },
      { number: "5", title: "Selection of drawings", content: "The types of drawings to be prepared will vary according to the complexity of the design concept. The Option Selection Worksheet incorporated in the contract or purchase order will specify whether the contractor or the Government is responsible for selecting the types of drawings to be used. Associated lists are not required, but may be used if necessary to meet the information content requirements of para 4 above.", asterisk: false, children: [] },
      { number: "6", title: "CAGE code and document numbers", content: "Conceptual Design Drawings/Models shall be identified with the contractor's CAGE code and contractor document numbers or with a Government CAGE code and Government document numbers as specified in the Option Selection Worksheet incorporated in the contract.", asterisk: false, children: [] },
    ],
    _schema_version: "2.0",
  },
];

/* ── Recursive requirement renderer ── */
function Requirement({ req, depth = 0 }) {
  const isTopLevel = depth === 0;
  const hasChildren = req.children && req.children.length > 0;

  return (
    <div style={{
      marginTop: isTopLevel ? 32 : 0,
      paddingTop: isTopLevel ? 0 : 0,
    }}>
      {/* The requirement itself */}
      <div style={{
        display: "flex", gap: 0, alignItems: "flex-start",
        paddingLeft: depth > 0 ? 20 : 0,
        marginLeft: depth > 0 ? (depth - 1) * 20 + 16 : 0,
        borderLeft: depth > 0 ? "1.5px solid #E0DDD6" : "none",
        paddingTop: depth > 0 ? 10 : 0,
        paddingBottom: depth > 0 && !hasChildren ? 2 : 0,
      }}>
        <div style={{ lineHeight: 1.72, fontSize: isTopLevel ? 15 : 14.5 }}>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: isTopLevel ? 13.5 : 12.5,
            fontWeight: 500,
            color: isTopLevel ? "var(--accent)" : "#A09A90",
            marginRight: 10,
            display: "inline-block",
            minWidth: isTopLevel ? 20 : 0,
            letterSpacing: "0.01em",
          }}>
            {req.number}
          </span>
          <span style={{
            fontWeight: isTopLevel ? 600 : 550,
            color: "var(--ink)",
            letterSpacing: "-0.008em",
          }}>
            {req.title}{req.content ? "." : ""}
          </span>
          {req.content && (
            <span style={{
              fontWeight: 400,
              color: "#5C574E",
              marginLeft: 4,
            }}>
              {req.content}
            </span>
          )}
        </div>
      </div>
      {/* Children */}
      {hasChildren && (
        <div style={{
          marginLeft: depth === 0 ? 0 : 0,
          paddingLeft: depth === 0 ? 0 : 20,
          marginLeft: depth > 0 ? (depth - 1) * 20 + 16 : 0,
          borderLeft: depth > 0 ? "1.5px solid #E0DDD6" : "none",
          paddingBottom: depth > 0 ? 4 : 0,
        }}>
          {req.children.map((child) => (
            <Requirement key={child.number} req={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Metadata pair ── */
function MetaPair({ label, value }) {
  if (!value || value === "N/A" || value === "") return null;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <span style={{
        fontSize: 11, fontWeight: 500, color: "#AAA59C",
        letterSpacing: "0.03em",
      }}>{label}</span>
      <span style={{
        fontSize: 13.5, fontWeight: 450, color: "#4A4640",
        fontFamily: "var(--font-sans)",
      }}>{value}</span>
    </div>
  );
}

/* ── Section label ── */
function SectionLabel({ children }) {
  return (
    <h2 style={{
      fontSize: 12, fontWeight: 600, color: "#AAA59C",
      margin: 0, letterSpacing: "0.04em", textTransform: "uppercase",
      fontFamily: "var(--font-sans)",
    }}>
      {children}
    </h2>
  );
}

/* ── DID Document View ── */
function DIDDocumentPage({ did, onBack }) {
  const formatDate = (d) => {
    if (!d) return "";
    return new Date(d + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  const [exportOpen, setExportOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-warm)" }} onClick={() => exportOpen && setExportOpen(false)}>
      <div style={{
        padding: "0 32px", height: 52, display: "flex", alignItems: "center", justifyContent: "space-between",
        maxWidth: 900, margin: "0 auto", width: "100%",
      }}>
        <button onClick={onBack} style={{
          background: "none", border: "none", cursor: "pointer", fontSize: 13,
          color: "#B0AA9E", fontFamily: "var(--font-sans)", display: "flex", alignItems: "center", gap: 6,
          fontWeight: 450, padding: 0,
        }}
          onMouseEnter={(e) => e.currentTarget.style.color = "var(--ink)"}
          onMouseLeave={(e) => e.currentTarget.style.color = "#B0AA9E"}
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M9 3L5 7.5 9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Back
        </button>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <a href={`https://github.com/your-org/did-repository/blob/main/dids/${did.slug}.json`}
            target="_blank" rel="noopener" style={{
              fontSize: 12.5, color: "#B0AA9E", textDecoration: "none", padding: "6px 12px",
              borderRadius: 6, display: "inline-flex", alignItems: "center", gap: 6,
              fontFamily: "var(--font-sans)", fontWeight: 450,
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--ink)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#B0AA9E"}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
            Source
          </a>
          <div style={{ width: 1, height: 16, background: "#DDD8CE" }} />
          <div style={{ position: "relative" }}>
            <button onClick={(e) => { e.stopPropagation(); setExportOpen(!exportOpen); }} style={{
              fontSize: 12.5, color: "#B0AA9E", background: "none", padding: "6px 12px",
              border: "none", borderRadius: 6, cursor: "pointer", display: "inline-flex",
              alignItems: "center", gap: 6, fontFamily: "var(--font-sans)", fontWeight: 450,
            }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--ink)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#B0AA9E"}
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1v8m0 0L4 6.5M7 9l3-2.5M2 12h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Export
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ marginLeft: 2 }}><path d="M3 4l2 2 2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            {exportOpen && (
              <div onClick={(e) => e.stopPropagation()} style={{
                position: "absolute", top: "calc(100% + 4px)", right: 0,
                background: "#FFFEFA", border: "1px solid #E0DDD6",
                borderRadius: 8, padding: 4, zIndex: 10, minWidth: 152,
                boxShadow: "0 4px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03)",
              }}>
                {[
                  { label: "PDF", icon: "M3 1h5l3 3v8a1 1 0 01-1 1H3a1 1 0 01-1-1V2a1 1 0 011-1z M8 1v3h3 M5 8h4 M5 10h4 M5 6h2" },
                  { label: "Markdown", icon: "M2 3h10v8H2z M4 8V6l1.5 2L7 6v2 M9 6v2m0 0l1-1m-1 1l-1-1" },
                ].map((fmt) => (
                  <button key={fmt.label} onClick={() => setExportOpen(false)} style={{
                    display: "flex", alignItems: "center", gap: 8, width: "100%",
                    textAlign: "left", padding: "8px 10px", fontSize: 13,
                    color: "var(--ink)", background: "none", border: "none",
                    borderRadius: 5, cursor: "pointer", fontFamily: "var(--font-sans)", fontWeight: 450,
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.background = "#F2EFEA"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "none"}
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
        </div>
      </div>

      {/* The document */}
      <div style={{
        maxWidth: 900, margin: "0 auto 80px", background: "#FFFEFA",
        boxShadow: "0 0 0 1px rgba(0,0,0,0.04), 0 2px 12px rgba(0,0,0,0.03)",
        borderRadius: 3,
        padding: "64px 80px 72px",
        fontFamily: "var(--font-sans)", fontSize: 14.5,
        lineHeight: 1.72, color: "var(--ink)",
      }}>

        {/* ─── HEADER ─── */}
        <div style={{ marginBottom: 48 }}>
          {/* Document number — the primary identifier */}
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 500,
            color: "var(--accent)", letterSpacing: "0.04em", marginBottom: 14,
          }}>
            {did.document_number}
          </div>

          {/* Title — large, confident, tight leading */}
          <h1 style={{
            fontSize: 30, fontWeight: 650, color: "var(--ink)",
            margin: 0, lineHeight: 1.2, letterSpacing: "-0.025em",
            maxWidth: 600,
          }}>
            {did.title}
          </h1>

          {/* Summary — set apart with lighter weight */}
          <p style={{
            fontSize: 15.5, fontWeight: 400, color: "#7A756C",
            margin: "16px 0 0 0", lineHeight: 1.65, maxWidth: 580,
          }}>
            {did.summary}
          </p>
        </div>

        {/* ─── METADATA GRID ─── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px 40px",
          paddingTop: 28,
          paddingBottom: 32,
          borderTop: "1px solid #E8E4DC",
          borderBottom: "1px solid #E8E4DC",
          marginBottom: 40,
        }}>
          <MetaPair label="Approval Date" value={formatDate(did.approval_date)} />
          <MetaPair label="AMSC Number" value={did.amsc_number} />
          <MetaPair label="Preparing Activity" value={did.preparing_activity} />
          <MetaPair label="Project Number" value={did.project_number} />
          {did.office_of_primary_responsibility && did.office_of_primary_responsibility !== "" && (
            <MetaPair label="OPR" value={did.office_of_primary_responsibility} />
          )}
          {did.dtic_applicable && did.dtic_applicable !== "N/A" && did.dtic_applicable !== "" && (
            <MetaPair label="DTIC Applicable" value={did.dtic_applicable} />
          )}
          {did.gidep_applicable && did.gidep_applicable !== "N/A" && did.gidep_applicable !== "" && (
            <MetaPair label="GIDEP Applicable" value={did.gidep_applicable} />
          )}
        </div>

        {/* ─── DISTRIBUTION STATEMENT ─── */}
        {did.distribution_statement && (
          <div style={{
            padding: "12px 16px", marginBottom: 40, fontSize: 13, lineHeight: 1.6,
            background: "#F6F9FD", borderLeft: "3px solid var(--accent)",
            borderRadius: "0 4px 4px 0",
            fontFamily: "var(--font-sans)", color: "#4A6A8A", fontWeight: 450,
          }}>
            {did.distribution_statement}
          </div>
        )}

        {/* ─── SUPERSEDES & RELATED ─── */}
        {((did.supersedes && did.supersedes.length > 0) || (did.related_dids && did.related_dids.length > 0)) && (
          <div style={{
            display: "flex", gap: 48, marginBottom: 48,
          }}>
            {did.supersedes && did.supersedes.length > 0 && (
              <div>
                <div style={{ fontSize: 11, fontWeight: 500, color: "#AAA59C", letterSpacing: "0.03em", marginBottom: 8 }}>
                  Supersedes
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {did.supersedes.map((s) => (
                    <span key={s} style={{
                      fontFamily: "var(--font-mono)", fontSize: 12.5, fontWeight: 450,
                      color: "#7A756C", background: "#F2EFEA", padding: "4px 10px",
                      borderRadius: 4,
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            )}
            {did.related_dids && did.related_dids.length > 0 && (
              <div>
                <div style={{ fontSize: 11, fontWeight: 500, color: "#AAA59C", letterSpacing: "0.03em", marginBottom: 8 }}>
                  Related
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {did.related_dids.map((r) => (
                    <span key={r} style={{
                      fontFamily: "var(--font-mono)", fontSize: 12.5, fontWeight: 450,
                      color: "#7A756C", background: "#F2EFEA", padding: "4px 10px",
                      borderRadius: 4,
                    }}>{r}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ─── USE & RELATIONSHIP ─── */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Use &amp; Relationship</SectionLabel>
          <div style={{ marginTop: 16, color: "#5C574E", fontSize: 14.5 }}>
            {did.use_relationship.split("\n").filter(Boolean).map((para, i) => (
              <p key={i} style={{ margin: "0 0 12px 0" }}>{para}</p>
            ))}
          </div>
        </div>

        {/* ─── REQUIREMENTS ─── */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>Requirements</SectionLabel>
          {did.requirements.map((req) => (
            <Requirement key={req.number} req={req} depth={0} />
          ))}
        </div>

        {/* ─── REFERENCES ─── */}
        {did.references && did.references.length > 0 && (
          <div style={{ marginBottom: 48 }}>
            <SectionLabel>References</SectionLabel>
            <div style={{ marginTop: 16 }}>
              {did.references.map((ref, i) => (
                <p key={i} style={{ fontSize: 14, color: "#5C574E", margin: "0 0 6px 0" }}>
                  {ref.label}{" "}
                  <a href={ref.url} target="_blank" rel="noopener" style={{
                    color: "var(--accent)", textDecoration: "none",
                    borderBottom: "1px solid transparent",
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = "var(--accent)"}
                    onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = "transparent"}
                  >{ref.url}</a>
                </p>
              ))}
            </div>
          </div>
        )}

        {/* ─── FOOTER ─── */}
        <div style={{
          paddingTop: 32, borderTop: "1px solid #E8E4DC",
          display: "flex", justifyContent: "space-between", alignItems: "baseline",
        }}>
          <span style={{ fontSize: 11, color: "#C4BFB6", fontFamily: "var(--font-mono)", fontWeight: 400 }}>
            Schema v{did._schema_version}
          </span>
          <span style={{ fontSize: 11.5, color: "#B0AA9E", fontWeight: 400 }}>
            Community-maintained · Verify against{" "}
            <a href="https://assist.dla.mil" target="_blank" rel="noopener" style={{
              color: "var(--accent)", textDecoration: "none",
            }}>ASSIST</a>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Search Page ── */
function SearchPage({ onSelect }) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const hasQuery = query.length >= 2;
  const results = !hasQuery ? [] : ALL_DIDS.filter((did) => {
    const q = query.toLowerCase();
    const haystack = [
      did.document_number, did.title, did.summary, did.use_relationship,
      ...did.requirements.map((r) => r.title + " " + r.content),
      ...(did.requirements.flatMap((r) => (r.children || []).map((c) => c.title + " " + c.content))),
    ].join(" ").toLowerCase();
    return haystack.includes(q);
  });

  return (
    <div style={{
      minHeight: "100vh", background: "var(--bg-warm)",
      display: "flex", flexDirection: "column", alignItems: "center",
      paddingTop: 64,
    }}>
      {/* Branding */}
      <div style={{
        textAlign: "center", marginBottom: 28,
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 9, background: "var(--accent)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          marginBottom: 14, boxShadow: "0 2px 10px rgba(97,170,242,0.25)",
        }}>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: 20, fontFamily: "var(--font-mono)" }}>D</span>
        </div>
        <h1 style={{
          fontSize: 26, fontWeight: 700, color: "var(--ink)", margin: "0 0 4px 0",
          fontFamily: "var(--font-serif)", letterSpacing: "-0.015em",
        }}>
          DID Registry
        </h1>
        <p style={{ fontSize: 14, color: "#8B8579", margin: 0, fontFamily: "var(--font-sans)" }}>
          Search the open-source Data Item Description repository
        </p>
      </div>

      {/* Search input */}
      <div style={{ width: "100%", maxWidth: 680, padding: "0 24px" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 10, padding: "13px 16px",
          background: "#FFFEFA", borderRadius: 8,
          border: focused ? "1.5px solid var(--accent)" : "1.5px solid #DDD8CE",
          boxShadow: focused
            ? "0 0 0 3px rgba(97,170,242,0.12), 0 2px 8px rgba(40,60,80,0.06)"
            : "0 1px 3px rgba(80,60,20,0.04)",
          transition: "all 0.15s ease",
        }}>
          <svg width="17" height="17" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
            <circle cx="7.5" cy="7.5" r="5.5" stroke={focused ? "var(--accent)" : "#B0AA9E"} strokeWidth="1.4" />
            <path d="M12 12l4 4" stroke={focused ? "var(--accent)" : "#B0AA9E"} strokeWidth="1.4" strokeLinecap="round" />
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
              flex: 1, border: "none", outline: "none", background: "none",
              fontSize: 14.5, color: "var(--ink)", fontFamily: "var(--font-sans)",
            }}
          />
          {query && (
            <button onClick={() => setQuery("")} style={{
              background: "none", border: "none", color: "#B0AA9E", cursor: "pointer",
              fontSize: 18, lineHeight: 1, padding: 0,
            }}>×</button>
          )}
        </div>
      </div>

      {/* Results */}
      {hasQuery && (
        <div style={{ width: "100%", maxWidth: 680, padding: "0 24px" }}>
          <div style={{
            fontSize: 11.5, color: "#B0AA9E", padding: "14px 0 6px",
            fontFamily: "var(--font-sans)", letterSpacing: "0.02em",
          }}>
            {results.length} result{results.length !== 1 ? "s" : ""}
          </div>

          {results.map((did) => (
            <div key={did.slug}
              onClick={() => onSelect(did)}
              style={{
                padding: "13px 0", borderBottom: "1px solid #E8E3DA",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(97,170,242,0.05)";
                e.currentTarget.querySelector("[data-num]").style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.querySelector("[data-num]").style.color = "#8B8579";
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                <span data-num="true" style={{
                  fontFamily: "var(--font-mono)", fontSize: 12.5, fontWeight: 600,
                  color: "#8B8579", flexShrink: 0, transition: "color 0.1s",
                  width: 136, display: "inline-block",
                }}>
                  {did.document_number}
                </span>
                <span style={{
                  fontSize: 14, fontWeight: 600, color: "var(--ink)",
                  fontFamily: "var(--font-sans)", flex: 1,
                }}>
                  {did.title}
                </span>
                <span style={{
                  fontSize: 12, color: "#B0AA9E", fontFamily: "var(--font-mono)", flexShrink: 0,
                }}>
                  {did.approval_date}
                </span>
              </div>
            </div>
          ))}

          {results.length === 0 && (
            <div style={{
              padding: "36px 0", textAlign: "center", color: "#B0AA9E",
              fontSize: 14, fontFamily: "var(--font-sans)",
            }}>
              No documents found.
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div style={{
        marginTop: "auto", paddingTop: 48, paddingBottom: 24, textAlign: "center",
        fontSize: 11.5, color: "#B0AA9E", fontFamily: "var(--font-sans)", lineHeight: 1.5,
      }}>
        Community-maintained — not an official government database.
        <br />
        Verify against <a href="https://assist.dla.mil" target="_blank" rel="noopener" style={{ color: "var(--accent)", textDecoration: "none" }}>ASSIST</a>
        <span style={{ margin: "0 6px", opacity: 0.35 }}>·</span>
        <a href="https://github.com" target="_blank" rel="noopener" style={{ color: "var(--accent)", textDecoration: "none" }}>GitHub</a>
      </div>
    </div>
  );
}

/* ── App ── */
export default function App() {
  const [view, setView] = useState("search");
  const [selectedDID, setSelectedDID] = useState(null);

  return (
    <div style={{
      "--font-sans": "'Geist', -apple-system, BlinkMacSystemFont, sans-serif",
      "--font-serif": "'Geist', -apple-system, BlinkMacSystemFont, sans-serif",
      "--font-mono": "'Geist Mono', 'SF Mono', Menlo, Consolas, monospace",
      "--bg-warm": "#F5F1EB",
      "--sidebar-bg": "#EDE9E1",
      "--ink": "#302D28",
      "--ink-body": "#504A40",
      "--accent": "#61AAF2",
      "--rule": "#D8D2C6",
      "--rule-light": "#E8E3DA",
    }}>
      <link href="https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-sans/style.min.css" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/geist@1.3.1/dist/fonts/geist-mono/style.min.css" rel="stylesheet" />
      <style>{`
        ::placeholder { color: #B0AA9E; }
        ::selection { background: #D4E6FA; }
        * { box-sizing: border-box; margin: 0; }
        body { margin: 0; background: #F5F1EB; }
        a { transition: color 0.1s; }
      `}</style>

      {view === "search" && (
        <SearchPage onSelect={(did) => { setSelectedDID(did); setView("detail"); }} />
      )}
      {view === "detail" && selectedDID && (
        <DIDDocumentPage did={selectedDID} onBack={() => { setView("search"); setSelectedDID(null); }} />
      )}
    </div>
  );
}