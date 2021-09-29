const Button = ({ value, onButton, setReset, selected }) => {
    const onSelect = () => {
        onButton(value.toString(), value)
        setReset(true)
    }

    return (
        <button className="tip-btn" type="button" onClick={() => onSelect()}
            style={{
                backgroundColor: `${selected ? "hsl(172, 67%, 45%)" : "hsl(183, 100%, 15%)"}`,
                color: `${selected ? "hsl(183, 100%, 15%)" : "hsl(185, 41%, 84%)"}`
            }}
        >
            {value}%
        </button>
    )
}

export default Button
