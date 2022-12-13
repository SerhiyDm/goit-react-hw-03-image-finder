import PropTypes from 'prop-types';
import { GalleryStyled } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ data }) => (
  <GalleryStyled>
    {data.map(({ id, ...otherProps }) => (
      <ImageGalleryItem key={id} {...otherProps} />
    ))}
  </GalleryStyled>
);

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
