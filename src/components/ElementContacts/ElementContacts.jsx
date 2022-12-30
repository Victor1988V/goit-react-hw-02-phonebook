import PropTypes from 'prop-types';
import { StyledLI } from './ElementContats.styled';

export const ElementContacts = ({ name, number, onDelete }) => {
  return (
    <StyledLI>
      <p>
        <span className="name">{name}:</span>
        <span className="number">{number}</span>
      </p>

      <button type="button" onClick={() => onDelete(number)}>
        Delete
      </button>
    </StyledLI>
  );
};

ElementContacts.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
