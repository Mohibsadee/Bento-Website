import PropTypes from "prop-types";

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-auto" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,      
  description: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired        
};

export default Card;
