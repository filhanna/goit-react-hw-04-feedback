import PropTypes from 'prop-types';

function Notification({ message }) {
  return (
    <div>
      <p className="">{message}</p>
    </div>
  );
}

Notification.proptype = {
  message: PropTypes.string.isRequired,
};
export default Notification;
