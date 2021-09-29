const CustomTip = ({ tip, onCustom }) => {

    return (
        <input type="number" placeholder="Custom" className="custom-btn"
            value={tip.active === "custom" ? tip.value : ""}
            onChange={(e) => onCustom("custom", e.target.value)} 
            onClick={() => onCustom("custom", "NaN")}/>
    )
}

export default CustomTip
