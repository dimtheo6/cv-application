import PropTypes from "prop-types";

export default function Experience({
  experienceInfo,
  setExperienceInfo,
  setResume,
}) {
  const initialExperienceState = {
    company: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  };

  const handleExperienceChange = (e) => {
    const { name, value } = e.target;
    setExperienceInfo({ ...experienceInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setResume((prevResume) => ({
      ...prevResume,
      experience: [...prevResume.experience, experienceInfo],
    }));

    setExperienceInfo(initialExperienceState);
  };

  return (
    <div className="experience_info">
      <h1>Work Experience</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          name="company"
          id="company"
          value={experienceInfo.company}
          onChange={handleExperienceChange}
        />

        <label htmlFor="jobTitle">Job Title</label>
        <input
          type="text"
          name="jobTitle"
          id="jobTitle"
          value={experienceInfo.jobTitle}
          onChange={handleExperienceChange}
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={experienceInfo.location}
          onChange={handleExperienceChange}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={experienceInfo.description}
          onChange={handleExperienceChange}
        />

        <label htmlFor="startDate">Start Date</label>
        <input
          type="text"
          name="startDate"
          id="startDate"
          value={experienceInfo.startDate}
          onChange={handleExperienceChange}
        />

        <label htmlFor="endDate">End Date</label>
        <input
          type="text"
          name="endDate"
          id="endDate"
          value={experienceInfo.endDate}
          onChange={handleExperienceChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

Experience.propTypes = {
  experienceInfo: PropTypes.shape({
    company: PropTypes.string,
    jobTitle: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  setExperienceInfo: PropTypes.func.isRequired,
  setResume: PropTypes.func.isRequired,
};
