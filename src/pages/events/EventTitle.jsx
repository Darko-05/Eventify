import HeaderProfile from "../../components/SimpleHeader"
import FooterProfile from "../../components/FooterProfile"
import { Link } from "react-router-dom"


export default function EventTitle() {

    return <section className="flex flex-col min-h-screen">

        <HeaderProfile />

        <div className="relative flex flex-col flex-grow min-w-[90%] mx-auto mb-12">

            <Link to='/create-event'><img src="/fleche.png" alt="" className="relative w-5 h-auto top-14 ml-6"/></Link>

            <p className="font-[montserrat] text-[#2D2C3C] font-bold text-xl m-8 mx-20 my-8">Event Title</p>
            <h4 className="text-left font-[montserrat] font-medium text-lg ml-20">Location</h4>
            <h4 className="text-left font-[montserrat] font-medium text-lg ml-20">Time</h4>
            <img src="/Progress1.png" alt="" className="h-12 mx-14 px-6 my-5"/>
            <p className="font-[montserrat] text-[#2D2C3C] font-lg text-xl m-8 mx-20 my-8">Upload Image</p>

            <input type="file" className="ml-[80px] border border-[#828282B2] w-[600px] rounded-sm p-2 text-sm"/>
            
            <p className="font-[montserrat] text-[#2D2C3C] font-medium text-sm m-8 mx-20">Feature Image must be at least 1170 pixels wide by 504 pixels high.</p>
            <p className="font-[montserrat] text-[#2D2C3C] font-medium text-sm m-8 mx-20 -my-6">Valid file formats: JPG, GIF, PNG.</p>

            <div className="flex flex-row mt-24 mr-16 self-end">

                <Link to='/create-event' className="font-[montserrat] text-[#2D2C3C] font-bold text-sm m-8 mx-20">Go back to Edit Event</Link>
                <Link to='/event-title-1' className="flex font-sans font-bold bg-[#2B293D] text-white rounded-lg px-9 mt-5 -ml-8 w-[180px] text-nowrap text-sm h-[40px] items-center">Save & Continue</Link>
 
            </div>

        </div>

        <FooterProfile />
    </section>
}