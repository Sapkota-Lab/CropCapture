import { useState } from "react";

const INITIAL_FORM = {
  crop_type: "Tomato",
  variety: "",
  plot_id: "",
  observation_date: "",
  height_cm: "",
  notes: ""
};

export default function CropRecordForm({ onSubmit }) {
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <h2>New Crop Record</h2>
      <div className="grid">
        <label>
          Crop Type
          <input name="crop_type" value={form.crop_type} onChange={handleChange} required />
        </label>
        <label>
          Variety
          <input name="variety" value={form.variety} onChange={handleChange} required />
        </label>
        <label>
          Plot ID
          <input name="plot_id" value={form.plot_id} onChange={handleChange} required />
        </label>
        <label>
          Observation Date
          <input name="observation_date" type="date" value={form.observation_date} onChange={handleChange} required />
        </label>
        <label>
          Height (cm)
          <input name="height_cm" type="number" step="0.1" value={form.height_cm} onChange={handleChange} />
        </label>
      </div>
      <label>
        Notes
        <textarea name="notes" rows="3" value={form.notes} onChange={handleChange} />
      </label>
      <button className="primary" type="submit">Save Record</button>
    </form>
  );
}
