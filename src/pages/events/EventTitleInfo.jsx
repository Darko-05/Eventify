import HeaderProfile from "../../components/SimpleHeader"
import FooterProfile from "../../components/FooterProfile"
import { Link } from "react-router-dom"


export default function EventTitleInfo() {

    return <section className="flex flex-col min-h-screen">

        <HeaderProfile />

        <div className="relative flex flex-col flex-grow min-w-[90%] mx-auto">

            <Link to='/create-event'><img src="/fleche.png" alt="" className="relative w-5 h-auto top-14 ml-6"/></Link>
            
            <p className="font-[montserrat] text-[#2D2C3C] font-bold text-xl m-8 mx-20 my-8">Event Title</p>
            <h4 className="text-left font-[montserrat] font-medium text-lg ml-20">Location</h4>
            <h4 className="text-left font-[montserrat] font-medium text-lg ml-20">Time</h4>
            <img src="/Progress3.png" alt="" className="h-12 mx-14 px-6 my-5"/>
            <p className="font-[montserrat] text-[#2D2C3C] font-lg text-sm m-8 mx-20 my-8">Nearly there! Check everything's correct.</p>

            <div className="flex flex-col min-w-fit min-h-fit border-2 border-[#2B293D] rounded-xl mx-60 mb-20 pb-8">

                <img src="/EventDefaultImage.png" alt="" className="h-[320px] mx-1 px-6 my-5"/>
                <p className="font-[montserrat] text-[#2D2C3C] font-extrabold text-2xl m-8 my-3">Event Title</p>

                <div className="flex flex-row">

                <p className="flex font-[montserrat] text-[#2D2C3C] font-extrabold text-lg m-8">Date & Time</p>
                <p className="flex font-[montserrat] text-[#2D2C3C] font-extrabold text-lg text-right m-8 ml-auto">Ticket Information</p>

                </div>

                <div className="flex flex-col m-8 my-1">

                <p className="font-[montserrat] text-[#2D2C3C] font-medium text-sm">Day, Date</p>
                <p className="font-[montserrat] text-[#2D2C3C] font-medium text-sm my-5">Time</p>
                <p className="font-[montserrat] text-[#2D2C3C] font-medium text-sm text-right self-end -my-20">Ticket Type: Price /ticket</p>
                <button className="flex text-blue-600 mt-32">+ Add to Calendar</button>
                <p className="font-[montserrat] text-[#2D2C3C] font-bold text-xl mt-5">Location</p>
                <p className="font-[montserrat] text-[#2D2C3C] font-bold text-sm mt-5">Address</p>
                <img src="/Map.png" alt="" className="w-[280px] h-[180px] my-5"/>
                <p className="font-[montserrat] text-[#2D2C3C] font-bold text-xl mt-5">Hosted by</p>

                </div>

                <p className="font-[montserrat] text-[#2D2C3C] font-bold text-xl mt-5 ml-8">Event Description</p>
                <p className="ml-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error at molestias reprehenderit esse neque, saepe beatae incidunt odit sint atque? Rerum ut voluptatum magnam eaque, harum perspiciatis dicta dignissimos aperiam porro at ad illo vero fugiat atque eveniet eius, odio, ipsa asperiores? Fugiat earum ipsa nihil culpa consectetur sunt tempore.
                </p>

            </div>

            <div className="flex flex-row my-5 justify-end mr-28 items-center gap-5 mb-20">

                <Link to='' className="flex font-sans font-bold bg-[#FFE047] text-[#2B293D] rounded-lg px-11 w-[180px] text-nowrap text-sm h-[40px] items-center">Save for Later</Link>
                <Link to='' className="flex font-sans font-bold bg-[#2B293D] text-white rounded-lg px-11 w-[180px] text-nowrap text-sm h-[40px] items-center">Publish Event</Link>
        
            </div>
            

        </div>

        <FooterProfile />
    </section>
}