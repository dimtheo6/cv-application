import PropTypes from "prop-types";

export default function General({ generalInfo, setGeneralInfo }) {

  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
  };

  return (
    <div className="general_info">
      <div className="general_title">
        <h1>Personal Details</h1>
      </div>

    
      <form action="#">
        <div className="input_group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            maxLength={40}
            placeholder="Enter Full Name"
            value={generalInfo.name}
            onChange={handleGeneralChange}
          />
        </div>

        <div className="input_group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            maxLength={40}
            placeholder="Enter Email"
            value={generalInfo.email}
            onChange={handleGeneralChange}
          />
        </div>

        <div className="input_group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            maxLength={20}
            placeholder="Enter Phone Number"
            value={generalInfo.phone}
            onChange={handleGeneralChange}
          />
        </div>

        <div className="input_group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            maxLength={40}
            placeholder="Enter Address"
            value={generalInfo.address}
            onChange={handleGeneralChange}
          />
        </div>
      </form>
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
