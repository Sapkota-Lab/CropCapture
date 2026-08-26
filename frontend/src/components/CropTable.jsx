export default function CropTable({ rows }) {
  return (
    <div className="panel table-wrap">
      <h2>Harvest Records</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>SN</th>
            <th>Genotype</th>
            <th>Location</th>
            <th>Harvest</th>
            <th>Grade 1 Weight</th>
            <th>Grade 1 Count</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan="7">No records yet.</td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.serial_number ?? "-"}</td>
                <td>{row.genotype}</td>
                <td>{row.location ?? "-"}</td>
                <td>{row.harvest ?? "-"}</td>
                <td>{row.grade_1_marketable_weight ?? "-"}</td>
                <td>{row.grade_1_marketable_count ?? "-"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
