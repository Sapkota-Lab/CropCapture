import { useEffect, useState } from "react";

import CropTable from "../components/CropTable";
import { fetchHarvestRecords } from "../services/api";

export default function QueryPage() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const load = async () => {
      const records = await fetchHarvestRecords();
      setRows(records);
    };

    load();
  }, []);

  return <CropTable rows={rows} />;
}
