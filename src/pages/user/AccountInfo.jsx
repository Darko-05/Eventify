import { Link } from "react-router-dom"


export default function AccountInfo() {

    return <section className="flex flex-col mb-10">

        <h6 className="font-[montserrat] font-[700] text-lg my-3 mx-7">Account Information</h6>
        <hr className="border-t-2 mx-5"/>

        <div className="relative flex flex-col flex-grow top-4 w-full max-w-screen-lg">

            <h6 className="text-left ml-[115px] my-5 font-[montserrat] font-semibold">Profile Photo</h6>
            <img src="/DefaultPhoto.png" alt="Photo par defaut" className="w-16 h-auto ml-[130px] border border-transparent cursor-pointer hover:border-blue-400 object-cover rounded-full -mt-2"/>
            <h6 className="text-left ml-[115px] my-7 font-[montserrat] font-semibold">Profile Information</h6>

            <div className="flex flex-col ml-[16px]">

                <form action="get" method="" className="flex-col space-y-6">

                    <div className="flex flex-row">

                        <label htmlFor="prenom" className="w-[100px] font-sans font-semibold px-2 py-2">First Name:</label>
                        <input type="text" id="prenom" placeholder="Enter First name" className="border border-[#828282B2] p-2 w-[400px] rounded-sm px-3 py-[4px]"/>
                    
                    </div>

                    <div className="flex flex-row">

                        <label htmlFor="nom" className="w-[100px] font-sans font-semibold px-2 py-2">Last Name:</label>
                        <input type="text" id="nom" placeholder="Enter Last name" className="border border-[#828282B2] p-2 w-[400px] rounded-sm px-3 py-[4px]"/>

                    </div>

                    <div className="flex flex-row">

                        <label htmlFor="website" className="w-[100px] font-sans font-semibold px-2 py-2">Website:</label>
                        <input type="text" id="website" placeholder="Enter Website" className="border border-[#828282B2] p-2 w-[400px] rounded-sm px-3 py-[4px]"/>

                    </div>

                    <div className="flex flex-row">

                        <label htmlFor="company" className="w-[100px] font-sans font-semibold px-2 py-2">Company:</label>
                        <input type="text" id="company" placeholder="Enter company name" className="border border-[#828282B2] p-2 w-[400px] rounded-sm px-3 py-[4px]"/>

                    </div>
                    
                </form>

            </div>

            <h6 className="text-left ml-[115px] mt-8 -mb-4 font-[montserrat] font-semibold">Contact Details</h6>
            <p className="text-left ml-[115px] my-5 font-sans font-normal text-md">These details are private and only used to contact you for ticketing or prizes.</p>

            <div className="flex flex-col ml-[16px]">

                <form action="get" method="" className="flex-col space-y-6">

                    <div className="flex flex-row">

                        <label htmlFor="phone" className="w-[100px] font-sans font-semibold px-2 py-2">Phone Number:</label>
                        <input type="text" id="phone" placeholder="Enter phone number" className="border border-[#828282B2] p-2 w-[400px] rounded-sm px-3 py-[4px]"/>
                    
                    </div>

                    <div className="flex flex-row">

                        <label htmlFor="address" className="w-[100px] font-sans font-semibold px-2 py-2">Adress:</label>
                        <input type="text" id="address" placeholder="Enter address" className="border border-[#828282B2] w-[400px] h-[70px] rounded-sm px-3"/>

                    </div>

                    <div className="flex flex-row">

                        <label htmlFor="city" className="w-[100px] font-sans font-semibold px-2 py-2">City/Town:</label>
                        <input type="text" id="city" placeholder="Enter city" className="border border-[#828282B2] p-2 w-[400px] rounded-sm px-3 py-[4px]"/>

                    </div>

                    <div className="flex flex-row">

                        <label htmlFor="country" className="w-[100px] font-sans font-semibold px-2 py-2">Country:</label>
                        <input type="text" id="country" placeholder="Enter country" className="border border-[#828282B2] p-2 w-[400px] rounded-sm px-3 py-[4px]"/>

                    </div>

                    <div className="flex flex-row">

                        <label htmlFor="pincode" className="w-[100px] font-sans font-semibold px-2 py-2">Pincode:</label>
                        <input type="text" id="pincode" placeholder="Enter pincode" className="border border-[#828282B2] p-2 w-[400px] rounded-sm px-3 py-[4px]"/>

                    </div>
                    
                </form>

                <Link to='' className="relative font-sans font-bold bg-[#2B293D] text-white p-2 rounded-lg px-8 w-[180px] text-nowrap text-sm mt-16 ml-2 m-12">Save My Profile</Link>

            </div>

        </div>

    </section>
}