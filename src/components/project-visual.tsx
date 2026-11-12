import { ArrowDownRight, ArrowUpRight, Braces, Database, Layers3, Network, ScanLine } from "lucide-react";

type VisualType = "commerce" | "research" | "automl" | "geospatial";

export function ProjectVisual({ type, compact = false }: { type: VisualType; compact?: boolean }) {
  if (type === "commerce") {
    return (
      <div className={`project-visual visual-commerce${compact ? " is-compact" : ""}`} aria-label="Illustrative commerce system architecture visual">
        <div className="visual-topline"><span>COMMERCE / SYSTEM MAP</span><span>01 — 04</span></div>
        <div className="commerce-map">
          <div className="commerce-node storefront"><Layers3 size={18} /><b>Storefront</b><small>Next.js · React</small></div>
          <div className="commerce-connector"><span /></div>
          <div className="commerce-node api"><Network size={18} /><b>API layer</b><small>Spring Boot</small></div>
          <div className="commerce-connector"><span /></div>
          <div className="commerce-db"><Database size={18} /><b>PostgreSQL</b><small>Commerce data</small></div>
        </div>
        <div className="visual-footline"><span>IDENTITY</span><span>CATALOG</span><span>ORDERS</span><span>INVENTORY</span></div>
      </div>
    );
  }

  if (type === "research") {
    return (
      <div className={`project-visual visual-research${compact ? " is-compact" : ""}`} aria-label="Illustrative reward modeling comparison visual">
        <div className="visual-topline"><span>PAIRWISE EVALUATION</span><span>02 — 04</span></div>
        <div className="ranking-panel">
          <div className="ranking-row"><span>Response A</span><div className="rank-track"><i style={{ width: "78%" }} /></div><b>0.78</b></div>
          <div className="ranking-row"><span>Response B</span><div className="rank-track"><i style={{ width: "61%" }} /></div><b>0.61</b></div>
          <div className="ranking-row"><span>Response C</span><div className="rank-track"><i style={{ width: "43%" }} /></div><b>0.43</b></div>
        </div>
        <div className="research-foot"><span><Braces size={14} /> REWARD MODELING</span><span>PAIRWISE RANKING</span></div>
      </div>
    );
  }

  if (type === "automl") {
    return (
      <div className={`project-visual visual-automl${compact ? " is-compact" : ""}`} aria-label="Illustrative dataset meta-feature visualization">
        <div className="visual-topline"><span>DATASET PROFILE</span><span>03 — 04</span></div>
        <div className="scatter-stage">
          <div className="scatter-axis axis-x" /><div className="scatter-axis axis-y" />
          {Array.from({ length: 25 }, (_, index) => (
            <i key={index} className={`scatter-dot dot-${index % 5}`} style={{ left: `${13 + ((index * 17) % 75)}%`, top: `${14 + ((index * 29) % 68)}%` }} />
          ))}
          <div className="scatter-callout"><span>RECOMMENDED</span><b>KNN Meta-Learner</b><small>Distance-weighted match</small></div>
        </div>
        <div className="visual-footline"><span>32 META-FEATURES</span><span>MODEL RECOMMENDATION</span></div>
      </div>
    );
  }

  return (
    <div className={`project-visual visual-geospatial${compact ? " is-compact" : ""}`} aria-label="Illustrative satellite segmentation change detection visual">
      <div className="visual-topline"><span>LAND-COVER CHANGE</span><span>04 — 04</span></div>
      <div className="geo-panels">
        <div className="geo-panel geo-before"><span>EARLIER</span><div className="geo-grid" /></div>
        <div className="geo-arrow"><ArrowUpRight size={18} /></div>
        <div className="geo-panel geo-after"><span>LATER</span><div className="geo-grid" /></div>
      </div>
      <div className="visual-footline"><span><ScanLine size={13} /> U-NET SEGMENTATION</span><span><ArrowDownRight size={13} /> TEMPORAL ANALYSIS</span></div>
    </div>
  );
}
