import { Link } from "react-router-dom"


export default function ChangeEmail({email}) {

    return <section className="relative flex flex-col w-full max-w-screen-lg h-1/2 mb-40">
  
        <h6 className="font-[montserrat] font-bold text-xl text-[#2D2C3C] m-4">Change Email</h6>
        <hr className="border-t-2 border[#6F6F6F4D] mx-3"/>

        <form action="get" method="" className="flex flex-col my-5">

            <h6 className="font-[montserrat] font-bold text-[#2D2C3C] ml-4 mt-8">Current Email: {email}</h6>

            <div className="flex flex-row mx-4 my-5 gap-2">

                <label htmlFor="new-email" className="w-[100px] font-sans font-semibold my-2">New Email:</label>
                <input type="email" id='new-email' placeholder="Enter new email" className="border border-[#828282B2] w-[400px] rounded-sm px-3"/>

            </div>

            <div className="flex flex-row mx-4 gap-2">

                <label htmlFor="confirm-email" className="w-[100px] font-sans font-semibold my-2 whitespace-nowrap">Confirm Email:</label>
                <input type="email" id="confirm-email" placeholder="Confirm email" className="border border-[#828282B2] w-[400px] rounded-sm px-3"/>

            </div>

        </form>

        <Link to='' className="font-sans font-bold bg-[#2B293D] text-white p-2 rounded-lg px-8 w-[180px] text-nowrap text-sm ml-[126px] my-5">Save New Email</Link>
        
    </section>
}