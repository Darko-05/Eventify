import { Link } from "react-router-dom"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'



export default function SelectTickets() {

    const [number,SetNumber] = useState(1)

    function add() {

        SetNumber(number + 1)

    }

    function cutDown() {

        SetNumber(number - 1)

    }

    return <section className="flex flex-col min-h-screen justify-center items-center bg-slate-400">

        <div className="relative flex flex-col w-full max-w-[431px] h-[450px] bg-slate-300">

            <button className="cursor-pointer"><img src="/Closebutton.png" alt="" className="absolute w-5 h-auto right-0 py-1"/></button>

            <p className="w-full px-5 bg-white">Select Tickets</p>

            <div className="flex flex-row mx-5 my-3 mb-1">

                <p className="text-sm">Tickets Type</p>
                <p className="ml-auto text-sm">Quantity</p>

            </div>

            <div className="flex flex-row w-full bg-white">

                <div className="w-5 h-[80px] bg-green-600"></div>

                <div className="self-center mx-5 font-bold">Standard Tickets <br />
                
                    <p className="mt-3">Price</p>

                </div>
            
            </div>

            <div className="flex flex-row justify-end items-end -my-12">

                <button onClick={add} className="border-2 border-black rounded-full px-1"><FontAwesomeIcon icon={faPlus} size="lg" /></button>
                <p type="text" className="w-[30px] text-center">{number}</p>
                <button onClick={cutDown} disabled={number === 0} className="border-2 border-black rounded-full px-1"><FontAwesomeIcon icon={faMinus} size="lg" /></button>

            </div>

            <div className="flex flex-row h-[80px] bg-white mt-auto border-t-2 border-t-[#1D1D1D26]">

                <p className="flex mx-auto">Qty : {number}</p>
                <p className="flex mr-32">Total :</p>

            </div>

                <Link to='' className="absolute font-sans font-semibold bg-[#2B293D] text-white mx-10 my-1 w-[350px] text-center text-lg h-[40px] flex justify-center items-center bottom-0 rounded-sm">Proceed<span className="ml-2">&gt;</span></Link>

        </div>

    </section>
}