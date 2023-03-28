import PropTypes from 'prop-types'
import { Notif } from './Notification.styled';

function Notification({ message }) {
    return (
        <Notif>{message}</Notif>
    )
}

Notification.propTypes = {
    message: PropTypes.string
}
export default Notification