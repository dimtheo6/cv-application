
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faLocationDot,
    faPhone,
  } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default function PersonalDetails({ generalInfo }) {
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

  PersonalDetails.propTypes = {
    generalInfo: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      address: PropTypes.string,
    }).isRequired,
  };