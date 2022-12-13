import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  GalleryItemImageStyled,
  GalleryItemStyled,
} from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  static propTypes = PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired;

  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => this.setState({ isModalOpen: false });
  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    return (
      <GalleryItemStyled>
        <GalleryItemImageStyled
          src={webformatURL}
          alt={tags}
          onClick={this.openModal}
        />
        {this.state.isModalOpen && (
          <Modal src={largeImageURL} alt={tags} onClose={this.closeModal} />
        )}
      </GalleryItemStyled>
    );
  }
}
