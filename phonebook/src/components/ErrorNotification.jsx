const ErrorNotification = ({ message }) => {
    if (message === null) return null

    const notificationStyles = {
        margin: 10,
        padding: 10,
        backgroundColor: '#f5afa9aa',
        border: '1px solid #de493c'
    }

    return (
        <div style={notificationStyles}>
            {message}
        </div>
    )
}

export default ErrorNotification