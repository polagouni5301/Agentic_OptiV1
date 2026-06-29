import { useCallback } from "react";
import { saveDecisionCaptureRecord, type DecisionCaptureRecord } from "../data/decisionCaptureData";
import { submitDecisionCapture, type DecisionCapturePayload } from "../lib/api/decisionCapture";

export function useDecisionCapture() {
  const submitCapture = useCallback(async (payload: DecisionCapturePayload) => {
    const record: DecisionCaptureRecord = {
      campaignId: payload.campaignId,
      campaignName: payload.campaignName,
      recommendation: payload.recommendation,
      result: payload.result,
      meta: payload.meta,
      createdAt: payload.createdAt ?? new Date().toISOString(),
    };

    saveDecisionCaptureRecord(record);

    const response = await submitDecisionCapture(payload);

    return {
      record,
      response,
    };
  }, []);

  return { submitCapture };
}
