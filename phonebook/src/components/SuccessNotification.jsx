const SuccessNotification = ({ message }) => {
    if (message === null) return null

    const notificationStyles = {
        margin: 10,
        padding: 10,
        backgroundColor: '#a6f7bbaa',
        border: '1px solid #50d975'
    }

    return (
        <div style={notificationStyles}>
            {message}
        </div>
    )
}

export default SuccessNotification