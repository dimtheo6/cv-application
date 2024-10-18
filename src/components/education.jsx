import PropTypes from "prop-types";

export default function Education({ educationInfo, setEducationInfo,setResume }) {

    const initialEducationState = {
        degree: '',
        school: '',
        location: '',
        country: '',
        startDate: '',
        endDate: '',
      };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducationInfo({ ...educationInfo, [name]: value });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    setResume((prevResume)=>({
        ...prevResume,education:[...prevResume.education,educationInfo]
    }))

    setEducationInfo(initialEducationState)
  }

  return (
    <div className="education_info">
      <form onSubmit={handleSubmit}>
        <h1>Education Info</h1>

        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          name="degree"
          id="degree"
          value={educationInfo.degree}
          onChange={handleEducationChange}
          placeholder="Enter Degree / Field of study"
        />

        <label htmlFor="school">School</label>
        <input
          type="text"
          name="school"
          id="school"
          value={educationInfo.school}
          onChange={handleEducationChange}
          placeholder="Enter school / university"
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={educationInfo.location}
          onChange={handleEducationChange}
          placeholder="Enter Location"
        />

        <label htmlFor="startDate">Start Date</label>
        <input
          type="text"
          name="startDate"
          id="startDate"
          value={educationInfo.startDate}
          onChange={handleEducationChange}
          placeholder="Start Date"
        />

        <label htmlFor="endDate">End Date</label>
        <input
          type="text"
          name="endDate"
          id="endDate"
          value={educationInfo.endDate}
          onChange={handleEducationChange}
          placeholder="End Date"
        />

        <button type="submit">Save</button>
      </form>
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
  setEducationInfo: PropTypes.func.isRequired,
  setResume: PropTypes.func.isRequired,
};
