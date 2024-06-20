/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const DropDown = ({
    currencies,
    title = "",
    onChange,
    value,
    Img

}) => {

    return (

        <div className="flex lg:gap-4 md:gap-2 gap-1 items-center ">
            <label className="text-lg">{title}</label>
                <img src={Img} alt="" className="lg:w-8 lg:h-7 w-[30px] my-2" />
                <select className="outline-none bg-[#9873fe] lg:p-[5px] md:p-[5px] rounded  text-white" onChange={(e) => onChange(e.target.value)} value={value} >
                    {currencies?.map((currency) => { 
                        return (
                            <option value={currency} key={currency}>
                                {currency}
                            </option>
                        )
                    })}
                </select>
            </div>
    )
}

export default DropDown
