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
  data?: Record<string, unknown>;
}

export async function submitDecisionCapture(payload: DecisionCapturePayload): Promise<DecisionCaptureResponse> {
  const endpoint = "/api/decision-capture";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json().catch(() => ({}));

    return {
      ok: true,
      data,
      message: "Decision capture submitted successfully.",
    };
  } catch (error) {
    return {
      ok: false,
      storedLocally: true,
      message:
        error instanceof Error ? error.message : "Unable to submit decision capture right now.",
    };
  }
}
