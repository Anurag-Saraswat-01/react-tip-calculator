import Button from "./Button"
import CustomTip from "./CustomTip"

const TipButtons = ({ tip, addTip, setReset }) => {

    return (
        <div className="btn-wrapper">
            <Button value={5} onButton={addTip} setReset={setReset} selected={tip.active === "5"} />
            <Button value={10} onButton={addTip} setReset={setReset} selected={tip.active === "10"} />
            <Button value={15} onButton={addTip} setReset={setReset} selected={tip.active === "15"} />
            <Button value={25} onButton={addTip} setReset={setReset} selected={tip.active === "25"} />
            <Button value={50} onButton={addTip} setReset={setReset} selected={tip.active === "50"} />
            <CustomTip tip={tip} onCustom={addTip}/>
        </div>
    )
}

export default TipButtons
