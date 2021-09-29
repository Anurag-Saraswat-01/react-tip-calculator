const Output = ({ bill, people, tip, resetCalc, reset}) => {

    return (
        <div className="output-container">
            <div className="output-wrapper">
                <div className="output">
                    <p className="output-title">Tip Amount<br />
                        <span>/person</span>
                    </p>
                    <p className="output-value">${bill !== "" && people !== "" && people !== "0" ?
                        ((Number(bill) * Number(tip)) / (100 * Number(people))).toFixed(2) : "0.00"}</p>
                </div>
                <div className="output">
                    <p className="output-title">Total<br />
                        <span>/person</span>
                    </p>
                    <p className="output-value">${bill !== "" && people !== "" && people !== "0" ?
                        (Number(bill) * (1 + (Number(tip) / 100)) / Number(people)).toFixed(2) : "0.00"}</p>
                </div>
            </div>
            <button className="reset-btn" type="button" onClick={resetCalc} 
            style={{
                backgroundColor: `${reset ? "hsl(172, 67%, 45%)" : "hsl(184, 14%, 56%)"}`,
                color: `${reset ? "hsl(183, 100%, 15%)" : "hsl(186, 14%, 43%)"}`
            }}
            >RESET</button>
        </div>
    )
}

export default Output
