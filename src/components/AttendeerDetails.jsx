import { useState } from "react"
import { Link } from "react-router-dom"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


export default function Detail() {

    const [phone, setPhone] = useState('')

    return <section className="flex flex-col items-center justify-center min-h-screen bg-slate-400">

        <div className="relative flex flex-col w-full max-w-[431px] h-[450px] bg-slate-300">

            <button className="cursor-pointer"><img src="/LeftArrow.png" alt="" className="absolute w-6 h-auto left-0 py-3"/></button>
            <p className="w-full text-lg font-medium p-2 pl-8 bg-white">Attendee Details</p>

            <div className="flex flex-row justify-between">

                <h4 className="m-2 text-sm text-[#5A5A5A] ml-4">Sound Of Christmas 2023</h4>
                <h5 className="m-2 text-sm text-[#5A5A5A]">Saturday, 2 December 2023</h5>

            </div>

            <p className="text-sm font-semibold ml-5">Standard Ticket: Ticket #1</p>

            <div className="flex flex-col w-[390px] h-[200px] self-center mt-2 border-t-4 border-[#4872C6] bg-white ">

            <form action="get" method="" className="flex flex-col h-full flex-grow p-4 space-y-1">
                

                <label htmlFor="full-name" className="text-sm font-medium ml-1">Full Name</label>
                <input type="text" id="full-name" placeholder="Enter Attendee full name" className="border border-[#828282B2] w-[350px] h-[35px] rounded-sm px-3 ml-1"/>
                <label htmlFor="email" className="text-sm font-medium ml-1">E-mail</label>
                <input type="email" id="email" placeholder="Enter your e-mail" className="border border-[#828282B2] w-[350px] h-[35px] rounded-sm px-3 ml-1"/>
                <label htmlFor="phone" className="text-sm font-medium ml-1">Phone</label>

                <PhoneInput
                    country={'bj'} // indicatif par défaut : Bénin
                    value={phone}
                    onChange={setPhone}
                    containerClass="w-[340px] h-[35px] ml-1 border border-[#828282B2] rounded-sm"
                    inputClass="!w-full !h-full !text-sm !pl-10"
                />

            </form>

                <p className="text-sm px-1 mt-3 whitespace-nowrap">I accept the<span className="text-sm text-blue-500"> Terms of Service</span> and i have read the <span className="text-sm text-blue-500">Privacy Policy</span></p>

            </div>
           
            <div className="flex flex-row h-[80px] bg-white mt-auto border-t-4 border-t-[rgba(29,29,29,0.15)]">
                
                <p className="flex mx-auto">Qty : </p>
                <p className="flex mr-32">Total :</p>
                
            </div>
                
            <Link to='' className="absolute font-sans font-semibold bg-[#2B293D] text-white mx-10 my-1 w-[350px] text-center text-lg h-[40px] flex justify-center items-center bottom-0 rounded-sm">Continue to Checkout<span className="ml-2">&gt;</span></Link>

        </div>

    </section>

}