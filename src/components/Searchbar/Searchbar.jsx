import { SearchbarStyled } from './Searchbar.styled';
import { SearchForm } from 'components/SearchForm/SearchForm';

export const Searchbar = ({ ...otherProps }) => (
  <SearchbarStyled>
    <SearchForm {...otherProps} />
  </SearchbarStyled>
);
