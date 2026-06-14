import FooterProfile from "./FooterProfile"
import HeaderProfile from "./SimpleHeader"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { ShareIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { faClock, faCalendarAlt} from '@fortawesome/free-regular-svg-icons'
import { Link } from "react-router-dom"
import { Event } from "./HomeContent"


export default function EventInfo() {

    const Info = [
        
    {
        imgUrl : "/Image.png",
        eventCategorie : "Travel & Adventure",
        title : "Live Jazz Night",
        month : "Jul",
        day : "14",
        location : "Cotonou, Benin",
        time : "19:30",
        isFree : true,
        path : ""
    },

    {
        imgUrl : "/Image.png",
        eventCategorie : "Tech",
        title : "AI & Future Conference",
        month : "Aug",
        day : "03",
        location : "Abidjan, CI",
        time : "10:00",
        isFree : false,
        price : "$20",
        path : ""
    },

    {
        imgUrl : "/Image.png",
        eventCategorie : "Sport",
        title : "Beach Volleyball Finals",
        month : "Sep",
        day : "09",
        location : "Lomé, Togo",
        time : "16:00",
        isFree : false,
        price : "$5",
        path : ""
    },

    ]

    return <section className='flex flex-col min-h-screen'>

        <HeaderProfile />
 
            <div className="relative flex flex-col flex-grow w-full min-w-[90%] mx-auto mb-32">

                <button className="cursor-pointer"><img src="/LeftArrow.png" alt="" className="absolute top-0 left-16 w-8"/></button>
                <img src="/e-info.png" alt="" className="flex mx-auto mt-8 w-[900px] h-[400px] aspect-square rounded-lg"/>
                <p className="font-bold text-2xl mx-16 mt-3">Sound Of Christmas 2023</p>

                 <div className="flex -mt-9 mx-16 gap-4 self-end text-xl text-gray-700">

                    <button><FontAwesomeIcon icon={faStar} /></button>
                    <button><ShareIcon className="w-6 h-5 text-gray-700 cursor-pointer"/></button>

                </div>

                <div className="relative flex flex-row ">

                    <h3 className="font-semibold mx-16 mt-4">Date & Time</h3>
                    <Link to='' className="absolute flex font-sans font-bold bg-[#FFE047] text-[#2B293D] rounded-lg px-8 w-[180px] text-nowrap text-sm h-[40px] items-center gap-1 right-0 mt-2 mx-16"><img src="/Vector.png" alt="Ticket" className="-mt-1"/>Buy Tickets</Link>

                </div>

                <div className="flex flex-row mx-16 mt-3 gap-2">

                    <FontAwesomeIcon icon={faCalendarAlt} className="mt-1"/>
                    <p>Saturday, 2-December 2023</p>

                </div>

                <div className="flex flex-row mx-16 mt-3 gap-2">

                    <FontAwesomeIcon icon={faClock} className="mt-1"/>
                    <p>6h:30 PM - 9h30 PM</p>

                </div>

                <button className="flex text-blue-600 mx-20 mt-3">+ Add to Calendar</button>

                <div className="flex flex-col self-end -mt-16 mr-16">
                    
                    <p className="font-bold text-lg mt-3">Ticket Information</p>
                    <p className="flex flex-row gap-2 text-sm"><img src="/Vector.png" alt="Ticket" className="aspet-square"/>Standard Ticket: <span className="text-sm">200$ each</span></p>

                </div>

                <h1 className="font-semibold text-xl mx-16 mt-5">Location</h1>

                <div className="flex flex-row max-w-[300px] mx-16 gap-2 mt-2">

                    <MapPinIcon className="flex w-[130px] h-auto self-start mt-1"/>
                    <p className="mt-1 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt possimus pariatur, asperiores magnam reprehenderit nostrum, optio enim quam omnis fuga corrupti laborum, provident blanditiis perspiciatis et? Rerum totam eius commodi.</p>

                </div>

                <img src="/e-localisation.png" alt="" className="mx-16 mt-2 w-[300px] h-[250px]"/>

                <h1 className="font-semibold text-xl mx-16 mt-5">Hosted By</h1>

                <div className="flex flex-row ml-12 mt-5">

                    <img src="/e-maker.png" alt="" className="w-[70px]"/>

                <div className="flex flex-col gap-y-2 mx-3">

                    <p className="whitespace-nowrap text-sm">City Youth Movements</p>

                    <div className="flex flex-row gap-3">

                        <button className="bg-white border-2 border-black rounded-lg px-4 text-sm">Contact</button>
                        <button className="bg-black border-2 border-black text-white rounded-lg px-4 text-sm">+ Follow</button>
                    
                    </div>

                </div>

                </div>

                <h1 className="font-semibold text-xl mx-16 mt-10">Event Description</h1>

                <div className="flex flex-col mx-16 mt-4 gap-y-5">

                    <p className="font-['montserrat'] text-sm">Get ready to kick off the Christmas season in Mumbai with <span className="font-bold">SOUND OF CHRISTMAS - your favourite LIVE Christmas concert!</span></p>
                    <em className="font-['montserrat'] text-sm">City Youth Movement invites you to the 4th edition of our annual Christmas festivities - by the youth and for the youth! Feat. your favourite worship leaders, carols, quizzes and some exciting surprises!</em>
                    <p className="font-['montserrat'] text-sm">Bring your family and friends and sing along your favourite Christmas carols on the 2nd of December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra West. Book your tickets now!</p>
                    <p className="font-['montserrat'] text-sm font-bold">3 Reasons to attend the event</p>

                    <ul>

                        <li className="font-['montserrat'] text-sm">1.  The FIRST Christmas concert of Mumbai!</li>
                        <li className="font-['montserrat'] text-sm">2. A special Christmas Choir</li>
                        <li className="font-['montserrat'] text-sm">3. Special Dance performances and many more surprises!</li>

                    </ul>
                
                </div>

                <h1 className="font-semibold text-xl mx-16 mt-10">Tags</h1>

                <div className="grid grid-cols-5 mx-20 mt-6">

                    <button className="bg-[#F8F7FA] border text-sm font-['montserrat'] px-1 whitespace-nowrap rounded-lg hover:bg-slate-400">Holiday Concert</button>
                    <button className="bg-[#F8F7FA] border text-sm font-['montserrat'] px-1 whitespace-nowrap rounded-lg hover:bg-slate-400">Live Performance</button>
                    <button className="bg-[#F8F7FA] border text-sm font-['montserrat'] px-1 whitespace-nowrap rounded-lg hover:bg-slate-400">Seasonal Event</button>
                    <button className="bg-[#F8F7FA] border text-sm font-['montserrat'] px-1 whitespace-nowrap rounded-lg hover:bg-slate-400">Family Friendly</button>
                    <button className="bg-[#F8F7FA] border text-sm font-['montserrat'] px-1 whitespace-nowrap rounded-lg hover:bg-slate-400">#Chritsmas_Spirit</button>
                    <button className="bg-[#F8F7FA] border text-sm font-['montserrat'] px-1 whitespace-nowrap rounded-lg hover:bg-slate-400">#Chritsmas_Carols</button>

                </div>

                <h1 className="font-semibold text-xl mx-16 mt-10">Other events you may like</h1>

                <div className="flex flex-row">

                    <button className="cursor-pointer"><img src="/SlideRightArrow.png" alt="" className="absolute w-8 left-16 scale-x-[-1]"/></button>

                <div className="grid grid-cols-3 mx-16 mt-10 w-full pl-20">

                    {Info.map((event,index) => (<Link key={index} to={event.path}><Event key={index} {...event}/></Link>))}
    
                </div>

                    <button className="cursor-pointer"><img src="/SlideRightArrow.png" alt="" className="absolute w-8 right-16"/></button>
                
                </div>

            </div>

        <FooterProfile />

    </section>


}