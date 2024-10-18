import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faTrashCan,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Experience({
  experienceInfo,
  setExperienceInfo,
  resume,
  setResume,
}) {
  const [isActive, setIsActive] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // Track the index of the item being edited
  const [editFormState, setEditFormState] = useState(null); // Separate state for editing

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

    if (editIndex === null) {
      // Update live during new entry creation
      setExperienceInfo({ ...experienceInfo, [name]: value });
    } else {
      // Only update local form state during editing
      setEditFormState({ ...editFormState, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // Edit existing experience entry
      const updatedExperience = resume.map((item, index) =>
        index === editIndex ? editFormState : item
      );
      setResume((prevResume) => ({
        ...prevResume,
        experience: updatedExperience,
      }));
    } else {
      // Add new experience entry (with live updates)
      setResume((prevResume) => ({
        ...prevResume,
        experience: [...prevResume.experience, experienceInfo],
      }));
    }

    // Reset form and states
    setIsActive(false);
    setEditIndex(null);
    setExperienceInfo(initialExperienceState);
    setEditFormState(null);
  };

  const handleEdit = (index) => {
    setIsActive(true);
    setEditIndex(index);
    setEditFormState(resume[index]);
  };

  const handleDelete = (index) => {
    const updatedExperience = resume.filter((_, i) => i !== index); // Remove the selected entry
    setResume((prevResume) => ({
      ...prevResume,
      experience: updatedExperience,
    }));
  };

  return (
    <div className="experience_info">
      <div className="experience_title">
        <h1>Work Experience</h1>
        <FontAwesomeIcon
          className={`expand_icon ${isActive ? "active" : ""}`}
          icon={faChevronDown}
          onClick={() => setIsActive(!isActive)}
        />
      </div>

      {isActive && (
        <form onSubmit={handleSubmit}>
          <div className="input_group">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              name="company"
              id="company"
              value={
                editIndex === null
                  ? experienceInfo.company
                  : editFormState?.company || ""
              }
              onChange={handleExperienceChange}
            />
          </div>

          <div className="input_group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              value={
                editIndex === null
                  ? experienceInfo.jobTitle
                  : editFormState?.jobTitle || ""
              }
              onChange={handleExperienceChange}
            />
          </div>

          <div className="input_group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              value={
                editIndex === null
                  ? experienceInfo.location
                  : editFormState?.location || ""
              }
              onChange={handleExperienceChange}
            />
          </div>

          <div className="input_group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              value={
                editIndex === null
                  ? experienceInfo.description
                  : editFormState?.description || ""
              }
              onChange={handleExperienceChange}
            />
          </div>

          <div className="input_group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="text"
              name="startDate"
              id="startDate"
              value={
                editIndex === null
                  ? experienceInfo.startDate
                  : editFormState?.startDate || ""
              }
              onChange={handleExperienceChange}
            />
          </div>

          <div className="input_group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="text"
              name="endDate"
              id="endDate"
              value={
                editIndex === null
                  ? experienceInfo.endDate
                  : editFormState?.endDate || ""
              }
              onChange={handleExperienceChange}
            />
          </div>
          <div className="edit_buttons">
            {editIndex !== null ? (
              <button
                className="cancel_button"
                onClick={() => {
                  setIsActive(null);
                }}
              >
                cancel
              </button>
            ) : null}
            <button className="submit_button" type="submit">
              {editIndex !== null ? "Update" : "Save"}
            </button>
          </div>
        </form>
      )}

      {resume &&
        resume.map((experience, index) => (
          <div className="experience_side_container" key={index}>
            <p>{experience.company}</p>
            <div className="buttons">
              <FontAwesomeIcon
                className="delete_button"
                onClick={() => handleDelete(index)}
                icon={faTrashCan}
              />
              <FontAwesomeIcon
                className="edit_button"
                onClick={() => handleEdit(index)}
                icon={faPenToSquare}
              />
            </div>
          </div>
        ))}
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
  resume: PropTypes.shape({
    experience: PropTypes.arrayOf(
      PropTypes.shape({
        company: PropTypes.string,
        jobTitle: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        location: PropTypes.string,
        description: PropTypes.string,
      })
    ),
  }).isRequired,
  setExperienceInfo: PropTypes.func.isRequired,
  setResume: PropTypes.func.isRequired,
};
