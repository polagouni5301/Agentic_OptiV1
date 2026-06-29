import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ScoutLoadingPage from "../components/scout/ScoutLoadingPage";
import { getCampaign } from "../data/campaigns";

const STEPS = [
  "Pulling pacing data (BigQuery)",
  "Reading change history (KBAS / XBAS)",
  "Sampling top-20 keywords by 7d cost",
  "Computing publisher distribution",
  "Checking Smart Bidding + maturity guardrails",
  "Reasoning over evidence package",
  "Validating recommendation",
];

const STEP_MS = 900;


export default function Diagnosing() {
  const { id } = useParams();
  const campaign = getCampaign(id);
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setElapsed((e) => e + 0.1), 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (step >= STEPS.length) {
      const t = setTimeout(() => {
        navigate(`/campaign/${id}`);
      }, 450);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep((s) => s + 1), STEP_MS);
    return () => clearTimeout(t);
  }, [step, id, navigate]);

  return (
    <ScoutLoadingPage campaignName={campaign?.name} step={step} elapsed={elapsed} steps={STEPS} />
  );
}
