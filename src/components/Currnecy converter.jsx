import { useEffect, useState } from 'react'
import converter from '../assets/pixlr-image-generator-1d1bcc03-844c-425c-a235-a8c13eeb520d.png'
import DropDown from './DropDown';
import swapimg from '../assets/swap.png'
// conversion: 'https://api.frankfurter.app/currencies'
// conversion: 'https://api.frankfurter.app/latest?amount=1&from=USD&to=INR'
const CurrnecyConverter = () => {
    const [currencies, setcurrencies] = useState([]);
    const [amount, setamount] = useState(1)
    const [result, setresult] = useState(0)
    const [from, setfrom] = useState('USD')
    const [to, setTo] = useState('INR')
    const [fromImg, setfromImg] = useState(null)
    const [toImg, setToImg] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const fetchCurrencies = async () => {
        try {
            const res = await fetch("https://api.frankfurter.app/currencies")
            const data = await res.json();

            setcurrencies(Object.keys(data))
        } catch (error) {
            console.error("Enter Fetching", error)

        }
    }

    const featchFlage = async () => {
        const fromImge = `https://flagcdn.com/48x36/${from.toLowerCase().substring(0, 2)}.png`
        const toImge = `https://flagcdn.com/48x36/${to.toLowerCase().substring(0, 2)}.png`
        setToImg(toImge);
        setfromImg(fromImge);
    }

    const ConvertCurrencies = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`)
            const data = await res.json()
            console.log(data);
            setresult(data.rates[to])
        } catch (error) {
            console.error("Enter Fetching", error)

        }
        setIsLoading(false);
    }

    function swap() {
        setfrom(to);
        setTo(from);
    }

    useEffect(() => {
        fetchCurrencies();
        featchFlage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [from, to])
    console.log(currencies);




    return (
        <div className=" flex flex-col mx-3 my-10 rounded-xl p-5 bg-white  lg:w-[50%]">
            <div className=' flex justify-center' >
                <img className=" w-28 rounded-lg my-5" src={converter} alt="" />
            </div>
            <h2 className='text-xl text-center font-bold underline'>The Currency Converter</h2>


            <div className='flex flex-col w-full items-center'>
                <div className='my-12'>
                    <label className='text-lg'>Amount:</label>
                    <input
                        value={amount}
                        onChange={(e) => { setamount(e.target.value) }}
                        className='border-b-[1px] border-black mx-5 outline-none '
                        type="number" name="number" id="number" placeholder="Enter Your Amount" />
                </div>



                <div className='flex lg:gap-5 gap-3'>
                    <DropDown currencies={currencies} title='from:' onChange={setfrom}
                        value={from} Img={fromImg}
                    />
                  <img   onClick={swap} className='w-[40px]' src={swapimg} alt="" />
                    <DropDown currencies={currencies} title='To:' onChange={setTo} value={to} Img={toImg} />
                </div>



                <div className='w-full mt-3'>
                    <button onClick={ConvertCurrencies} className='bg-[#9873fe] px-14 py-1  my-3  rounded-lg hover:bg-purple-500 text-white font-semibold mt-3 w-full '>Convert</button>
                </div>

                <div className='bg-violet-400 px-10 py-4 rounded text-lg text-white font-semibold tracking-wider my-10 '>
                    <p>Your Converted Amount IS : {isLoading ? "Loading..." : result}</p>

                </div>
            </div>
        </div>
    )
}

export default CurrnecyConverter
