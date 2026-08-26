import CropRecordForm from "../components/CropRecordForm";
import { createHarvestEvent, createHarvestRecord } from "../services/api";

export default function FieldEntryPage() {
  const submitRecord = async (payload) => {
    const harvestEvent = await createHarvestEvent(1, {
      harvest_date: new Date().toISOString().slice(0, 10)
    });
    await createHarvestRecord(harvestEvent.id, payload);
    alert("Record submission endpoint is wired.");
  };

  return (
    <>
      <div className="panel">
        <h1>Lexington Field</h1>
        <p>New harvest record for today</p>
      </div>
      <CropRecordForm onSubmit={submitRecord} />
    </>
  );
}
