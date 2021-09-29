import TipButtons from "./TipButtons"
import DollarIcon from "./images/icon-dollar.svg"
import PersonIcon from "./images/icon-person.svg"

const Form = ({ bill, setBill, people, setPeople, tip, addTip, setReset}) => {
    return (
        <form className="form">
            <div className="form-input">
                <label>Bill</label>
                <br />
                <img src={DollarIcon} alt="dollar icon" />
                <input type="number" placeholder="0.00" value={bill}
                    onChange={(e) => setBill(e.target.value)} />
            </div>
            <div className="form-tip">
                <label>Select Tip %</label>
                <br />
                <TipButtons tip={tip} addTip={addTip} setReset={setReset} />
            </div>
            <div className="form-input">
                <label>Number of People</label>
                <br />
                <img src={PersonIcon} alt="person icon" />
                <input type="number" placeholder="0" value={people}
                    onChange={(e) => setPeople(e.target.value)} />
            </div>
        </form>
    )
}

export default Form
