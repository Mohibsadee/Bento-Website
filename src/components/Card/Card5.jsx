import PropTypes from "prop-types";

const Card5 = ({ title, description, image }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img className="w-full h-auto" src={image} alt={title} />
    <div className="p-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);




Card5.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card5;
