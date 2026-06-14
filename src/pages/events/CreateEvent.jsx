import HeaderProfile from "../../components/SimpleHeader"
import FooterProfile from "../../components/FooterProfile"
import { Link } from "react-router-dom"

export default function CreateEvent() {

    return <section className='flex flex-col min-h-screen'>

        <HeaderProfile />

        <div className="relative flex flex-col flex-grow w-full mx-auto mb-40">
             
            <Link to='/userhome'><img src="/fleche.png" alt="" className="relative w-5 h-auto top-14 ml-6"/></Link>
            <p className="font-[montserrat] text-[#2D2C3C] font-bold text-xl m-8 mx-20">Create a New Event</p>
            <img src="/Progress.png" alt="" className="h-12 mx-14 px-6"/>

            <div className="flex flex-col mt-24 ml-32">

                <form action="get" method="" className="flex flex-col">
                    <h4 className="text-left font-[montserrat] font-semibold text-lg ml-32">Event Details</h4>

                    <div className="flex flex-row font-sans my-6 mx-12">

                        <label htmlFor="event-title" className="font-semibold text-sm whitespace-nowrap">Event Title<span className="text-red-600 text-xl m-0 p-0">*</span></label>
                        <input type="text" id="event-title" placeholder="Enter the name of your event" className="border border-[#828282B2] w-[600px] rounded-sm px-3 ml-1"/>

                    </div>

                    <div className="flex flex-row font-sans my-6 mx-2">

                        <label htmlFor="event-category" className="w-[100px] font-semibold text-sm whitespace-nowrap mx-2">Event Category<span className="text-red-600 text-xl mx-0 p-0">*</span></label>
                        <select name="event-category" id="event-category" className="border border-[#828282B2] w-[600px] rounded-sm px-3 ml-1 text-gray-400">
                            <option value="1">Please select one</option>
                        </select>

                    </div>

                    <h4 className="text-left font-[montserrat] font-semibold text-lg ml-32 my-5">Date & Time</h4>

                    <div className="flex flex-row font-sans my-6 mx-10">

                        <h4 className="font-semibold text-sm whitespace-nowrap mb-2">Event Type<span className="text-red-600 text-xl m-0 p-0">*</span></h4>
                        <input type="radio" id="single-event" name='type-event' value="single" className="ml-3 mx-1"/>
                        <label htmlFor="single-event" className="font-sans font-medium text-[#2D2C3C] mt-1">Single Event</label>

                        <input type="radio" id="recurring-event" name='type-event' value="recurring" className="ml-3 mx-1"/>
                        <label htmlFor="recurring-event" className="font-sans font-medium text-[#2D2C3C] mt-1">Recurring Event</label>

                    </div>

                    <div className="relative flex flex-row font-sans my-6 mx-11">

                        <h4 className="font-semibold text-sm whitespace-nowrap mb-2">Sessions(s)<span className="text-red-600 text-xl m-0 p-0">*</span></h4>

                        <label htmlFor="date" className="absolute font-sans font-medium text-[#2D2C3C] mx-2 -top-10 left-[75px] whitespace-nowrap">Start Date <span className="text-red-600 text-xl m-0 p-0">*</span></label>
                        <label htmlFor="start-time" className="absolute font-sans font-medium text-[#2D2C3C] mx-[85px] -top-10 left-[227px] whitespace-nowrap">Start Time<span className="text-red-600 text-xl m-0 p-0">*</span></label>
                        <label htmlFor="end-time" className="absolute font-sans font-medium text-[#2D2C3C] -top-9 left-[540px] whitespace-nowrap">End Time</label>

                        <input type="date" id="date" className="absolute left-[85px] w-[200px] border border-[#828282B2] rounded-sm px-3 text-gray-400 items-start justify-start"/>

                        <input type="time" id="start-time" className="absolute left-[312px] w-[200px] border border-[#828282B2] rounded-sm px-3 text-gray-400"/>

                        <input type="time" id="end-time" className="absolute left-[540px] w-[200px] border border-[#828282B2] rounded-sm px-3 text-gray-400"/>

                    </div>

                    <h4 className="text-left font-[montserrat] font-semibold text-lg ml-32 my-5">Location</h4>

                    <div className="flex flex-row font-sans my-6 mx-2">

                        <label htmlFor="where?" className="w-[100px] font-semibold text-sm whitespace-nowrap mx-2">Where will your <span className="text-red-600 text-xl mx-0 p-0">*</span><br />event take place?</label>
                        <select name="" id="where?" className="border border-[#828282B2] w-[600px] rounded-sm px-3 ml-1 text-gray-400">
                        <option value="1">Please select one</option>
                        </select>

                    </div>

                    <h4 className="text-left font-[montserrat] font-semibold text-lg ml-32 my-5">Additional Information</h4>

                    <div className="flex flex-row font-sans my-6 mx-1">
                        
                        <label htmlFor="event-description" className="font-semibold text-sm whitespace-nowrap">Event Description<span className="text-red-600 text-xl m-0 p-0">*</span></label>
                        <textarea type="text" id="event-description" placeholder="Describe what's special about your event & other important details." className="flex border border-[#828282B2] w-[700px] h-[250px] rounded-sm px-3 ml-1 resize-none placeholder:pt-1"/>

                    </div>

                </form>

                <Link to='/event-title' className="absolute font-sans font-bold bg-[#2B293D] text-white p-2 rounded-lg px-8 w-[180px] text-nowrap text-sm top-[1250px] right-[200px]">Save & Continue</Link>

            </div>

        </div>

        <FooterProfile />

    </section>
}