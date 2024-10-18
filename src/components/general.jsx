import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function General({
  generalInfo,
  setGeneralInfo,
}) {

  const [isActive, setIsActive] = useState(false);
  
  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
  };

  return (
    <div className="general_info">
      <div className="general_title">
        <h1>Personal Details</h1>
        <FontAwesomeIcon
          className={`expand_icon ${isActive ? "active" : ""}`}
          icon={faChevronDown}
          onClick={() => setIsActive(!isActive)}
        />
      </div>

      {isActive && (
        <form action="#">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name..."
            value={generalInfo.name}
            onChange={handleGeneralChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email..."
            value={generalInfo.email}
            onChange={handleGeneralChange}
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number..."
            value={generalInfo.phone}
            onChange={handleGeneralChange}
          />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Address..."
            value={generalInfo.address}
            onChange={handleGeneralChange}
          />
        </form>
      )}
    </div>
  );
}

General.propTypes = {
  generalInfo: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
  setGeneralInfo: PropTypes.func.isRequired,
};
