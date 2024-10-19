import PropTypes from "prop-types";

export default function ExperienceList({ experienceArray, experienceInfo }) {
    return (
      <div className="experience_container">
        {experienceArray[0] && <h2 className="resume_title">Experiences</h2>}
  
        {experienceArray.map((experience, index) => (
          <div className="experience_container_group" key={index}>
            <div className="experience_info_group">
              <div className="dates">
                {experience.startDate}
                {experience.startDate && experience.endDate ? (
                  <span> – </span>
                ) : null}
                {experience.endDate}
              </div>
              <p>{experience.location}</p>
            </div>
            <div className="experience_info_group">
              <p className="info_company">{experience.company}</p>
              <p>{experience.jobTitle}</p>
              <p className="description">{experience.description}</p>
            </div>
          </div>
        ))}
  
        <div className="experience_container_group">
          <div className="experience_info_group">
            <div className="dates">
              {experienceInfo.startDate}{" "}
              {experienceInfo.startDate && experienceInfo.endDate ? (
                <span>–</span>
              ) : null}{" "}
              {experienceInfo.endDate}
            </div>
            <p>{experienceInfo.location}</p>
          </div>
          <div className="experience_info_group">
            <p className="info_company">{experienceInfo.company}</p>
            <p>{experienceInfo.jobTitle}</p>
            <p className="description">{experienceInfo.description}</p>
          </div>
        </div>
      </div>
    );
  }

  ExperienceList.propTypes = {
    experienceArray: PropTypes.shape({
      map: PropTypes.string,
    }).isRequired,
    experienceInfo: PropTypes.shape({
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      location: PropTypes.string,
      company: PropTypes.string,
      jobTitle: PropTypes.string,
      description: PropTypes.string,
    }),
  };