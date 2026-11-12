function ExperienceCard({ experience }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-4">
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xl font-bold text-blue-700">
            {experience.company.charAt(0)}
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {experience.title}
            </h2>

            <p className="text-gray-700">{experience.company}</p>
            <p className="text-sm text-gray-500">{experience.type}</p>
            <p className="text-sm text-gray-500 mt-1">{experience.location}</p>
            <p className="text-sm text-gray-500 mt-1">
              {experience.startDate} - {experience.endDate}
            </p>
          </div>
        </div>

        <button className="text-gray-500 hover:text-blue-600" aria-label="Edit experience">
          ✏️
        </button>
      </div>

      <p className="text-gray-700 text-sm mt-4">{experience.description}</p>
    </div>
  );
}

export default ExperienceCard;