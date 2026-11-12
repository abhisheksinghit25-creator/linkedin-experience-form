
import { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar.jsx";
import Experience from "./components/Experience.jsx";
import ExperienceForm from "./components/ExperienceForm.jsx";
import CommentsPage from "./pages/CommentsPage.jsx";

const initialExperiences = [
  {
    title: "Full Stack Developer Intern",
    company: "ABC Company",
    type: "Internship",
    location: "Remote",
    startDate: "Nov 2026",
    endDate: "Present",
    description: "Working with React.js, Node.js and MongoDB.",
  },
];

function App() {
  const [experiences, setExperiences] = useState(initialExperiences);

  const handleAddExperience = (data) => {
    setExperiences((prevExperiences) => [
      {
        ...data,
        endDate: data.endDate || "Present",
      },
      ...prevExperiences,
    ]);
  };

  const experiencePage = (
    <div className="min-h-screen bg-[#242424] text-white p-4 sm:p-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold mb-6">Add Experience</h1>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ExperienceForm onAddExperience={handleAddExperience} />
          <Experience experiences={experiences} />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={experiencePage} />
        <Route path="/experience" element={experiencePage} />
        <Route path="/comments" element={<CommentsPage />} />
      </Routes>
    </>
  );
}

export default App;
