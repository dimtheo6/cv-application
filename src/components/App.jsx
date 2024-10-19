import { useState, useRef } from "react";
import General from "./general";
import Education from "./education";
import Experience from "./experience";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useReactToPrint } from "react-to-print";

function EducationList({ educationArray, educationInfo }) {
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

function ExperienceList({ experienceArray, experienceInfo }) {
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

function PersonalDetails({ generalInfo }) {
  return (
    <div className="personal_info">
      <h1 className="resume_name">{generalInfo.name}</h1>
      <div className="contact_info">
        <div className="personal_info_group">
          {generalInfo.email && <FontAwesomeIcon icon={faEnvelope} />}
          <span>{generalInfo.email}</span>
        </div>

        <div className="personal_info_group">
          {generalInfo.phone && <FontAwesomeIcon icon={faPhone} />}
          <span>{generalInfo.phone}</span>
        </div>

        <div className="personal_info_group">
          {generalInfo.address && <FontAwesomeIcon icon={faLocationDot} />}
          <span>{generalInfo.address}</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [resume, setResume] = useState({
    education: [],
    experience: [],
  });

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    degree: "",
    school: "",
    location: "",
    startDate: "",
    endDate: "",
  });

  const [experienceInfo, setExperienceInfo] = useState({
    company: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const contentRef = useRef(null); 
  const reactToPrintFn = useReactToPrint({contentRef});


  return (
    <div className="container">
      <div className="side_container">
        <div className="print_container">
        <h4>Print Your Resume</h4>
        <button onClick={reactToPrintFn} className="print_button">Print Resume</button>
        </div>
        <General generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
        <Education
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
          resume={resume.education}
          setResume={setResume}
        />
        <Experience
          experienceInfo={experienceInfo}
          setExperienceInfo={setExperienceInfo}
          resume={resume.experience}
          setResume={setResume}
        />
      </div>

      <div className="resume_container" ref={contentRef}>
        <PersonalDetails generalInfo={generalInfo} />
        <EducationList
          educationArray={resume.education}
          educationInfo={educationInfo}
        />
        <ExperienceList
          experienceArray={resume.experience}
          experienceInfo={experienceInfo}
        />
      </div>

    </div>
  );
}

PersonalDetails.propTypes = {
  generalInfo: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
};

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

export default App;
