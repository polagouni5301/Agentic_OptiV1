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
const decisionCaptureStore: DecisionCaptureRecord[] = [];

function readRecords(): DecisionCaptureRecord[] {
  if (decisionCaptureStore.length > 0) {
    return [...decisionCaptureStore];
  }

  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return [];

    const parsed = JSON.parse(raw) as DecisionCaptureRecord[];
    decisionCaptureStore.splice(0, decisionCaptureStore.length, ...parsed);
    return [...parsed];
  } catch {
    return [];
  }
}

function writeRecords(records: DecisionCaptureRecord[]) {
  decisionCaptureStore.splice(0, decisionCaptureStore.length, ...records);

  if (typeof window !== "undefined") {
    window.localStorage.setItem(storageKey, JSON.stringify(records));
  }
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
  decisionCaptureStore.splice(0, decisionCaptureStore.length);

  if (typeof window !== "undefined") {
    window.localStorage.removeItem(storageKey);
  }
}
