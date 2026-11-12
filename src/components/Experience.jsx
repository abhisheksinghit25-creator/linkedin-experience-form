import ExperienceCard from "./ExperienceCard";

const defaultExperiences = [
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

function Experience({ experiences = defaultExperiences }) {
  return (
    <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Experience</h2>

        <button className="text-2xl font-semibold text-gray-600 hover:text-blue-600">
          +
        </button>
      </div>

      {experiences.map((item, index) => (
        <ExperienceCard key={index} experience={item} />
      ))}
    </div>
  );
}

export default Experience;