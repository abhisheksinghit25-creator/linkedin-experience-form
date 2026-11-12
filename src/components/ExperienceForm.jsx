import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const initialFormState = {
  title: "",
  company: "",
  type: "",
  location: "",
  startDate: "",
  endDate: "",
  description: "",
};

function ExperienceForm({ onAddExperience = () => {} }) {
  const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExperience(form);
    setForm(initialFormState);
  };

  return (
    <div className="bg-black text-white p-5 sm:p-6 rounded-2xl">
      <h2 className="text-2xl font-bold mb-6">
        Add your professional experience
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Job Title</label>
          <input
            type="text"
            name="title"
            placeholder="Full stack Developer"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full bg-black border border-gray-800 rounded-xl p-3.5 outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Company Name</label>
          <input
            type="text"
            name="company"
            placeholder="ABC Technologies"
            value={form.company}
            onChange={handleChange}
            required
            className="w-full bg-black border border-gray-800 rounded-xl p-3.5 outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Employment type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            required
            className="w-full bg-black border border-gray-800 rounded-xl p-3.5 outline-none focus:border-blue-500"
          >
            <option value="">Select Employment Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Internship">Internship</option>
            <option value="Freelance">Freelance</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Bhopal, India"
            value={form.location}
            onChange={handleChange}
            required
            className="w-full bg-black border border-gray-800 rounded-xl p-3.5 outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex gap-3 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-400 mb-2">Start Date</label>
            <input
              type="month"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              required
              className="w-full min-w-0 bg-black border border-gray-800 rounded-xl p-3 outline-none focus:border-blue-500"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-gray-400 mb-2">End Date</label>
            <input
              type="month"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              className="w-full min-w-0 bg-black border border-gray-800 rounded-xl p-3 outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Description</label>
          <textarea
            name="description"
            placeholder="Working on web development projects..."
            value={form.description}
            onChange={handleChange}
            rows="4"
            className="w-full bg-black border border-gray-800 rounded-xl p-3.5 outline-none focus:border-blue-500 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl py-4 rounded-xl flex items-center justify-center gap-2 transition"
        >
          <FaPlus />
          Add Experience
        </button>
      </form>
    </div>
  );
}

export default ExperienceForm;
