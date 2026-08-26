import CropRecordForm from "../components/CropRecordForm";
import { createCropRecord } from "../services/api";

export default function FieldEntryPage() {
  const submitRecord = async (payload) => {
    await createCropRecord(payload);
    alert("Record submission endpoint is wired.");
  };

  return <CropRecordForm onSubmit={submitRecord} />;
}
