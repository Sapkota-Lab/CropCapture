import { useState } from "react";

const INITIAL_FORM = {
  serial_number: "",
  genotype: "",
  location: "",
  harvest: "",
  grade_1_marketable_weight: "",
  grade_1_marketable_count: "",
  unmarketable_weight: "",
  unmarketable_count: "",
  sample_weight_marketable: "",
  sample_weight_unmarketable: ""
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
      <h2>New Harvest Record</h2>
      <div className="grid">
        <label>
          Serial Number
          <input name="serial_number" value={form.serial_number} onChange={handleChange} />
        </label>
        <label>
          Genotype
          <input name="genotype" value={form.genotype} onChange={handleChange} required />
        </label>
        <label>
          Location
          <input name="location" value={form.location} onChange={handleChange} />
        </label>
        <label>
          Harvest
          <input name="harvest" value={form.harvest} onChange={handleChange} />
        </label>
        <label>
          Grade 1 Marketable Weight
          <input name="grade_1_marketable_weight" type="number" step="0.01" min="0" value={form.grade_1_marketable_weight} onChange={handleChange} />
        </label>
        <label>
          Grade 1 Marketable Count
          <input name="grade_1_marketable_count" type="number" min="0" value={form.grade_1_marketable_count} onChange={handleChange} />
        </label>
        <label>
          Unmarketable Weight
          <input name="unmarketable_weight" type="number" step="0.01" min="0" value={form.unmarketable_weight} onChange={handleChange} />
        </label>
        <label>
          Unmarketable Count
          <input name="unmarketable_count" type="number" min="0" value={form.unmarketable_count} onChange={handleChange} />
        </label>
        <label>
          20-Sample Marketable Weight
          <input name="sample_weight_marketable" type="number" step="0.01" min="0" value={form.sample_weight_marketable} onChange={handleChange} />
        </label>
        <label>
          20-Sample Unmarketable Weight
          <input name="sample_weight_unmarketable" type="number" step="0.01" min="0" value={form.sample_weight_unmarketable} onChange={handleChange} />
        </label>
      </div>
      <button className="primary" type="submit">Save Record</button>
    </form>
  );
}
