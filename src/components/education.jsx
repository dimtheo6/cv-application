import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Education({
  educationInfo,
  setEducationInfo,
  resume,
  setResume,
}) {
  const [isActive, setIsActive] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // Track the index of the item being edited
  const [editFormState, setEditFormState] = useState(null); // Separate state for editing

  const initialEducationState = {
    degree: "",
    school: "",
    location: "",
    country: "",
    startDate: "",
    endDate: "",
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;

    if (editIndex === null) {
      // Update live during new entry creation
      setEducationInfo({ ...educationInfo, [name]: value });
    } else {
      // Only update local form state during editing
      setEditFormState({ ...editFormState, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // Edit existing education entry
      const updatedEducation = resume.map((item, index) =>
        index === editIndex ? editFormState : item
      );
      setResume((prevResume) => ({
        ...prevResume,
        education: updatedEducation,
      }));
    } else {
      // Add new education entry (with live updates)
      setResume((prevResume) => ({
        ...prevResume,
        education: [...prevResume.education, educationInfo],
      }));
    }

    setIsActive(false);
    setEditIndex(null);
    setEducationInfo(initialEducationState);
    setEditFormState(null);
  };

  const handleEdit = (index) => {
    setIsActive(true);
    setEditIndex(index);
    setEditFormState(resume[index]); 
  };

  const handleDelete = (index) => {
    const updatedEducation = resume.filter((_, i) => i !== index);
    setResume((prevResume) => ({
      ...prevResume,
      education: updatedEducation,
    }));
  };

  return (
    <div className="education_info">
      <div className="education_title">
        <h1>Education Info</h1>
        <FontAwesomeIcon
          className={`expand_icon ${isActive ? "active" : ""}`}
          icon={faChevronDown}
          onClick={() => setIsActive(!isActive)}
        />
      </div>

      {isActive && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            id="degree"
            value={
              editIndex === null
                ? educationInfo.degree
                : editFormState?.degree || ""
            }
            onChange={handleEducationChange}
            placeholder="Enter Degree / Field of study"
          />

          <label htmlFor="school">School</label>
          <input
            type="text"
            name="school"
            id="school"
            value={
              editIndex === null
                ? educationInfo.school
                : editFormState?.school || ""
            }
            onChange={handleEducationChange}
            placeholder="Enter school / university"
          />

          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={
              editIndex === null
                ? educationInfo.location
                : editFormState?.location || ""
            }
            onChange={handleEducationChange}
            placeholder="Enter Location"
          />

          <label htmlFor="startDate">Start Date</label>
          <input
            type="text"
            name="startDate"
            id="startDate"
            value={
              editIndex === null
                ? educationInfo.startDate
                : editFormState?.startDate || ""
            }
            onChange={handleEducationChange}
            placeholder="Start Date"
          />

          <label htmlFor="endDate">End Date</label>
          <input
            type="text"
            name="endDate"
            id="endDate"
            value={
              editIndex === null
                ? educationInfo.endDate
                : editFormState?.endDate || ""
            }
            onChange={handleEducationChange}
            placeholder="End Date"
          />

          {editIndex!==null ? <button onClick={()=>{setIsActive(null)}}>cancel</button>:null }
          <button type="submit">
            {editIndex !== null ? "Update" : "Save"}
          </button>
        </form>
      )}

      {resume &&
        resume.map((education, index) => (
          <div className="education_side_container" key={index}>
            <p>{education.school}</p>
            <div className="buttons">
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </div>
          </div>
        ))}
    </div>
  );
}

Education.propTypes = {
  educationInfo: PropTypes.shape({
    degree: PropTypes.string,
    school: PropTypes.string,
    location: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }).isRequired,
  resume: PropTypes.arrayOf(
    PropTypes.shape({
      degree: PropTypes.string,
      school: PropTypes.string,
      location: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
    })
  ).isRequired,
  setEducationInfo: PropTypes.func.isRequired,
  setResume: PropTypes.func.isRequired,
};
