import P from 'prop-types';
import { Component } from 'react';
import { Container } from './styled';

export default class Button extends Component {
  render() {
    const { text, onClick, disabled } = this.props;

    return (
      <Container>
        <button disabled={disabled} className="button" onClick={onClick}>
          {text}
        </button>
      </Container>
    );
  }
}
Button.defaultProps = {
  disable: false,
};
Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func,
  disable: P.bool,
};
