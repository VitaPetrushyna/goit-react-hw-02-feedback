import { NotificationStyle } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <>
      <NotificationStyle>{message}</NotificationStyle>
    </>
  );
};

export default Notification;
