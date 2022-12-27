import P from 'prop-types';
import { Container } from './styled';

export function TextInput({ searchValue, handleChange }) {
  return (
    <Container>
      <input
        className="text-input"
        onChange={handleChange}
        value={searchValue}
        type="search"
        placeholder="Type your Search"
      />
    </Container>
  );
}
TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
