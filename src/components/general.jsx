import PropTypes from "prop-types";

export default function General({ generalInfo, setGeneralInfo }) {
  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({ ...generalInfo, [name]: value });
  };

  return (
    <div className="general_info">
      <form action="#">
        <h1>Personal Details</h1>

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
    </div>
  );
}

General.propTypes = {
  generalInfo: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address:PropTypes.string,
  }).isRequired,
  setGeneralInfo: PropTypes.func.isRequired,
};
