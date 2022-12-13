import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

export const NotifyError = message =>
  toast.error(message, {
    duration: 3000,
    position: 'top-center',

    style: {
      backgroundColor: 'red',
      opacity: 0.5,
      width: '50vw',
      color: 'white',
      fontSize: '1.5em',
    },
    icon: '🤔',
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });

NotifyError.propTypes = {
  message: PropTypes.string.isRequired,
};
