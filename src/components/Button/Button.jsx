import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export const Button = ({ text, onClik }) => (
  <ButtonStyled onClick={onClik}>{text}</ButtonStyled>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
