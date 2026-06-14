import { Link } from "react-router-dom"


export default function Password() {

    return <section className="flex flex-col w-full max-w-screen-lg h-1/2 mb-40">
   
    <h6 className="font-[montserrat] font-bold text-xl text-[#2c2b3b] m-4">Set Password</h6>
    <hr className="border-t-2 border[#6F6F6F4D] mx-3"/>

    <form action="get" method="" className="flex flex-col my-5">

        <div className="flex flex-row mx-4 my-5 gap-10">

            <label htmlFor="old-password" className="w-[100px] font-sans font-semibold my-2 whitespace-nowrap">Old Password:</label>
            <input type="email" id='old-password' placeholder="Enter old password" className="border border-[#828282B2] w-[400px] rounded-sm px-3"/>

        </div>

        <div className="flex flex-row mx-4 gap-10">

            <label htmlFor="new-password" className="w-[100px] font-sans font-semibold my-2 whitespace-nowrap">New Password:</label>
            <input type="email" id="new-password" placeholder="Enter new password" className="border border-[#828282B2] w-[400px] rounded-sm px-3"/>

        </div>

        <div className="flex flex-row mx-4 gap-10 my-3">

            <label htmlFor="confirm-password" className="w-[100px] font-sans font-semibold my-2 whitespace-nowrap">Confirm Password:</label>
            <input type="email" id="confirm-password" placeholder="Confirm your password" className="border border-[#828282B2] w-[400px] rounded-sm px-3"/>

        </div>

    </form>

    <Link to='' className="relative font-sans font-bold bg-[#2B293D] text-white p-2 rounded-lg px-8 w-[180px] text-nowrap text-sm ml-4 mt-5 mb-5">Save Password</Link>

    </section>
}