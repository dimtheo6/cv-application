import { useState, useRef } from "react";
import General from "./general";
import Education from "./education";
import Experience from "./experience";
import ExperienceList from "./experienceList";
import EducationList from "./educationList";
import PersonalDetails from "./personalDetails";
import { useReactToPrint } from "react-to-print";

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
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div className="container">
      <div className="side_container">
        <div className="print_container">
          <h4>Print Your Resume</h4>
          <button onClick={reactToPrintFn} className="print_button">
            Print Resume
          </button>
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

export default App;
