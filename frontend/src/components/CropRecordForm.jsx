import { useState } from "react";

const INITIAL_FORM = {
  field_name: "",
  year: new Date().getFullYear(),
  record_date: new Date().toISOString().slice(0, 10),
  plot_number: "",
  dynamic_data: "{}"
};

export default function CropRecordForm({ onSubmit }) {
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      onSubmit({
        ...form,
        year: Number(form.year),
        dynamic_data: JSON.parse(form.dynamic_data)
      });
    } catch {
      window.alert("Dynamic fields must contain valid JSON.");
    }
  };

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <h2>New Harvest Record</h2>
      <div className="grid">
        <label>
          Field Name
          <input name="field_name" value={form.field_name} onChange={handleChange} required />
        </label>
        <label>
          Year
          <input name="year" type="number" min="1" value={form.year} onChange={handleChange} required />
        </label>
        <label>
          Date
          <input name="record_date" type="date" value={form.record_date} onChange={handleChange} required />
        </label>
        <label>
          Plot Number
          <input name="plot_number" value={form.plot_number} onChange={handleChange} required />
        </label>
        <label>
          Dynamic Fields (JSON)
          <textarea name="dynamic_data" rows="8" value={form.dynamic_data} onChange={handleChange} />
        </label>
      </div>
      <button className="primary" type="submit">Save Record</button>
    </form>
  );
}
