export interface DecisionCapturePayload {
  campaignId: string;
  campaignName?: string;
  recommendation?: string;
  result: string | null;
  meta: {
    kind: string;
    note?: string;
    reason?: string;
  };
  createdAt?: string;
}

export interface DecisionCaptureResponse {
  ok: boolean;
  storedLocally?: boolean;
  message?: string;
  data?: unknown;
}

const storageKey = "scout-decision-captures";

function readStoredCaptures(): DecisionCapturePayload[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(storageKey);
    return raw ? (JSON.parse(raw) as DecisionCapturePayload[]) : [];
  } catch {
    return [];
  }
}

function writeStoredCaptures(records: DecisionCapturePayload[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(storageKey, JSON.stringify(records));
}

export async function submitDecisionCapture(payload: DecisionCapturePayload): Promise<DecisionCaptureResponse> {
  const record: DecisionCapturePayload = {
    ...payload,
    createdAt: payload.createdAt ?? new Date().toISOString(),
  };

  const existing = readStoredCaptures();
  const next = [record, ...existing].slice(0, 200);
  writeStoredCaptures(next);

  return {
    ok: true,
    storedLocally: true,
    message: "Decision capture saved locally.",
    data: next,
  };
}
