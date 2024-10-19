import PropTypes from "prop-types";

export default function EducationList({ educationArray, educationInfo }) {
    return (
      <div className="education_container">
        {educationArray[0] && <h2 className="resume_title">Education</h2>}
  
        {educationArray.map((education, index) => (
          <div className="education_container_group" key={index}>
            <div className="education_info_group">
              <div className="dates">
                {education.startDate}
                {education.startDate && education.endDate ? (
                  <span> – </span>
                ) : null}
                {education.endDate}
              </div>
              <p>{education.location}</p>
            </div>
            <div className="education_info_group">
              <p className="info_school">{education.school}</p>
              <p>{education.degree}</p>
            </div>
          </div>
        ))}
  
        <div className="education_container_group">
          <div className="education_info_group">
            <div className="dates">
              {educationInfo.startDate}{" "}
              {educationInfo.startDate && educationInfo.endDate ? (
                <span>–</span>
              ) : null}{" "}
              {educationInfo.endDate}
            </div>
            <p>{educationInfo.location}</p>
          </div>
          <div className="education_info_group">
            <p className="info_school">{educationInfo.school}</p>
            <p>{educationInfo.degree}</p>
          </div>
        </div>
      </div>
    );
  }

  EducationList.propTypes = {
    educationArray: PropTypes.shape({
      map: PropTypes.string,
    }).isRequired,
    educationInfo: PropTypes.shape({
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      location: PropTypes.string,
      school: PropTypes.string,
      degree: PropTypes.string,
    }),
  };