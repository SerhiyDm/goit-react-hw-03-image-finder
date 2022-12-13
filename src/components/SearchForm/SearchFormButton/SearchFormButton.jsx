import { MdSearch } from 'react-icons/md';
import { SearchFormButtonStyled } from './SearchFormButton.styled';
export const SearchFormButton = ({ isDisabled }) =>
  isDisabled ? (
    <SearchFormButtonStyled disabled></SearchFormButtonStyled>
  ) : (
    <SearchFormButtonStyled>
      <span>
        <MdSearch size={30} />
      </span>
    </SearchFormButtonStyled>
  );
