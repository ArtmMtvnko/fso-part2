const Button = ({ text, onClick, type }) => {
    return (
        <div>
          <button onClick={onClick} type={type}>
            {text}
          </button>
        </div>
    )
}

export default Button