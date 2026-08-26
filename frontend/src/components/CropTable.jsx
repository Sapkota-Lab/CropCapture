export default function CropTable({ rows }) {
  return (
    <div className="panel table-wrap">
      <h2>Crop Records</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Crop</th>
            <th>Variety</th>
            <th>Plot</th>
            <th>Date</th>
            <th>Height (cm)</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan="6">No records yet.</td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.crop_type}</td>
                <td>{row.variety}</td>
                <td>{row.plot_id}</td>
                <td>{row.observation_date}</td>
                <td>{row.height_cm ?? "-"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
