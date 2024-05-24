// Qualifications.jsx
import React, { useState } from "react";

const educationData = [
  {
    degree: "B.Tech in Information Technology",
    institution:
      "Gayatri Vidya Parishad College of Engineering, Visakhapatnam, India",
    duration: "2023 - Present",
  },
  {
    degree: "Higher Secondary in PCM with Computer Science (Python)",
    institution: "Kendriya Vidyalaya No.2 Nausenabaugh, Visakhapatnam, India",
    duration: "2021 - 2023",
  },
  {
    degree: "Secondary",
    institution: "Kendriya Vidyalaya No.2 Nausenabaugh, Visakhapatnam, India",
    duration: "2020 - 2021",
  },
];

const workData = [
  {
    title: "Full-stack Intern",
    company: "LocalFox.in",
    duration: "Jan 2023 - Mar 2023",
  },
  {
    title: "ReactJS Intern",
    company: "Meribachat.in",
    duration: "May 2021 - June 2021",
  },
];

const Qualifications = () => {
  const [showEducation, setShowEducation] = useState(false);

  return (
    <div
      className="p-8 flex flex-col items-center bg-black rounded-md"
      data-aos="zoom-in-up"
    >
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            !showEducation
              ? "bg-white text-black"
              : "border-2 bg-transparent text-white"
          }`}
          onClick={() => setShowEducation(false)}
        >
          Work
        </button>
        <button
          className={`px-4 py-2 rounded ${
            showEducation
              ? "bg-white text-black"
              : "border-2 bg-transparent text-white"
          }`}
          onClick={() => setShowEducation(true)}
        >
          Education
        </button>
      </div>
      <div>
        {showEducation ? (
          <ul>
            {educationData.map((item, index) => (
              <li key={index} className="mb-6">
                <h2 className="text-xl font-semibold">{item.degree}</h2>
                <p className="text-gray-700">{item.institution}</p>
                <p className="text-gray-500">{item.duration}</p>
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {workData.map((item, index) => (
              <li key={index} className="mb-6">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-700">{item.company}</p>
                <p className="text-gray-500">{item.duration}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Qualifications;
