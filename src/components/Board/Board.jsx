import PropTypes from "prop-types";

const Board = ({ title, description }) => {
  return (
    <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

Board.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Board;
