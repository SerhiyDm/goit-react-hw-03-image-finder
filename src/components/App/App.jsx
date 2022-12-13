import { Component } from 'react';
import { GlobalStyles } from '../Globalstyles';
import { Toaster } from 'react-hot-toast';
import { AppStyled } from './App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Button } from 'components/Button/Button';
import { fetchPhotos } from 'components/services/rest_api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { NotifyError } from 'components/Notify/Notify';
export class App extends Component {
  state = {
    page: 1,
    pageSize: 12,
    query: '',
    photos: [],
    status: 'idle',
    total: 0,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      const options = {
        searchQuery: this.state.query,
        currentPage: this.state.page,
        pageSize: this.state.pageSize,
      };
      try {
        const responce = await fetchPhotos(options);
        if (responce.totalHits === 0) {
          NotifyError(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          return;
        }
        this.setState(prevState => ({
          photos: [...prevState.photos, ...responce.hits],
          status: 'resolved',
          total: responce.totalHits,
        }));
      } catch (error) {
        NotifyError(error.message);
        this.setState({ status: 'idle' });
      }
    }
  }

  getData = value => {
    const validValue = value.trim().toLowerCase();
    this.setState({
      page: 1,
      query: validValue,
      photos: [],
      status: 'pending',
      total: 0,
    });
  };

  handleClick = () =>
    this.setState(prevState => ({
      page: prevState.page + 1,
      status: 'pending',
    }));

  render() {
    const { status, photos, pageSize, page, total } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.getData} />
        {status === 'pending' && <Loader />}
        <Toaster />
        {this.state.photos !== 0 && (
          <ImageGallery
            data={photos}
            onPending={this.changeStatePending}
            onResolved={this.changeStateResolved}
          />
        )}
        {page < Math.ceil(total / pageSize) && (
          <Button text="Load more" onClik={this.handleClick} />
        )}
        <GlobalStyles />
      </AppStyled>
    );
  }
}
