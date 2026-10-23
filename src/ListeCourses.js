import PropTypes from 'prop-types';

function ListeCourses({ items }) {
  return (
    <div>
      <h4>Liste de courses :</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

ListeCourses.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListeCourses;
