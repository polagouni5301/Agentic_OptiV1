export const campaignDetails = {
  "5212017": {
    kind: "healthy",
    label: "INFORMATIONAL",
    headline: {
      title: "Acme Plumbing is healthy.",
      subtitle: "One thing worth knowing.",
    },
    subhead:
      "Utilization 0.94 (in range), CPL $48 vs $50 goal, CVR 3.8% (in range). KBAS and XBAS have made only routine in-band adjustments — no manual intervention needed in 14 days.",
    evidence: 5,
    clarity: 5,
    safety: 5,
    safetyLabel: "All sub-bands healthy",
    lastAction: "11 days ago · KBAS",
    diagnosedIn: "11.4s",
    appliedTitle: "Acknowledged.",
    appliedChange: {
      title: "Logged a check-in.",
      subtitle: "Scout will re-scan in 7 days.",
    },
    appliedCopy:
      "Campaign is pacing well at $48 CPL against a $50 goal. No changes needed this cycle.",
    historyTitle: null,
    history: [
      { label: "KBAS", title: "Daily budget WPCID 12345", sub: "$38 → $40 · Routine", ago: "3d ago" },
      { label: "XBAS", title: "Bid strategy refresh", ago: "6d ago" },
    ],
    reasoning: [
      {
        title: "CAMPAIGN STATE",
        body: "All headline metrics inside their normal bands. Utilization 0.94, CPL $48 vs $50 goal, CVR 3.8%, ROAS in line with the vertical benchmark.",
        chips: ["Util 0.94", "CPL $48 / $50", "CVR 3.8%"],
      },
      {
        title: "AUTOMATION ACTIVITY",
        body: "KBAS rebalanced WPCID 12345 three days ago — a routine in-band shift on the 3-day schedule, within publisher KBAS bounds. No manual intervention needed in 14 days.",
        chips: ["KBAS · routine", "No manual touch · 14d"],
      },
      {
        title: "WORTH MONITORING",
        body: "CPC trended +12% over the last 14 days. Not actionable today, but worth flagging for the next client check-in.",
        chips: ["CPC +12% · 14d"],
      },
    ],
    whatIChecked: [
      "Utilization vs cycle target",
      "CPL vs goal and 28d baseline",
      "Publisher distribution",
      "Change history",
      "Keyword-level performance",
    ],
    whatsMissing: "No client-context notes provided",
    evidenceSections: [
      {
        label: "HEALTH SNAPSHOT",
        headline: "All metrics inside their normal bands.",
        type: "metrics",
        metrics: [
          { label: "UTILIZATION", value: "0.94", vs: "vs 1.00", tone: "ok" },
          { label: "CPL (7D)", value: "$48", vs: "vs $50", tone: "ok" },
          { label: "CVR (7D)", value: "3.8%", vs: "vs 3.5%+", tone: "ok" },
          { label: "CPC TREND", value: "+12%", vs: "vs flat", tone: "warn" },
        ],
      },
    ],
    action: {
      title: "WHAT YOU CAN DO",
      heading: "No change needed this cycle",
      body: "Healthy campaigns don't need touch. Acknowledge to log a check-in and free your attention for the ones that do.",
      buttonLabel: "Acknowledge",
    },
  },
  "7720915": {
    kind: "investigate",
    label: "INVESTIGATE",
    headline: {
      title: "Acme Roofing CVR dropped 45% —",
      subtitle: "the signal points downstream.",
    },
    subhead:
      "The drop is uniform across keywords and publishers with click volume stable. That pattern almost always means landing page or tracking, not the ad.",
    evidence: 3,
    clarity: 4,
    safety: 1,
    safetyLabel: "No autonomous action — investigate only",
    lastAction: "4 days ago · XBAS",
    diagnosedIn: "11.4s",
    appliedTitle: "Opening the LP & tracking screen.",
    appliedChange: {
      title: "This one needs your eyes — there's no direct lever I can pull.",
      subtitle: "I've pre-loaded the checks below so you don't have to start from zero.",
    },
    appliedCopy:
      "Investigated landing-page and tracking — checked conversion pixel, form submission, GA4 vs ad-platform parity, and recent LP changes.",
    history: [
      { label: "XBAS", title: "Bid strategy refresh", ago: "4d ago" },
      { label: "You", title: "Added 5 negatives", ago: "12d ago" },
    ],
    reasoning: [
      {
        title: "CAMPAIGN STATE",
        body: "CVR fell from 4.2% to 2.3% over 7 days. Clicks and keyword mix are flat — the volume side of the funnel didn't change.",
        chips: ["CVR 2.3% (7d)", "Baseline 4.2%", "−45%"],
      },
      {
        title: "DISTRIBUTION",
        body: "The drop is uniform across all 4 publishers and the top 20 keywords. No segment is concentrated.",
        chips: ["4 publishers · uniform", "Top 20 keywords · uniform"],
      },
      {
        title: "AUTOMATION ACTIVITY",
        body: "XBAS refreshed bids 4 days ago — routine on the 3-day schedule and well in-band. Shouldn't drive a 45% CVR drop. No structural campaign change in 14 days.",
        chips: ["XBAS · routine", "No structural change"],
      },
      {
        title: "INTERPRETATION",
        body: "Uniform drop with no campaign-side cause is the fingerprint of a downstream change — landing page edit, form regression, or a tracking pixel that's no longer firing. No campaign-side lever applies.",
        chips: ["Downstream signal", "No direct lever"],
      },
    ],
    whatIChecked: [
      "CVR by keyword (top 20)",
      "CVR by publisher",
      "Click + impression trend",
      "Change log (14d)",
      "KBAS / XBAS state",
    ],
    whatsMissing: "LP analytics and tag-firing data not in evidence package",
    evidenceSections: [
      {
        label: "PUBLISHER DISTRIBUTION · LAST 7 DAYS",
        headline: "Drop is uniform across all publishers.",
        type: "publisher-bars",
        data: [
          { p: "WPCID 12346", v: 1812, share: "43%", cpl: "$74", cvr: "2.4%", color: "oklch(0.48 0.16 245)" },
          { p: "WPCID 12345", v: 1140, share: "27%", cpl: "$69", cvr: "2.2%", color: "oklch(0.62 0.2 200)" },
          { p: "WPCID 12347", v: 850, share: "20%", cpl: "$71", cvr: "2.3%", color: "oklch(0.78 0.16 80)" },
          { p: "WPCID 12348", v: 430, share: "10%", cpl: "$78", cvr: "2.1%", color: "oklch(0.62 0.2 38)" },
        ],
      },
      {
        label: "CVR · LAST 14 DAYS",
        headline: "4.2% → 2.3% — uniform across segments.",
        type: "spark-chart",
        chartKind: "cvr-down",
      },
    ],
    action: {
      title: "INVESTIGATE · NO DIRECT LEVER",
      heading: "Open the evidence pack",
      body: "Deep-links to the LP + tracking screen with checks pre-loaded.",
      buttonLabel: "Take me there",
      buttonSecondaryLabel: "Not now",
      checks: [
        "Landing page form submits — fire a test lead",
        "Conversion tag firing on the thank-you page (GTM preview)",
        "Recent LP changes in the last 14 days (ask the AM)",
        "Compare CVR drop start date against publishing dates",
      ],
    },
  },
  "3140833": {
    kind: "actionable-pacing",
    label: "ACTIONABLE",
    headline: {
      title: "Cool-O-Matic is 35% over target",
      subtitle: "with 8 days left.",
    },
    subhead:
      "Spend is concentrated on WPCID 12346 — the publisher KBAS hasn't touched. At current pace, the campaign spends out 5 days early.",
    evidence: 5,
    clarity: 4,
    safety: 5,
    safetyLabel: "≤20% budget change per action",
    lastAction: "2 days ago · KBAS",
    diagnosedIn: "11.4s",
    appliedTitle: "Applied. Nice.",
    appliedChange: {
      title: "WPCID 12346 — Google Search daily budget $75 → $65/day",
      subtitle: "",
    },
    appliedCopy:
      "Reduced WPCID 12346 daily budget from $75 to $65 to bring cycle pacing in band. Watching at +1d, +3d, +7d.",
    historyTitle: "KBAS already tried — but it only touched one publisher.",
    history: [
      { label: "KBAS", title: "Daily budget WPCID 12345", sub: "$40 → $33 · Auto-correct", ago: "2d ago" },
      { label: "You", title: "Added negatives (3 keywords)", ago: "5d ago" },
      { label: "KBAS", title: "Daily budget WPCID 12346", sub: "$70 → $75 · Auto", ago: "9d ago" },
    ],
    reasoning: [
      {
        title: "CAMPAIGN STATE",
        body: "Pacing at 1.35 with 8 days remaining on a $7,000 cycle budget. That's $9,420 spent against a $5,133 to-date target.",
        chips: ["$9,420 actual", "$5,133 expected", "Utilization 1.35"],
      },
      {
        title: "WHAT CHANGED",
        body: "KBAS reduced WPCID 12345 daily budget from $40 → $33 two days ago — automation responding to the overspend. But it addressed the smaller publisher.",
        chips: ["KBAS: $40→$33", "2 days ago"],
      },
      {
        title: "PUBLISHER DISTRIBUTION",
        body: "WPCID 12346 (Google Search) now accounts for 80% of last 7d spend at $75/day — $15 above the daily rate needed to land at cycle target. WPCID 12345 is correctly paced post-adjustment.",
        chips: ["WPCID 12346 · 80% spend", "$75/day budget", "$60/day target"],
      },
      {
        title: "PROJECTION",
        body: "At current daily rate, the campaign spends out around Day 25 of a 30-day cycle. That's the kind of overspend that triggers a credit.",
        chips: ["Spend-out: Day 25", "Cycle end: Day 30"],
      },
    ],
    whatIChecked: [
      "Utilization vs cycle target",
      "CPL vs goal & 28-day baseline",
      "Publisher distribution (4 publishers)",
      "Change history (last 14 days)",
      "KBAS / XBAS state",
      "Smart Bidding constraint",
    ],
    whatsMissing: "No client-context note this invocation",
    evidenceSections: [
      {
        label: "PACING UTILIZATION · CYCLE TO DATE",
        headline: "You'll spend out 5 days early at this rate.",
        type: "spark-chart",
        chartKind: "pacing",
      },
      {
        label: "PUBLISHER DISTRIBUTION · LAST 7 DAYS",
        headline: "80% of spend on a single publisher.",
        type: "publisher-bars",
        data: [
          { p: "WPCID 12346", v: 5712, share: "80%", cpl: "$51", cvr: "3.4%", color: "oklch(0.62 0.2 38)" },
          { p: "WPCID 12345", v: 1141, share: "16%", cpl: "$48", cvr: "3.8%", color: "oklch(0.48 0.16 245)" },
          { p: "Other (3)", v: 285, share: "4%", cpl: "$62", cvr: "2.9%", color: "oklch(0.7 0.02 260)" },
        ],
      },
    ],
    action: {
      title: "RECOMMENDED ACTION",
      heading: "Reduce WPCID 12346 daily budget",
      body: "WPCID 12346 — Google Search",
      buttonLabel: "Apply this change",
      secondaryText: "You're tuning the amount above — that's your call.",
      note: "If applied: I'll re-check pacing at +1d, +3d, and +7d to confirm the cycle lands in band.",
      currentBudget: "$75",
    },
  },
  "4881204": {
    kind: "actionable-cpl",
    label: "ACTIONABLE",
    headline: {
      title: "CPL on Mountain View Plumbing is up 35% —",
      subtitle: "three keywords are the cause.",
    },
    subhead:
      "Click and impression volume are stable. The cost is being absorbed by three broad-match keywords pulling informational queries.",
    evidence: 4,
    clarity: 4,
    safety: 5,
    safetyLabel: "Negatives are reversible",
    lastAction: "yesterday · you",
    diagnosedIn: "11.4s",
    appliedTitle: "Applied. Nice.",
    appliedChange: {
      title: "Add 3 phrase-match negatives.",
      subtitle: "I'll watch CPL at +1d, +3d, and +7d to confirm the non-converting spend is gone — and that no good queries got caught.",
    },
    appliedCopy:
      "Added phrase-match negatives -\"how to\", -\"cost\", -\"prices\" to suppress informational queries on broad-match terms.",
    history: [
      { label: "You", title: "Increased budget", sub: "$160/d → $175/d", ago: "1d ago" },
      { label: "XBAS", title: "Bid strategy refresh", ago: "7d ago" },
    ],
    reasoning: [
      {
        title: "CAMPAIGN STATE",
        body: "CPL increased from $42 → $57 over the last 7 days vs a $45 goal. Clicks and impressions are flat — this is a conversion-efficiency issue, not a volume one.",
        chips: ["CPL $57 (7d)", "Goal $45", "+35%"],
      },
      {
        title: "KEYWORD CONCENTRATION",
        body: "Three broad-match terms — hvac companies near me, heating system cost, and ac unit prices — consume 40% of spend with zero conversions in 14 days.",
        chips: ["3 keywords · 40% spend", "0 conversions · 14d"],
      },
      {
        title: "INTERPRETATION",
        body: "These read as informational queries (research intent), not service intent. Match-type and search-term patterns confirm they're catching upper-funnel traffic.",
        chips: ["Broad match", "Informational intent"],
      },
      {
        title: "AUTOMATION ACTIVITY",
        body: "XBAS refreshed bids 7 days ago — routine on the 3-day schedule, in-band. No structural campaign change explains the CPL move.",
        chips: ["XBAS · routine", "No structural change"],
      },
    ],
    whatIChecked: [
      "CPL trend (28d)",
      "Keyword cost concentration",
      "Match-type breakdown",
      "Quality Score",
      "Search-term sample (top 50)",
      "Conversion attribution coverage",
    ],
    whatsMissing: "Search-term report sample is 14d — broader window may surface more",
    evidenceSections: [
      {
        label: "CPL · LAST 14 DAYS",
        headline: "$42 → $57 against a $45 goal.",
        type: "spark-chart",
        chartKind: "cpl-up",
      },
      {
        label: "TOP KEYWORDS BY 7-DAY SPEND",
        headline: "Three of the top five drove zero conversions.",
        type: "keyword-table",
        data: [
          { kw: "hvac companies near me", match: "BROAD", spend: "$412", conv: "0", cpl: "—", bad: true },
          { kw: "heating system cost", match: "BROAD", spend: "$298", conv: "0", cpl: "—", bad: true },
          { kw: "ac unit prices", match: "BROAD", spend: "$241", conv: "0", cpl: "—", bad: true },
          { kw: "plumber near me", match: "PHRASE", spend: "$188", conv: "6", cpl: "$31", bad: false },
          { kw: "emergency plumber", match: "EXACT", spend: "$142", conv: "5", cpl: "$28", bad: false },
        ],
      },
    ],
    action: {
      title: "RECOMMENDED ACTION",
      heading: "Add 3 phrase-match negatives",
      buttonLabel: "Add negatives",
      tags: ["-\"how to\"", "-\"cost\"", "-\"prices\""],
      body: "If applied: I'll watch CPL at +1d, +3d, and +7d to confirm the non-converting spend is gone — and that no good queries got caught.",
    },
  },
  "6620331": {
    kind: "healthy",
    label: "INFORMATIONAL",
    headline: {
      title: "Bright Smile Dental is steady.",
      subtitle: "Watch non-brand share.",
    },
    subhead:
      "Brand impression share is solid. Non-brand share has slipped from 78% to 61% over 14 days — worth a check-in at the next client call.",
    evidence: 4,
    clarity: 4,
    safety: 5,
    safetyLabel: "Monitor — no action yet",
    lastAction: "13 days ago · KBAS",
    diagnosedIn: "10.8s",
    appliedTitle: "Acknowledged.",
    appliedChange: {
      title: "Logged for next client conversation.",
      subtitle: "Scout will re-check in 5 days.",
    },
    appliedCopy:
      "Non-brand impression share down to 61% from 78%. Flagged for client check-in.",
    history: [
      { label: "KBAS", title: "Daily budget WPCID 12345", sub: "$38 → $40 · Routine", ago: "3d ago" },
      { label: "XBAS", title: "Bid strategy refresh", ago: "6d ago" },
    ],
    reasoning: [
      {
        title: "CAMPAIGN STATE",
        body: "All headline metrics inside their normal bands. Utilization 0.94, CPL $48 vs $50 goal, CVR 3.8%, ROAS in line with the vertical benchmark.",
        chips: ["Util 0.94", "CPL $48 / $50", "CVR 3.8%"],
      },
      {
        title: "AUTOMATION ACTIVITY",
        body: "KBAS rebalanced WPCID 12345 three days ago — a routine in-band shift on the 3-day schedule, within publisher KBAS bounds. No manual intervention needed in 14 days.",
        chips: ["KBAS · routine", "No manual touch · 14d"],
      },
      {
        title: "WORTH MONITORING",
        body: "CPC trended +12% over the last 14 days. Not actionable today, but worth flagging for the next client check-in.",
        chips: ["CPC +12% · 14d"],
      },
    ],
    whatIChecked: [
      "Utilization vs cycle target",
      "CPL vs goal and 28d baseline",
      "Publisher distribution",
      "Change history",
      "Keyword-level performance",
    ],
    whatsMissing: "No client-context notes provided",
    evidenceSections: [
      {
        label: "HEALTH SNAPSHOT",
        headline: "All metrics inside their normal bands.",
        type: "metrics",
        metrics: [
          { label: "UTILIZATION", value: "0.94", vs: "vs 1.00", tone: "ok" },
          { label: "CPL (7D)", value: "$48", vs: "vs $50", tone: "ok" },
          { label: "CVR (7D)", value: "3.8%", vs: "vs 3.5%+", tone: "ok" },
          { label: "CPC TREND", value: "+12%", vs: "vs flat", tone: "warn" },
        ],
      },
    ],
    action: {
      title: "WHAT YOU CAN DO",
      heading: "No change needed this cycle",
      body: "Healthy campaigns don't need touch. Acknowledge to log a check-in and free your attention for the ones that do.",
      buttonLabel: "Acknowledge",
    },
  },
  "9013477": {
    kind: "healthy",
    label: "INFORMATIONAL",
    headline: {
      title: "Harbor & Vale just had its best week.",
      subtitle: "Here's what worked.",
    },
    subhead:
      "Conversions doubled (21 → 42) over 7 days, paced by the new landing page you shipped last week. CPL down to $28 from $41.",
    evidence: 5,
    clarity: 5,
    safety: 5,
    safetyLabel: "Keep current bids",
    lastAction: "2 days ago · you",
    diagnosedIn: "9.2s",
    appliedTitle: "Logged the win.",
    appliedChange: {
      title: "Recorded the LP swap as the cause.",
      subtitle: "Pattern will be suggested next time.",
    },
    appliedCopy:
      "LP swap drove 2× conversions at a 32% lower CPL. Documented as a winning pattern.",
    history: [
      { label: "KBAS", title: "Daily budget WPCID 12345", sub: "$38 → $40 · Routine", ago: "3d ago" },
      { label: "XBAS", title: "Bid strategy refresh", ago: "6d ago" },
    ],
    reasoning: [
      {
        title: "CAMPAIGN STATE",
        body: "All headline metrics inside their normal bands. Utilization 0.94, CPL $48 vs $50 goal, CVR 3.8%, ROAS in line with the vertical benchmark.",
        chips: ["Util 0.94", "CPL $48 / $50", "CVR 3.8%"],
      },
      {
        title: "AUTOMATION ACTIVITY",
        body: "KBAS rebalanced WPCID 12345 three days ago — a routine in-band shift on the 3-day schedule, within publisher KBAS bounds. No manual intervention needed in 14 days.",
        chips: ["KBAS · routine", "No manual touch · 14d"],
      },
      {
        title: "WORTH MONITORING",
        body: "CPC trended +12% over the last 14 days. Not actionable today, but worth flagging for the next client check-in.",
        chips: ["CPC +12% · 14d"],
      },
    ],
    whatIChecked: [
      "Utilization vs cycle target",
      "CPL vs goal and 28d baseline",
      "Publisher distribution",
      "Change history",
      "Keyword-level performance",
    ],
    whatsMissing: "No client-context notes provided",
    evidenceSections: [
      {
        label: "HEALTH SNAPSHOT",
        headline: "All metrics inside their normal bands.",
        type: "metrics",
        metrics: [
          { label: "UTILIZATION", value: "0.94", vs: "vs 1.00", tone: "ok" },
          { label: "CPL (7D)", value: "$48", vs: "vs $50", tone: "ok" },
          { label: "CVR (7D)", value: "3.8%", vs: "vs 3.5%+", tone: "ok" },
          { label: "CPC TREND", value: "+12%", vs: "vs flat", tone: "warn" },
        ],
      },
    ],
    action: {
      title: "WHAT YOU CAN DO",
      heading: "No change needed this cycle",
      body: "Healthy campaigns don't need touch. Acknowledge to log a check-in and free your attention for the ones that do.",
      buttonLabel: "Acknowledge",
    },
  },
};

export function getCampaignDetail(id) {
  return campaignDetails[id] ?? campaignDetails["5212017"];
}
