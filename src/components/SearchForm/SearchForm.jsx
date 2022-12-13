import PropTypes from 'prop-types';
import { Component } from 'react';
import { SearchFormStyled, SearchFormInputStyled } from './SearchForm.styled';
import { SearchFormButton } from './SearchFormButton/SearchFormButton';

export class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    query: '',
    isDisabled: true,
  };
  clearField = () => {
    this.setState({
      query: '',
    });
  };
  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({
      query: value,
      isDisabled: false,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({
      isDisabled: true,
    });
  };

  render() {
    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <SearchFormButton isDisabled={this.state.isDisabled} />
        <SearchFormInputStyled
          onChange={this.handleChange}
          onFocus={this.clearField}
          name="query"
          type="text"
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus={true}
          value={this.state.query}
          required
        />
      </SearchFormStyled>
    );
  }
}
