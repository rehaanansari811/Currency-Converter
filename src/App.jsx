import React, { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import img from "../src/assets/37251.jpg"
const App = () => {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setConvertedamount] = useState(0)

    const CurrencyInfo = useCurrencyInfo(from);
    const options = Object.keys(CurrencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedamount(amount);
        setAmount(convertedAmount);
    }

    const convert = () => {
        setConvertedamount(amount * CurrencyInfo[to])
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-purple-100">
            <div className="w-full">
                <h1 className='text-violet-600 text-5xl bold text-center mb-7'>Curency Converter</h1>
                <div className="w-full max-w-md mx-auto shadow-2xl rounded-xl p-3 flex flex-col items-center gap-4">
                    <img src={img} alt="img" className='w-3/5 rounded-xl' />

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()

                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-14 flex items-center justify-center  overflow-hidden">
                            <button
                                type="button"
                                className="border-2 shadow-2xl border-white rounded-full bg-white text-purple-500 h-10 w-10"
                                onClick={swap}
                            >
                                <i class="ri-loop-left-fill text-xl font-semibold "></i>
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-violet-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>

                </div>

            </div>
        </div>
    );
}

export default App