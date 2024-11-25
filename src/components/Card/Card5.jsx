import PropTypes from "prop-types";

const Card5 = ({ title, description}) => (
  <div className="bg-red-50 shadow-lg p-4 rounded-lg overflow-hidden">
    <div className="p-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);




Card5.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card5;
