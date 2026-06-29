export interface DecisionCaptureRecord {
  campaignId: string;
  campaignName?: string;
  recommendation?: string;
  result: string | null;
  meta: {
    kind: string;
    note?: string;
    reason?: string;
  };
  createdAt: string;
}

const storageKey = "scout-decision-captures";

function readRecords(): DecisionCaptureRecord[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(storageKey);
    return raw ? (JSON.parse(raw) as DecisionCaptureRecord[]) : [];
  } catch {
    return [];
  }
}

function writeRecords(records: DecisionCaptureRecord[]) {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(storageKey, JSON.stringify(records));
}

export function getDecisionCaptureRecords(campaignId?: string): DecisionCaptureRecord[] {
  const records = readRecords();

  if (!campaignId) return records;
  return records.filter((record) => record.campaignId === campaignId);
}

export function saveDecisionCaptureRecord(record: DecisionCaptureRecord) {
  const records = readRecords();
  const next = [record, ...records].slice(0, 200);
  writeRecords(next);
  return next;
}

export function clearDecisionCaptureRecords() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(storageKey);
}
