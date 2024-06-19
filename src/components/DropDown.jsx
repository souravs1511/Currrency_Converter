

const DropDown = ({
    currencies,
    currency,
    title = "",
    onChange,
    value

}) => {

    return (
        <div className="flex gap-2">
            <label className="text-lg">{title}</label>
            <div >
                <select className=" bg-[#9873fe] rounded-lg py-1 px-10 text-white font-semibold " onChange={(e) => onChange(e.target.value)} value={value}>
                    {currencies?.map((currency) => { 
                        return (
                            <option value={currency} key={currency}>
                                {currency}
                            </option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default DropDown
