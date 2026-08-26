import { useEffect, useState } from "react";

import CropTable from "../components/CropTable";
import { fetchCropRecords } from "../services/api";

export default function QueryPage() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const load = async () => {
      const records = await fetchCropRecords();
      setRows(records);
    };

    load();
  }, []);

  return <CropTable rows={rows} />;
}
