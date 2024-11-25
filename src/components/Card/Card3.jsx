import PropTypes from "prop-types";

const Card3 = ({ title, description, image }) => (
  <div className="bg-red-600 shadow-lg rounded-lg overflow-hidden">
    <div className="p-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);




Card3.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card3;