import { useCallback } from "react";
import { submitDecisionCapture, type DecisionCapturePayload } from "../lib/api/decisionCapture";

export function useDecisionCapture() {
  const submitCapture = useCallback(async (payload: DecisionCapturePayload) => {
    const record: DecisionCapturePayload = {
      ...payload,
      createdAt: payload.createdAt ?? new Date().toISOString(),
    };

    const response = await submitDecisionCapture(record);

    return {
      record,
      response,
    };
  }, []);

  return { submitCapture };
}
